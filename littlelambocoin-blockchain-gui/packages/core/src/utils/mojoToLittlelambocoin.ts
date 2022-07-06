import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function mojoToLittlelambocoin(mojo: string | number | BigNumber): BigNumber {
  return littlelambocoinFormatter(mojo, Unit.MOJO)
    .to(Unit.LITTLELAMBOCOIN)
    .toBigNumber();
}