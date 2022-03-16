import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("LITTLELAMBOCOIN_ROOT", "~/.littlelambocoin/mainnet"))).resolve()
STANDALONE_ROOT_PATH = Path(
    os.path.expanduser(os.getenv("LITTLELAMBOCOIN_STANDALONE_WALLET_ROOT", "~/.littlelambocoin/standalone_wallet"))
).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("LITTLELAMBOCOIN_KEYS_ROOT", "~/.littlelambocoin_keys"))).resolve()
