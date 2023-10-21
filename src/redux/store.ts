import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './session/sessionSlice';
import { baseApi } from './api/baseApi';
import { preloadSession, saveCookieMiddleware, sessionListenerMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  preloadedState: { session: preloadSession() },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(
      baseApi.middleware,
      sessionListenerMiddleware.middleware,
      saveCookieMiddleware.middleware
    )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
