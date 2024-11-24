import React from 'react';
import { CommentItemType } from '../../types/apiTypes';
import { Comment } from './Comment';

export const CommentsList: React.FC<{ comments: CommentItemType[] }> = ({
  comments,
}) => {
  const renderComents = (comments: CommentItemType[]): React.ReactNode => {
    return comments.map((item) => {
      return (
        <>
          <div key={item.id}> {`[autor] ${item.by}`} </div>
          <Comment commentText={item.text}/>
          {item.childComment ? (
            <div style={{ marginLeft: '15px' }}>
              {renderComents(item.childComment)}
            </div>
          ) : null}
        </>
      );
    });
  };

  return <div>{renderComents(comments)}</div>;
};
