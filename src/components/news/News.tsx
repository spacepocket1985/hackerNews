import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Typography,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { ItemData } from './ItemData';
import { NewsItemType } from '../../types/apiTypes';
import { TimeConverter } from '../../utils/timeConverter';
import React from 'react';


export enum NewsType {
  List = 'list',
  SingleNews = 'news',
}

export const News: React.FC<{
  type: NewsType;
  news: NewsItemType;
  commentsCount?: number;
}> = ({ type, news, commentsCount }) => {
  return (
    <ListItem
      sx={{
        border: '1.5px solid #1976d2',
        borderRadius: 5,
        mb: 1,
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 75%, rgba(25,118,210,0.42620798319327735) 95%)',
        backgroundPosition: 'right',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ListItemAvatar>
        <Avatar>
          <ArticleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          type === NewsType.SingleNews ? (
            <Link href={news.url} target="_blank" color="textPrimary">
              {news.title}
            </Link>
          ) : (
            <Typography component={'span'} variant="subtitle1">
              {news.title}
            </Typography>
          )
        }
        secondary={
          <>
            <ItemData keyData={'date'} valueData={TimeConverter(news.time)} />
            <ItemData keyData={'author'} valueData={news.by} />
            <ItemData keyData={'score'} valueData={news.score.toString()} />
            {type === NewsType.SingleNews && (
              <>
                <ItemData
                  keyData={'commentsCount'}
                  valueData={commentsCount!.toString()}
                />
              </>
            )}
          </>
        }
      />
    </ListItem>
  );
};
