import { create } from "zustand";

import { Product } from "../myTypes/types";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
  cartItems: Product[];
  setCartProduct: (value: Product) => void;
  removeCartProduct: (value: number) => void;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cartItems: [],

      setCartProduct: (product) => {
        const newProducts = [...get().cartItems, product];

        set({ cartItems: newProducts });
      },
      removeCartProduct: (id) => {
        const newProducts = get().cartItems.filter((p) => p.id !== id);

        set({ cartItems: newProducts });
      },
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
