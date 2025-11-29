import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.5,
    stock: 15,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness with this advanced smartwatch featuring GPS and heart rate monitoring.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.7,
    stock: 8,
    featured: true
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors.',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'Clothing',
    rating: 4.3,
    stock: 25,
    featured: false
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    description: '85mm f/1.4 portrait lens perfect for professional photography with beautiful bokeh.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
    category: 'Photography',
    rating: 4.9,
    stock: 5,
    featured: true
  },
  {
    id: '5',
    name: 'Minimalist Desk Lamp',
    description: 'Modern LED desk lamp with adjustable brightness and USB charging port.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    category: 'Home & Office',
    rating: 4.4,
    stock: 12,
    featured: false
  },
  {
    id: '6',
    name: 'Leather Crossbody Bag',
    description: 'Handcrafted genuine leather crossbody bag perfect for everyday use.',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Accessories',
    rating: 4.6,
    stock: 18,
    featured: false
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.2,
    stock: 30,
    featured: false
  },
  {
    id: '8',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable ergonomic office chair with lumbar support and adjustable height.',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    category: 'Home & Office',
    rating: 4.8,
    stock: 7,
    featured: true
  }
];