import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function littlelambocoinToMojo(littlelambocoin: string | number | BigNumber): BigNumber {
  return littlelambocoinFormatter(littlelambocoin, Unit.LITTLELAMBOCOIN).to(Unit.MOJO).toBigNumber();
}
