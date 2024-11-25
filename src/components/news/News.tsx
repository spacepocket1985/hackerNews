import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
} from '@mui/material';
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
    <ListItem sx={{ border: '1.5px solid #1976d2', borderRadius: 5, mb: 1 }}>
      <ListItemAvatar>
        <Avatar>
          <ArticleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link
            href={type === NewsType.SingleNews ? news.url : '#'}
            target="_blank"
            color="textPrimary"
          >
            {news.title}
          </Link>
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
                  valueData={(news.kids?.length || 0).toString()}
                />
              </>
            )}
          </>
        }
      />
    </ListItem>
  );
};
