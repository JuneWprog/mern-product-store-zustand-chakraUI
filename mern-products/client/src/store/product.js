// store.js
/**
 * Key Features of Zustand:
Minimal and Fast: Zustand is lightweight and has a small API surface.

No Boilerplate: No need for actions, reducers, or sagas.

React Hook Based: You use useStore to access state directly.

Middleware Support: Supports logging, persistence, and more.

Server-Side Rendering (SSR): Works well with Next.js and other SSR setups.


 *
 * import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;

import React from 'react';
import useStore from './store';

const Counter = () => {
  const { count, increase, decrease, reset } = useStore();
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

 * 
 */


import { create } from 'zustand';

const useStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
        return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
},
fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
},
deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
    return { success: true, message: data.message };
},
updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
        products: state.products.map((product) => (product._id === pid ? data.data : product)),
    }));

    return { success: true, message: data.message };
},


}));

export default useStore;
