import React from 'react';
import { CommentItemType } from '../../types/apiTypes';
import { Comment } from './Comment';
import { Spoiler } from '../spoiler/Spoiler';
import { ItemData } from '../news/ItemData';
import { Box } from '@mui/material';

export const CommentsList: React.FC<{ comments: CommentItemType[] }> = ({
  comments,
}) => {
  const renderComents = (comments: CommentItemType[]): React.ReactNode => {
    return comments.map((item) => {
      return (
        <>
          <ItemData keyData={'written by'} valueData={item.by} />
          <Comment commentText={item.text} />
          {item.childComment ? (
            <Spoiler>{renderComents(item.childComment)}</Spoiler>
          ) : null}
        </>
      );
    });
  };

  return <Box sx={{ mt: 1 }}>{renderComents(comments)}</Box>;
};
