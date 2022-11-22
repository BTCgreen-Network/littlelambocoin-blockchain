import { mojoToCAT, mojoToLittlelambocoin } from '@littlelambocoin/core';
import BigNumber from 'bignumber.js';

import type OfferBuilderData from '../@types/OfferBuilderData';
import type OfferSummary from '../@types/OfferSummary';
import { launcherIdToNFTId } from './nfts';

export default function offerToOfferBuilderData(offerSummary: OfferSummary): OfferBuilderData {
  const { fees, offered, requested, infos } = offerSummary;

  const offeredXch: OfferBuilderData['offered']['llc'] = [];
  const offeredTokens: OfferBuilderData['offered']['tokens'] = [];
  const offeredNfts: OfferBuilderData['offered']['nfts'] = [];
  const requestedXch: OfferBuilderData['requested']['llc'] = [];
  const requestedTokens: OfferBuilderData['requested']['tokens'] = [];
  const requestedNfts: OfferBuilderData['requested']['nfts'] = [];

  // processing requested first because it's what you/we will give

  Object.keys(requested).forEach((id) => {
    const amount = new BigNumber(requested[id]);
    const info = infos[id];

    if (info?.type === 'CAT') {
      offeredTokens.push({
        amount: mojoToCAT(amount).toFixed(),
        assetId: id,
      });
    } else if (info?.type === 'singleton') {
      offeredNfts.push({
        nftId: launcherIdToNFTId(info.launcherId),
      });
    } else if (id === 'llc') {
      offeredXch.push({
        amount: mojoToLittlelambocoin(amount).toFixed(),
      });
    }
  });

  Object.keys(offered).forEach((id) => {
    const amount = new BigNumber(offered[id]);
    const info = infos[id];

    if (info?.type === 'CAT') {
      requestedTokens.push({
        amount: mojoToCAT(amount).toFixed(),
        assetId: id,
      });
    } else if (info?.type === 'singleton') {
      requestedNfts.push({
        nftId: launcherIdToNFTId(info.launcherId),
      });
    } else if (id === 'llc') {
      requestedXch.push({
        amount: mojoToLittlelambocoin(amount).toFixed(),
      });
    }
  });

  return {
    offered: {
      llc: offeredXch,
      tokens: offeredTokens,
      nfts: offeredNfts,
      fee: [],
    },
    requested: {
      llc: requestedXch,
      tokens: requestedTokens,
      nfts: requestedNfts,
      fee: [
        {
          amount: mojoToLittlelambocoin(fees).toFixed(),
        },
      ],
    },
  };
}
