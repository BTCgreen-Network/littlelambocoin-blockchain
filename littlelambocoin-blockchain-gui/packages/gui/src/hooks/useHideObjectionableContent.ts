import { useLocalStorage } from '@littlelambocoin/api-react';

export default function useHideObjectionableContent() {
  return useLocalStorage<boolean>('hideObjectionableContent', true);
}
