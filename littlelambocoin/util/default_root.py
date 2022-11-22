from __future__ import annotations

import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("LITTLELAMBOCOIN_ROOT", "~/.littlelambocoin/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("LITTLELAMBOCOIN_KEYS_ROOT", "~/.littlelambocoin_keys"))).resolve()
