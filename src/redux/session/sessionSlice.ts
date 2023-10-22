import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

export type JWT = string;

export interface SessionState {
  token?: JWT;
  email?: string;
  username?: string;
}

const initialState: SessionState = {};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<JWT>) {
      state.token = action.payload;
      
      const { email, name } = jwt_decode(action.payload) as {
        email: string;
        name: string;
      };

      state.email = email;
      state.username = name;
    },
    clearCurrentSessionData(state) {
      state.token = undefined;
    },
    logOut(state) {
      sessionSlice.caseReducers.clearCurrentSessionData(state);
    },
  },
});

export const { setToken, logOut, clearCurrentSessionData } =
  sessionSlice.actions;

export default sessionSlice.reducer;
