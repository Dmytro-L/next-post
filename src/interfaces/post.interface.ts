export interface IPost {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export interface IPostData {
  posts: IPost[];
}

export interface IPostSingleData {
  post: IPost;
}
