import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as LittlelambocoinIcon } from './images/littlelambocoin.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={LittlelambocoinIcon} viewBox="0 0 150 58" {...props} />;
}
