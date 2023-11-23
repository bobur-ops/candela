import { create } from "zustand";
import { Product } from "../myTypes/types";
import {
  getPopularProducts,
  getProduct,
  getProducts,
} from "../utils/getProducts";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  popularProducts: Product[];

  getAllProducts: () => void;
  getPopularProducts: () => void;
  getProductById: (id: number) => Promise<Product>;
}

export const useProductsStore = create<ProductState>()((set) => ({
  products: [],
  isLoading: false,
  popularProducts: [],

  getAllProducts: async () => {
    set({ isLoading: true });
    const products = await getProducts();

    set({ products, isLoading: false });
  },
  getPopularProducts: async () => {
    const products = await getPopularProducts();

    set({ popularProducts: products });
  },
  getProductById: async (id) => {
    set({ isLoading: true });
    const product = await getProduct(id);

    set({ isLoading: false });
    return product;
  },
}));
