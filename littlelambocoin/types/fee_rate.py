from __future__ import annotations

import math
from dataclasses import dataclass

import typing_extensions

from littlelambocoin.types.clvm_cost import CLVMCost
from littlelambocoin.types.mojos import Mojos
from littlelambocoin.util.ints import uint64
from littlelambocoin.util.streamable import Streamable, streamable


@typing_extensions.final
@streamable
@dataclass(frozen=True)
class FeeRate(Streamable):
    """
    Represents Fee Rate in mojos divided by CLVM Cost.
    Performs LLC/mojo conversion.
    Similar to 'Fee per cost'.
    """

    mojos_per_clvm_cost: uint64

    @classmethod
    def create(cls, mojos: Mojos, clvm_cost: CLVMCost) -> FeeRate:
        return cls(uint64(math.ceil(mojos / clvm_cost)))
