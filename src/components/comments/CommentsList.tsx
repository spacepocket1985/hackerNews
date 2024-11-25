import React from 'react';
import { CommentItemType } from '../../types/apiTypes';
import { Spoiler } from '../spoiler/Spoiler';
import { ItemData } from '../news/ItemData';
import { Box } from '@mui/material';
import { Comment } from './Comment';

export const CommentsList: React.FC<{ comments: CommentItemType[] }> = ({
  comments,
}) => {
  const renderComments = (comments: CommentItemType[]): React.ReactNode => {
    return comments.map((item) => (
      <React.Fragment key={item.id}>
        <ItemData keyData={'written by'} valueData={item.by} />
        <Comment commentText={item.text} />
        {item.childComment ? (
          <Spoiler>{renderComments(item.childComment)}</Spoiler>
        ) : null}
      </React.Fragment>
    ));
  };

  return <Box sx={{ mt: 1 }}>{renderComments(comments)}</Box>;
};
