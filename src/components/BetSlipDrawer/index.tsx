import React from 'react';
import { IconButton} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { BetSlipContainer, CloseButtonContainer } from './styles';

import { BetType, selectBetSlips } from '../../redux/BetSlipSlice';
import { BetSlipCard } from '../BetSlipCard';

type BetSlipDrawerProps = {
  onClose: () => void,
};

export const BetSlipDrawer: React.FunctionComponent<BetSlipDrawerProps> = ({ onClose }: BetSlipDrawerProps) => {
  const bets: BetType[] = useSelector(selectBetSlips);

  return (
    <BetSlipContainer>
      <CloseButtonContainer>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={onClose}>
          <Close fontSize="large"/>
        </IconButton>
      </CloseButtonContainer>
      {bets?.length > 0 && bets.map((bet) => (
        <BetSlipCard key={bet.selectionId} bet={bet} />
      ))}
    </BetSlipContainer>
  );
}