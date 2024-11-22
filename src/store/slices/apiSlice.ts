import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CommentItemType,
  ItemType,
  NewsItemType,
} from '../../types/apiTypes.ts';

const BaseUrl = 'https://hacker-news.firebaseio.com/v0/';
const ItemsEndpoint = 'newstories.json?print=pretty';

export const newsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  tagTypes: ['news'],
  endpoints: (builder) => ({
    getLastNews: builder.query<number[], void>({
      query: () => ({ url: ItemsEndpoint }),
      transformResponse: (response: number[]) => response.slice(0, 100),
      providesTags: () => ['news'],
    }),

    getItems: builder.query<
      { news: NewsItemType[]; comments: CommentItemType[] },
      number[]
    >({
      async queryFn(ids: number[], _api, _extraOptions, baseQuery) {
        const results = await Promise.all(
          ids.map((id) => baseQuery(`item/${id.toString()}.json?print=pretty`))
        );

        const news: NewsItemType[] = [];
        const comments: CommentItemType[] = [];

        const fetchComments = async (commentIds: number[]) => {
          const commentResults = await Promise.all(
            commentIds.map((id) =>
              baseQuery(`item/${id.toString()}.json?print=pretty`)
            )
          );

          for (const result of commentResults) {
            const comment = result.data as CommentItemType;
            if (comment) {
              comments.push(comment);

              if (comment.kids && comment.kids.length) {
                await fetchComments(comment.kids);
              }
            }
          }
        };

        for (const result of results) {
          const item = result.data as NewsItemType;
          if (item && item.type === ItemType.News) {
            news.push(item);

            if (item.kids && item.kids.length) {
              await fetchComments(item.kids);
            }
          }
        }

        return { data: { news, comments } };
      },
    }),
  }),
});

export const { useGetLastNewsQuery, useGetItemsQuery } = newsApi;
