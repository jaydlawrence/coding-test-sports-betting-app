import React from 'react';
import { IconButton} from '@material-ui/core';
import { BetSlipContainer, CloseButtonContainer } from './styles';
import { Close } from '@material-ui/icons';

type BetSlipDrawerProps = {
  onClose: () => void,
};

export const BetSlipDrawer = ({ onClose }: BetSlipDrawerProps) => {
  return (
    <BetSlipContainer>
      <CloseButtonContainer>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={onClose}>
          <Close fontSize="large"/>
        </IconButton>
      </CloseButtonContainer>
    </BetSlipContainer>
  );
}