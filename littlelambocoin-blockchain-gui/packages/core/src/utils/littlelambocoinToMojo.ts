import Big from 'big.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function littlelambocoinToMojo(littlelambocoin: string | number | Big): number {
  return littlelambocoinFormatter(littlelambocoin, Unit.LITTLELAMBOCOIN)
    .to(Unit.MOJO)
    .toNumber();
}