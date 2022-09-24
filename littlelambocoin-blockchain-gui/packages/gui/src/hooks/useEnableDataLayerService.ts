import { useLocalStorage } from '@littlelambocoin/core';

export default function useEnableDataLayerService() {
  return useLocalStorage<boolean>('enableDataLayerService', false);
}
