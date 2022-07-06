import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function catToMojo(cat: string | number | BigNumber): BigNumber {
  return littlelambocoinFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toBigNumber();
}