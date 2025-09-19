export interface IProduct {
  id: number;
  createdAt: string;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    fname: string;
    email: string;
  };
  images: string[];
  stock: number;
  brand: string;
}
