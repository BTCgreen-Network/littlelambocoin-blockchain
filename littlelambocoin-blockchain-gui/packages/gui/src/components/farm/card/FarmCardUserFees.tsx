import { useGetFarmedAmountQuery } from '@littlelambocoin/api-react';
import { useCurrencyCode, mojoToLittlelambocoinLocaleString, CardSimple, useLocale } from '@littlelambocoin/core';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export default function FarmCardUserFees() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const feeAmount = data?.feeAmount;

  const userTransactionFees = useMemo(() => {
    if (feeAmount !== undefined) {
      return (
        <>
          {mojoToLittlelambocoinLocaleString(feeAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [feeAmount, locale, currencyCode]);

  return (
    <CardSimple
      title={<Trans>User Transaction Fees</Trans>}
      value={userTransactionFees}
      loading={isLoading}
      error={error}
    />
  );
}
