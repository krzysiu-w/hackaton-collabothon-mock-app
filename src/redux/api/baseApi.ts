import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api`,
    prepareHeaders: (headers, { getState }) => {
      const session = (getState() as RootState).session;

      if (session.token) {
        headers.set("Authorization", `Bearer ${session.token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['example'],
  endpoints: () => ({}),
});
