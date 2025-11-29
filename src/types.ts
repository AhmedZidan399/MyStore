export interface Product {
      id: string;
      name: string;
      description: string;
      price: number;
      originalPrice?: number;
      image: string;
      category: string;
      rating: number;
      stock: number;
      featured: boolean;
    }

    export interface User {
      id: string;
      name: string;
      email: string;
    }

    export interface CartItem {
      product: Product;
      quantity: number;
    }