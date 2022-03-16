import Big from 'big.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function mojoToLittlelambocoin(mojo: string | number | Big): number {
  return littlelambocoinFormatter(mojo, Unit.MOJO)
    .to(Unit.LITTLELAMBOCOIN)
    .toNumber();
}