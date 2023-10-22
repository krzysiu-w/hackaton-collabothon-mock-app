import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api2`,
    prepareHeaders: (headers) => {

      headers.set("apiKey", `ZHVwYWR1cGEyMTM3Njk2OQ`);

      return headers;
    },
  }),
  tagTypes: ['example'],
  endpoints: () => ({}),
});
