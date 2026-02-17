import { Product, UserRole } from './types';

export const COLORS = {
  primary: '#7c3aed', // Violet 600
  secondary: '#2563eb', // Blue 600
  accent: '#4f46e5', // Indigo 600
};

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Original Burger', price: 35000, category: 'Food', image: 'https://picsum.photos/seed/burger/400/300', merchantId: 'm1', rating: 4.8, stock: 50 },
  { id: '2', name: 'Iced Coffee Latte', price: 22000, category: 'Drink', image: 'https://picsum.photos/seed/coffee/400/300', merchantId: 'm1', rating: 4.5, stock: 100 },
  { id: '3', name: 'Nasi Goreng Spesial', price: 28000, category: 'Food', image: 'https://picsum.photos/seed/rice/400/300', merchantId: 'm2', rating: 4.9, stock: 30 },
  { id: '4', name: 'Fresh Avocado Juice', price: 18000, category: 'Drink', image: 'https://picsum.photos/seed/juice/400/300', merchantId: 'm2', rating: 4.7, stock: 40 },
  { id: '5', name: 'Smartphone Case', price: 45000, category: 'Elektronik', image: 'https://picsum.photos/seed/case/400/300', merchantId: 'm3', rating: 4.3, stock: 15 },
  { id: '6', name: 'Wireless Earbuds', price: 250000, category: 'Elektronik', image: 'https://picsum.photos/seed/earbuds/400/300', merchantId: 'm3', rating: 4.6, stock: 8 },
];

export const CATEGORIES = ['All', 'Food', 'Drink', 'Elektronik', 'Mart', 'Pharmacy'];