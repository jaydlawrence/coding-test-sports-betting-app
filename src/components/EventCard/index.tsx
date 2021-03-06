import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ButtonContainer,
  CardContainer,
  Content,
  CustomCard,
  Header,
  MarketName,
  SelectionButton,
  SelectionName,
  SelectionPrice
} from './styles';
import { EventType } from '../../app/ResponseTypes';
import { BetType, AddRemoveBet, selectBetSlipSelectionIds } from '../../redux/BetSlipSlice';


type EventCardProps = {
  event: EventType,
}

export const EventCard = ({ event }: EventCardProps) => {
  const selectedIds = useSelector(selectBetSlipSelectionIds);
  const dispatch = useDispatch();
  return (
    <CardContainer className="App-Card-Container">
      <CustomCard  className="App-Card">
        <Header
          title={event.name}
        />
        <Content>
          {event.markets.map( market => (
            <div key={market.id}>
              <MarketName color="textSecondary">
                {market.name}
              </MarketName>
              <ButtonContainer>
                {market.selections.map( selection => (
                  <SelectionButton
                    selected={selectedIds && selectedIds.some(selectionId => selectionId === selection.id)}
                    key={selection.id}
                    variant="contained"
                    onClick={() => {
                      const bet: BetType = {
                        eventName: event.name,
                        eventId: event.id,
                        marketName: market.name,
                        marketId: market.id,
                        selectionName: selection.name,
                        selectionId: selection.id,
                        selectionPrice: selection.price,
                      }
                      dispatch(AddRemoveBet(bet));
                    }}
                  >
                    <SelectionName>
                      {selection.name}
                    </SelectionName>
                    <SelectionPrice>
                      {selection.price}
                    </SelectionPrice>
                  </SelectionButton>
                ))}
              </ButtonContainer>
            </div>
          ))}
        </Content>
      </CustomCard>
    </CardContainer>
  )
}