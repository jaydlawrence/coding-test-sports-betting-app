import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { ResponseType } from '../../app/ResponseTypes';
import axios from 'axios';

type EventState = {
  isLoading: boolean,
  response: ResponseType,
  error: string,
}

const initialState: EventState = {
  isLoading: false,
  response: [],
  error: ''
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
      state.error = '';
      state.response = [];
    },
    setError: (state, action: PayloadAction<string> ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setEventState: (state, action: PayloadAction<ResponseType>) => {
      state.response = action.payload;
      state.isLoading = false;
      state.error = '';
    },
  },
});

export const { startLoading, setError, setEventState } = eventSlice.actions;

export const getEventsAsync = (): AppThunk => async dispatch => {
  try {
    const response = await axios.get('http://www.mocky.io/v2/59f08692310000b4130e9f71');
    dispatch(setEventState(response.data));
  } catch (e) {
    dispatch(setError('There was an error while fetching event data'));
  }
};

export const selectEventResponse = (state: RootState) => {  
  return state.events.response;
}

export default eventSlice.reducer;
