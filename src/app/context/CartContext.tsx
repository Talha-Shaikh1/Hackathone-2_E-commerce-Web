'use client';
import React from 'react';

import { createContext, useContext, useState, useEffect, useMemo } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // 1. Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      // Default cart
      const defaultCart = [
        {
          id: 1,
          name: 'Default Product 1',
          price: 15.99,
          image: '/our-product-1.png',
          quantity: 1,
        },
        {
          id: 2,
          name: 'Default Product 2',
          price: 25.49,
          image: '/our-product-2.png',
          quantity: 1,
        },
      ];
      setCart(defaultCart);
      localStorage.setItem('cart', JSON.stringify(defaultCart));
    }
  }, []);

  // 2. Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // 3. Compute cart count
  const cartCount = useMemo(() => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      }
      return [...prevCart, product];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === productId ? { ...p, quantity: Math.max(1, quantity) } : p
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
