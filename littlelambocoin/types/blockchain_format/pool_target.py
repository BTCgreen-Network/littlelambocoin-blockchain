from __future__ import annotations

from dataclasses import dataclass

from littlelambocoin.types.blockchain_format.sized_bytes import bytes32
from littlelambocoin.util.ints import uint32
from littlelambocoin.util.streamable import Streamable, streamable


@streamable
@dataclass(frozen=True)
class PoolTarget(Streamable):
    puzzle_hash: bytes32
    max_height: uint32  # A max height of 0 means it is valid forever
