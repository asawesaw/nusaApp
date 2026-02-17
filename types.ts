
export enum UserRole {
  USER = 'USER',
  DRIVER = 'DRIVER',
  MERCHANT = 'MERCHANT',
  ADMIN = 'ADMIN'
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar: string;
  walletBalance: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  merchantId: string;
  rating: number;
  stock: number;
}

export interface Order {
  id: string;
  type: 'RIDE' | 'SHOPPING';
  status: 'PENDING' | 'ACCEPTED' | 'PICKED_UP' | 'DELIVERING' | 'COMPLETED' | 'CANCELLED';
  totalPrice: number;
  items?: { productId: string; quantity: number; name: string }[];
  fromLocation?: string;
  toLocation?: string;
  timestamp: Date;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'IN' | 'OUT';
  title: string;
  date: string;
}
