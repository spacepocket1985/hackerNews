import * as React from 'react';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { News, NewsType } from './News';
import { NewsItemType } from '../../types/apiTypes';

export const NewsList: React.FC<{ news: NewsItemType[] }> = ({ news }) => {
  const renderNews = news!.map((item) => (
    <Link
      to={String(item.id)}
      key={item.id}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <News type={NewsType.List} news={item} />
    </Link>
  ));
  return <List sx={{ width: '100%' }}>{renderNews}</List>;
};
