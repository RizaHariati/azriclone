export type FriendType = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type PostType = {
  id: string;
  image: string;
  likes: number;
  owner: FriendType;
  publishDate: string;
  tags: string[];
  text: string;
};

export type CommentType = {
  id: string;
  message: string;
  owner: FriendType;
  post: string;
  publishDate: string;
};
