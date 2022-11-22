import { useLocalStorage } from '@littlelambocoin/api-react';

export default function useEnableAutoLogin() {
  return useLocalStorage<boolean>('enableAutoLogin', true);
}
