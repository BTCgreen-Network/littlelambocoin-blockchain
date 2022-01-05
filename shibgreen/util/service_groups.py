from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "littlelambocoin_harvester littlelambocoin_timelord_launcher littlelambocoin_timelord littlelambocoin_farmer littlelambocoin_full_node littlelambocoin_wallet".split(),
    "node": "littlelambocoin_full_node".split(),
    "harvester": "littlelambocoin_harvester".split(),
    "farmer": "littlelambocoin_harvester littlelambocoin_farmer littlelambocoin_full_node littlelambocoin_wallet".split(),
    "farmer-no-wallet": "littlelambocoin_harvester littlelambocoin_farmer littlelambocoin_full_node".split(),
    "farmer-only": "littlelambocoin_farmer".split(),
    "timelord": "littlelambocoin_timelord_launcher littlelambocoin_timelord littlelambocoin_full_node".split(),
    "timelord-only": "littlelambocoin_timelord".split(),
    "timelord-launcher-only": "littlelambocoin_timelord_launcher".split(),
    "wallet": "littlelambocoin_wallet littlelambocoin_full_node".split(),
    "wallet-only": "littlelambocoin_wallet".split(),
    "introducer": "littlelambocoin_introducer".split(),
    "simulator": "littlelambocoin_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
