import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ message: string }, void>({
      query: () => '/ping'
    })
  })
});

export const { useLoginMutation } = authApi;