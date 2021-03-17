export interface User {
  uid?: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  picture: string;
  isActive: boolean;
  followers: number;
  following: number;
  isFollowed?: boolean;
  joind_date?: Date;
}

export interface Feed {
  id?: string;
  title?: string;
  creator: {
    uid?: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
  image: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

export interface Post {
  idP?: string;
  title: string;
  bookmark: number;
  likes: number;
  comments: number;
  image: string;
}

export type LikesFeed = {
  id: string;
  likes: number;
  isLiked: boolean;
};
