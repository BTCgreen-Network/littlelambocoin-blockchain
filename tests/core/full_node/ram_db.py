from typing import Tuple

import aiosqlite

from littlelambocoin.consensus.blockchain import Blockchain
from littlelambocoin.consensus.constants import ConsensusConstants
from littlelambocoin.full_node.block_store import BlockStore
from littlelambocoin.full_node.coin_store import CoinStore
from littlelambocoin.full_node.hint_store import HintStore
from littlelambocoin.util.db_wrapper import DBWrapper


async def create_ram_blockchain(consensus_constants: ConsensusConstants) -> Tuple[aiosqlite.Connection, Blockchain]:
    connection = await aiosqlite.connect(":memory:")
    db_wrapper = DBWrapper(connection)
    block_store = await BlockStore.create(db_wrapper)
    coin_store = await CoinStore.create(db_wrapper)
    hint_store = await HintStore.create(db_wrapper)
    blockchain = await Blockchain.create(coin_store, block_store, consensus_constants, hint_store)
    return connection, blockchain
