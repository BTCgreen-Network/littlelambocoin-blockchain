import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import littlelambocoinFormatter from './littlelambocoinFormatter';

export default function mojoToLittlelambocoinLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return littlelambocoinFormatter(mojo, Unit.MOJO).to(Unit.LITTLELAMBOCOIN).toLocaleString(locale);
}
