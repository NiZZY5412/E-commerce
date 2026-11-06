// src/types/index.ts

// Product model
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'clothes' | 'utensils' | 'bags';
  image: string;
  stock: number;
  featured?: boolean; // Optional: mark featured products for homepage display
}

// Cart Item model
export interface CartItem extends Product {
  quantity: number;
}

// User model
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

// Order model
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}
