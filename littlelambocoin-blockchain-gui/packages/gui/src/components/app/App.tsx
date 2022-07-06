import React from 'react';
import { ModeProvider, Persist } from '@littlelambocoin/core';
import AppRouter from './AppRouter';

export default function App() {
  return (
    <ModeProvider persist>
      <Persist namespace="root">
        <AppRouter />
      </Persist>
    </ModeProvider>
  );
}
