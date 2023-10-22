import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://collabothon23fra-1253.lm.r.appspot.com/api2`,
    prepareHeaders: (headers) => {
      
      headers.set("x-api-key", `ZHVwYWR1cGEyMTM3Njk2OQ`);

      return headers;
    },
  }),
  tagTypes: ['cc'],
  endpoints: () => ({}),
});

