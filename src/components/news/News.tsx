import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { ItemData } from './ItemData';
import { NewsItemType } from '../../types/apiTypes';
import { TimeConverter } from '../../utils/timeConverter';

export enum NewsType {
  List = 'list',
  SingleNews = 'news',
}

export const News: React.FC<{ type: NewsType; news: NewsItemType }> = ({
  type,
  news,
}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ArticleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={news.title}
        secondary={
          <>
            <ItemData keyData={'date'} valueData={TimeConverter(news.time)} />
            <ItemData keyData={'author'} valueData={news.by} />
            <ItemData keyData={'score'} valueData={news.score.toString()} />
            {type === NewsType.SingleNews ? (
              <ItemData
                keyData={'commentsCount'}
                valueData={(news.kids?.length || 0).toString()}
              />
            ) : null}
          </>
        }
      />
    </ListItem>
  );
};
