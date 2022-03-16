import Big from 'big.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function mojoToLittlelambocoinLocaleString(mojo: string | number | Big) {
  return littlelambocoinFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.LITTLELAMBOCOIN)
    .toLocaleString();
}