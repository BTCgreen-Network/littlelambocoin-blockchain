import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("SHIBGREEN_ROOT", "~/.littlelambocoin/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("SHIBGREEN_KEYS_ROOT", "~/.littlelambocoin_keys"))).resolve()
