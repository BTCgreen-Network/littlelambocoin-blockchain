import { useGetHeightInfoQuery } from '@littlelambocoin/api-react';
import { FormatLargeNumber } from '@littlelambocoin/core';
import React from 'react';

export default function WalletStatusHeight() {
  const { data: height, isLoading } = useGetHeightInfoQuery(
    {},
    {
      pollingInterval: 10000,
    }
  );

  if (isLoading) {
    return null;
  }

  if (height === undefined || height === null) {
    return null;
  }

  return (
    <>
      (
      <FormatLargeNumber value={height} />)
    </>
  );
}
