from dataclasses import dataclass
from typing import Optional

from littlelambocoin.types.blockchain_format.sized_bytes import bytes32
from littlelambocoin.types.blockchain_format.vdf import VDFInfo, VDFProof
from littlelambocoin.util.streamable import Streamable, streamable


@streamable
@dataclass(frozen=True)
class SignagePoint(Streamable):
    cc_vdf: Optional[VDFInfo]
    cc_proof: Optional[VDFProof]
    rc_vdf: Optional[VDFInfo]
    rc_proof: Optional[VDFProof]
    timelord_reward_puzzle_hash: Optional[bytes32]
