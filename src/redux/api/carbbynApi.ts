import { baseApi } from './baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUserCC: builder.mutation<void, { email: string, cc: number }>({
      query: (data) => ({
        url: '/cc',
        method: 'POST',
        body: data
      })
      
    })
  })
});

export const { useAddUserCCMutation } = authApi;