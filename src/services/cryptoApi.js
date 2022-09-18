import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': config.XKEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins`)
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`)
        }),
        getCryptoHistory: builder.query({
            query: ({uuid, timePeriod }) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`)
        })
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;