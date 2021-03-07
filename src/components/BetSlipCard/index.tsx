import React from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { HighlightOff } from '@material-ui/icons';
import { BetType } from '../../redux/BetSlipSlice';
import { CardContainer, Content, CustomCard, Header, Price } from './styles';
import { RemoveBet } from '../../redux/BetSlipSlice';

type BetSlipCardProps = {
  bet: BetType,
};

export const BetSlipCard: React.FunctionComponent<BetSlipCardProps> = ({ bet }: BetSlipCardProps) => {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <CustomCard>
        <Header
          title={`${bet.selectionName} - ${bet.marketName}`}
        />
        <Content>
          <Price variant="h6">
            {bet.selectionPrice}
          </Price>
          <IconButton aria-label="delete" onClick={() => dispatch(RemoveBet(bet.selectionId))}>
            <HighlightOff fontSize="large" color="secondary"/>
          </IconButton>
        </Content>
      </CustomCard>
    </CardContainer>
  );
}