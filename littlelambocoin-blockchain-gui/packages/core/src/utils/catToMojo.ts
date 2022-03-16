import Big from 'big.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return littlelambocoinFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}