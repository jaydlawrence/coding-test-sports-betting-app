import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface BetType {
  eventName: string;
  eventId: string;
  marketName: string;
  marketId: string;
  selectionName: string;
  selectionId: string;
  selectionPrice: number;
}

type BetSlipState = {
  bets: BetType[],
}

const initialState: BetSlipState = {
  bets: [],
};

const getIndexOfBet = (bets: BetType[], selectionId: string) => bets.findIndex( bet => bet.selectionId === selectionId);

export const betSlipSlice = createSlice({
  name: 'betSlips',
  initialState,
  reducers: {
    AddRemoveBet: (state, action: PayloadAction<BetType>) => {
      const alreadyExistIndex = getIndexOfBet(state.bets, action.payload.selectionId)
      if (alreadyExistIndex === -1) {
        state.bets.push(action.payload);
      } else {
        state.bets.splice(alreadyExistIndex, 1);
      }
    },
    RemoveBet: (state, action: PayloadAction<string>) => {
      const alreadyExistIndex = getIndexOfBet(state.bets, action.payload)
      
      if (alreadyExistIndex >= 0) {
        state.bets.splice(alreadyExistIndex, 1);
      }
    },
  },
});

export const { AddRemoveBet, RemoveBet } = betSlipSlice.actions;

export const selectBetSlipSelectionIds = (state: RootState) => state.betSlips.bets.map( bet => bet.selectionId);

export const selectBetSlips = (state: RootState) => state.betSlips.bets;

export default betSlipSlice.reducer;
