import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsItemType } from '../../types/news';

const BaseUrl = 'https://hacker-news.firebaseio.com/v0/';
const NewsEndpoint = 'newstories.json?print=pretty';

export const newsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  tagTypes: ['news'],
  endpoints: (builder) => ({
    getLastNews: builder.query<number[], void>({
      query: () => NewsEndpoint,
      transformResponse: (response: number[]) => response.slice(0, 100),
      providesTags: () => ['news'],
    }),

    getNewsItems: builder.query<NewsItemType[], number[]>({
      async queryFn(ids: number[], _api, _extraOptions, baseQuery) {
        const results = await Promise.all(
          ids.map((id) => baseQuery(`item/${id.toString()}.json?print=pretty`))
        );

        const newsItems: NewsItemType[] = results
          .map((result) => result.data)
          .filter((item): item is NewsItemType => item !== undefined);

        return { data: newsItems };
      },
    }),
  }),
});

export const { useGetLastNewsQuery, useGetNewsItemsQuery } = newsApi;
