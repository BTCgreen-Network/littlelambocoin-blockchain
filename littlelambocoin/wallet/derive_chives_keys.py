from typing import List, Optional, Tuple, Set

from blspy import AugSchemeMPL, PrivateKey, G1Element

from littlelambocoin.consensus.coinbase import create_puzzlehash_for_pk
from littlelambocoin.types.blockchain_format.sized_bytes import bytes32
from littlelambocoin.util.ints import uint32

# EIP 2334 bls key derivation
# https://eips.ethereum.org/EIPS/eip-2334
# 12381 = bls spec number
# 9699 = Chives blockchain number and port number
# 0, 1, 2, 3, 4, 5, 6 farmer, pool, wallet, local, backup key, singleton, pooling authentication key numbers

# Allows up to 100 pool wallets (plot NFTs)
MAX_POOL_WALLETS = 100


def _derive_path(sk: PrivateKey, path: List[int]) -> PrivateKey:
    for index in path:
        sk = AugSchemeMPL.derive_child_sk(sk, index)
    return sk


def _derive_path_unhardened(sk: PrivateKey, path: List[int]) -> PrivateKey:
    for index in path:
        sk = AugSchemeMPL.derive_child_sk_unhardened(sk, index)
    return sk


def chives_master_sk_to_farmer_sk(master: PrivateKey) -> PrivateKey:
    return _derive_path(master, [12381, 9699, 0, 0])


def chives_master_sk_to_pool_sk(master: PrivateKey) -> PrivateKey:
    return _derive_path(master, [12381, 9699, 1, 0])


def chives_master_sk_to_wallet_sk_intermediate(master: PrivateKey) -> PrivateKey:
    return _derive_path(master, [12381, 9699, 2])


def master_sk_to_wallet_sk(master: PrivateKey, index: uint32) -> PrivateKey:
    intermediate = chives_master_sk_to_wallet_sk_intermediate(master)
    return _derive_path(intermediate, [index])


def chives_master_sk_to_wallet_sk_unhardened_intermediate(master: PrivateKey) -> PrivateKey:
    return _derive_path_unhardened(master, [12381, 9699, 2])


def chives_master_sk_to_wallet_sk_unhardened(master: PrivateKey, index: uint32) -> PrivateKey:
    intermediate = chives_master_sk_to_wallet_sk_unhardened_intermediate(master)
    return _derive_path_unhardened(intermediate, [index])


def chives_master_sk_to_local_sk(master: PrivateKey) -> PrivateKey:
    return _derive_path(master, [12381, 9699, 3, 0])


def chives_master_sk_to_backup_sk(master: PrivateKey) -> PrivateKey:
    return _derive_path(master, [12381, 9699, 4, 0])


def chives_master_sk_to_singleton_owner_sk(master: PrivateKey, pool_wallet_index: uint32) -> PrivateKey:
    """
    This key controls a singleton on the blockchain, allowing for dynamic pooling (changing pools)
    """
    return _derive_path(master, [12381, 9699, 5, pool_wallet_index])


def chives_master_sk_to_pooling_authentication_sk(master: PrivateKey, pool_wallet_index: uint32, index: uint32) -> PrivateKey:
    """
    This key is used for the farmer to authenticate to the pool when sending partials
    """
    assert index < 10000
    assert pool_wallet_index < 10000
    return _derive_path(master, [12381, 9699, 6, pool_wallet_index * 10000 + index])


def chives_find_owner_sk(all_sks: List[PrivateKey], owner_pk: G1Element) -> Optional[Tuple[PrivateKey, uint32]]:
    for pool_wallet_index in range(MAX_POOL_WALLETS):
        for sk in all_sks:
            try_owner_sk = chives_master_sk_to_singleton_owner_sk(sk, uint32(pool_wallet_index))
            if try_owner_sk.get_g1() == owner_pk:
                return try_owner_sk, uint32(pool_wallet_index)
    return None


def chives_find_authentication_sk(all_sks: List[PrivateKey], owner_pk: G1Element) -> Optional[PrivateKey]:
    # NOTE: might need to increase this if using a large number of wallets, or have switched authentication keys
    # many times.
    for pool_wallet_index in range(MAX_POOL_WALLETS):
        for sk in all_sks:
            try_owner_sk = chives_master_sk_to_singleton_owner_sk(sk, uint32(pool_wallet_index))
            if try_owner_sk.get_g1() == owner_pk:
                # NOTE: ONLY use 0 for authentication key index to ensure compatibility
                return chives_master_sk_to_pooling_authentication_sk(sk, uint32(pool_wallet_index), uint32(0))
    return None


def match_address_to_sk(
    sk: PrivateKey, addresses_to_search: List[bytes32], max_ph_to_search: int = 500
) -> Set[bytes32]:
    """
    Checks the list of given address is a derivation of the given sk within the given number of derivations
    Returns a Set of the addresses that are derivations of the given sk
    """
    if sk is None or not addresses_to_search:
        return set()

    found_addresses: Set[bytes32] = set()
    search_list: Set[bytes32] = set(addresses_to_search)

    for i in range(max_ph_to_search):

        phs = [
            create_puzzlehash_for_pk(master_sk_to_wallet_sk(sk, uint32(i)).get_g1()),
            create_puzzlehash_for_pk(master_sk_to_wallet_sk_unhardened(sk, uint32(i)).get_g1()),
        ]

        for address in search_list:
            if address in phs:
                found_addresses.add(address)

        search_list = search_list - found_addresses
        if not len(search_list):
            return found_addresses

    return found_addresses
