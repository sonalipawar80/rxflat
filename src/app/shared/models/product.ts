export interface Rating {
  rate: number;
  count: number;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IProductPost {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  review: IPost[];
}


export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface IpostReview {
  userId: number;
  id: number;
  title: string;
  body: string;
}

