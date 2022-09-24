import { useLocalStorage } from '@littlelambocoin/core';

export default function useEnableFilePropagationServer() {
  return useLocalStorage<boolean>('enableFilePropagationServer', false);
}
