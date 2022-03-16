import Big from 'big.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function mojoToCAT(mojo: string | number | Big): number {
  return littlelambocoinFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toNumber();
}