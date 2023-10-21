import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  clearCurrentSessionData,
  logOut,
  SessionState,
  setToken,
} from "./session/sessionSlice";
import { RootState } from "./store";
import Cookie from "js-cookie";

const LOCAL_SESSION_KEY = "token";

export const sessionListenerMiddleware = createListenerMiddleware();
export const saveCookieMiddleware = createListenerMiddleware();

sessionListenerMiddleware.startListening({
  matcher: isAnyOf(logOut, clearCurrentSessionData),
  effect: () => {
    Cookie.set(LOCAL_SESSION_KEY, "", {
      expires: -1,
    });
  },
});

saveCookieMiddleware.startListening({
  matcher: isAnyOf(setToken),
  effect: (_action, listenerApi) => {
    console.log('adasd');
    
    const token = (listenerApi.getState() as RootState).session.token ?? "";

    Cookie.set(LOCAL_SESSION_KEY, token, {
      expires: new Date(Date.now() + 30 * 60000),
      path: "/",
    });
  },
});

export function preloadSession(): SessionState {
  const token = Cookie.get(LOCAL_SESSION_KEY);

  return { token };
}
