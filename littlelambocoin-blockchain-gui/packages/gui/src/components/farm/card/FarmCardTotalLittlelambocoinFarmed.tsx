import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToLittlelambocoinLocaleString, CardSimple } from '@littlelambocoin/core';
import { useGetFarmedAmountQuery } from '@littlelambocoin/api-react';

export default function FarmCardTotalLittlelambocoinFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalLittlelambocoinFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToLittlelambocoinLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total Littlelambocoin Farmed</Trans>}
      value={totalLittlelambocoinFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
