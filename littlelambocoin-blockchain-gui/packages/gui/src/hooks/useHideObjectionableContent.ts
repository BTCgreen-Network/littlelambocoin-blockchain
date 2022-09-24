import { useLocalStorage } from '@littlelambocoin/core';

export default function useHideObjectionableContent() {
  return useLocalStorage<boolean>('hideObjectionableContent', true);
}
