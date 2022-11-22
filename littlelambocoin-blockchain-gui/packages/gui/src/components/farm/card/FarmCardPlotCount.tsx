import { useGetTotalHarvestersSummaryQuery } from '@littlelambocoin/api-react';
import { FormatLargeNumber, CardSimple } from '@littlelambocoin/core';
import { Trans } from '@lingui/macro';
import React from 'react';

export default function FarmCardPlotCount() {
  const { plots, isLoading } = useGetTotalHarvestersSummaryQuery();

  return (
    <CardSimple title={<Trans>Plot Count</Trans>} value={<FormatLargeNumber value={plots} />} loading={isLoading} />
  );
}
