import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type JWT = string;

export interface SessionState {
  token?: JWT;
}

const initialState: SessionState = {};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<JWT>) {
      state.token = action.payload;
    },
    clearCurrentSessionData(state) {
      state.token = undefined;
    },
    logOut(state) {
      sessionSlice.caseReducers.clearCurrentSessionData(state);
    }
  }
});

export const { setToken, logOut, clearCurrentSessionData } =
  sessionSlice.actions;

export default sessionSlice.reducer;