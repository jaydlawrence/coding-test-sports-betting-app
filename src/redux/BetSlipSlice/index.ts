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

export const betSlipSlice = createSlice({
  name: 'betSlips',
  initialState,
  reducers: {
    AddRemoveBet: (state, action: PayloadAction<BetType>) => {
      const alreadyExistIndex = state.bets.findIndex( bet => bet.selectionId === action.payload.selectionId);
      
      if (alreadyExistIndex === -1) {
        state.bets.push(action.payload);
      } else {
        state.bets.splice(alreadyExistIndex, 1);
      }
    },
  },
});

export const { AddRemoveBet } = betSlipSlice.actions;

export const selectBetSlipSelectionIds = (state: RootState) => state.betSlips.bets.map( bet => bet.selectionId);

export default betSlipSlice.reducer;
