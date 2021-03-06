import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import eventReducer from '../redux/EventSlice';
import betSlipReducer from '../redux/BetSlipSlice';


export const store = configureStore({
  reducer: {
    events: eventReducer,
    betSlips: betSlipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
