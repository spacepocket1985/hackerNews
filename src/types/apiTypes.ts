export enum ItemType {
  News = 'story',
  Comment = 'comment',
}

export type NewsItemType = {
  by: string;
  descendants: number;
  kids?: number[];
  id: number;
  score: number;
  time: number;
  title: string;
  url: string;
  type: ItemType.News;
};

export type CommentItemType = {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: ItemType.Comment;
  childComment?: CommentItemType[];
};
