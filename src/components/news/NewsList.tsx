import * as React from 'react';
import List from '@mui/material/List';

import {
  useGetNewsIdsQuery,
  useGetNewsQuery,
} from '../../store/slices/apiSlice';
import { Link } from 'react-router-dom';

import { News, NewsType } from './News';

export const NewsList: React.FC = () => {
  const { data: newsIds } = useGetNewsIdsQuery();
  const { data: news, isFetching } = useGetNewsQuery(newsIds ?? []);

  if (isFetching) return <div>Loading...</div>;

  const renderNews = news!.map((item) => (
    <Link
      to={String(item.id)}
      key={item.id}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <News type={NewsType.List} news={item} />
    </Link>
  ));
  return <List>{renderNews}</List>;
};
