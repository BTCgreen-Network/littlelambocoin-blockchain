import { useLocalStorage } from '@littlelambocoin/core';

export default function useEnableAutoLogin() {
  return useLocalStorage<boolean>('enableAutoLogin', true);
}
