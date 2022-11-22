import { useLocalStorage } from '@littlelambocoin/api-react';

export default function useEnableDataLayerService() {
  return useLocalStorage<boolean>('enableDataLayerService', false);
}
