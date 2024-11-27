import { CommentItemType } from '../types/apiTypes';

export const getCommentsCount = (comments: CommentItemType[]): number => {
  return comments.reduce((count, comment) => {
    let currentCount = 1;

    if (comment.childComment)
      currentCount += getCommentsCount(comment.childComment);

    return (count = count + currentCount);
  }, 0);
};
