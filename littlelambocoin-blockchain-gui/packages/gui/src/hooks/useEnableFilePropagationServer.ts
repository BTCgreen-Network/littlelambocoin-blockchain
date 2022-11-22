import { useLocalStorage } from '@littlelambocoin/api-react';

export default function useEnableFilePropagationServer() {
  return useLocalStorage<boolean>('enableFilePropagationServer', false);
}
