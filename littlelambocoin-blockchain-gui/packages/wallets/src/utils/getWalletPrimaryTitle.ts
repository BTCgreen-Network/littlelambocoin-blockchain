import { WalletType } from '@littlelambocoin/api';
import type { Wallet } from '@littlelambocoin/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Littlelambocoin';
    default:
      return wallet.name;
  }
}
