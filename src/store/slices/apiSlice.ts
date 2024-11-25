import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CommentItemType, ItemType, NewsItemType } from '../../types/apiTypes';

export type NewsWithComments = {
  news: NewsItemType;
  comments: CommentItemType[];
};

export type ItemTypeUnion = NewsItemType | CommentItemType;

const BaseUrl = 'https://hacker-news.firebaseio.com/v0/';
const ItemsEndpoint = 'newstories.json?print=pretty';

export const newsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({
    getNewsIds: builder.query<number[], void>({
      query: () => ({ url: ItemsEndpoint }),
      transformResponse: (response: number[]) => response.slice(0, 100),
    }),
    getSingleNews: builder.query<NewsItemType, number>({
      query: (id) => ({ url: `item/${id.toString()}.json?print=pretty` }),
    }),

    getNews: builder.query<NewsItemType[], number[]>({
      async queryFn(ids: number[], _api, _extraOptions, baseQuery) {
        const responses = await Promise.all(
          ids.map((id) => baseQuery(`item/${id.toString()}.json?print=pretty`))
        );
        const news: NewsItemType[] = responses
          .map((response) => response.data)
          .filter((item): item is NewsItemType => item !== undefined);

        return { data: news };
      },
    }),

    getNewsWithComments: builder.query<NewsWithComments, number>({
      async queryFn(id: number, _api, _extraOptions, baseQuery) {
        const newsResult = await baseQuery(
          `item/${id.toString()}.json?print=pretty`
        );
        const newsItem = newsResult.data as NewsItemType;

        const fetchComments = async (
          commentIds: number[]
        ): Promise<CommentItemType[]> => {
          const commentResults = await Promise.all(
            commentIds.map((commentId) =>
              baseQuery(`item/${commentId.toString()}.json?print=pretty`)
            )
          );

          const fetchedComments: CommentItemType[] = [];
          for (const result of commentResults) {
            const comment = result.data as CommentItemType;
            if (comment) {
              if (comment.kids && comment.kids.length) {
                comment.childComment = await fetchComments(comment.kids);
              }
              fetchedComments.push(comment);
            }
          }
          return fetchedComments;
        };

        const comments: CommentItemType[] = [];
        if (newsItem && newsItem.type === ItemType.News) {
          if (newsItem.kids && newsItem.kids.length) {
            comments.push(...(await fetchComments(newsItem.kids)));
          }
        }

        return { data: { news: newsItem, comments } };
      },
    }),
    getComments: builder.query<CommentItemType[], number>({
      async queryFn(id: number, _api, _extraOptions, baseQuery) {
        const newsResult = await baseQuery(
          `item/${id.toString()}.json?print=pretty`
        );
        const newsItem = newsResult.data as NewsItemType;

        const fetchComments = async (
          commentIds: number[]
        ): Promise<CommentItemType[]> => {
          const commentResults = await Promise.all(
            commentIds.map((commentId) =>
              baseQuery(`item/${commentId.toString()}.json?print=pretty`)
            )
          );

          const fetchedComments: CommentItemType[] = [];
          for (const result of commentResults) {
            const comment = result.data as CommentItemType;
            if (comment) {
              if (comment.kids && comment.kids.length) {
                comment.childComment = await fetchComments(comment.kids);
              }
              fetchedComments.push(comment);
            }
          }
          return fetchedComments;
        };

        const comments: CommentItemType[] = [];
        if (newsItem && newsItem.type === ItemType.News) {
          if (newsItem.kids && newsItem.kids.length) {
            comments.push(...(await fetchComments(newsItem.kids)));
          }
        }

        return { data: comments };
      },
    }),
  }),
});

export const {
  useGetNewsIdsQuery,
  useGetNewsQuery,
  useGetNewsWithCommentsQuery,
  useGetSingleNewsQuery,
  useGetCommentsQuery,
} = newsApi;
