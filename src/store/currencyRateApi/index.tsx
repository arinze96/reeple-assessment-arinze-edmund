import { PUBLIC_API_KEY } from "@/envdata";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const currencyRateApi = createApi({
  reducerPath: "currencyRateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v6.exchangerate-api.com/v6",
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    geDefaultPairRate: builder.query<any, { query: string }>({
      query: ({ query }) => ({
        url: `https://v6.exchangerate-api.com/v6/${PUBLIC_API_KEY}/pair/USD/NGN`,
        method: "GET",
      }),
    }),

    getPairRate: builder.query<any, { base: string, convert: string }>({
      query: ({ base, convert }) => ({
        url: `https://v6.exchangerate-api.com/v6/${PUBLIC_API_KEY}/pair/${base}/${convert}`,
        method: "GET",
      }),
    }),

    getAllUSDPairRate: builder.query<any, void>({
      query: () => ({
        url: `/${PUBLIC_API_KEY}/latest/USD`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGeDefaultPairRateQuery, useGetAllUSDPairRateQuery, useGetPairRateQuery } =
  currencyRateApi;
