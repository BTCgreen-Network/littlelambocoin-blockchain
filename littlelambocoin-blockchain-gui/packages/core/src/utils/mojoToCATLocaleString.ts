import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function mojoToCATLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return littlelambocoinFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toLocaleString(locale);
}
