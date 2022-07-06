import { useMemo } from 'react';
import type { Wallet } from '@littlelambocoin/api';
import { WalletType } from '@littlelambocoin/api';
import BigNumber from 'bignumber.js';
import { mojoToCATLocaleString, mojoToLittlelambocoinLocaleString, useLocale } from '@littlelambocoin/core';

export default function useWalletHumanValue(wallet: Wallet, value?: string | number | BigNumber, unit?: string): string {
  const [locale] = useLocale();
  
  return useMemo(() => {
    if (wallet && value !== undefined) {
      const localisedValue = wallet.type === WalletType.CAT
        ? mojoToCATLocaleString(value, locale)
        : mojoToLittlelambocoinLocaleString(value, locale);

      return `${localisedValue} ${unit}`;
    }

    return '';
  }, [wallet, value, unit, locale]);
}
