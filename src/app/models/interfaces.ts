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
  idf?: string;
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
}

export interface Post {
  idP?: string;
  title: string;
  bookmark: number;
  likes: number;
  comments: number;
  image: string;
}
