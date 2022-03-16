import type { Wallet } from '@littlelambocoin/api';
import { WalletType } from '@littlelambocoin/api';
import { mojoToCATLocaleString, mojoToLittlelambocoinLocaleString } from '@littlelambocoin/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToLittlelambocoinLocaleString(value);
}
