import { useGetFarmedAmountQuery } from '@littlelambocoin/api-react';
import { useCurrencyCode, mojoToLittlelambocoinLocaleString, CardSimple, useLocale } from '@littlelambocoin/core';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export default function FarmCardTotalLittlelambocoinFarmed() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalLittlelambocoinFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToLittlelambocoinLocaleString(farmedAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount, locale, currencyCode]);

  return (
    <CardSimple title={<Trans>Total Littlelambocoin Farmed</Trans>} value={totalLittlelambocoinFarmed} loading={isLoading} error={error} />
  );
}
