export interface IComment {
  idPost: number;
  comment: string;
}

export interface IPostData {
  posts: IComment[];
}