import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArticleIcon from '@mui/icons-material/Article';

import { NewsItemType } from '../../types/apiTypes';

export const NewsList: React.FC<{ news: NewsItemType[] }> = ({ news }) => {
  const renderNews = news.map((item) => (
    <ListItem key={item.id}>
      <ListItemAvatar>
        <Avatar>
          <ArticleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary={item.score} />
    </ListItem>
  ));
  return <List>{renderNews}</List>;
};
