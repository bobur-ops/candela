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
  cartProducts: Product[];
  getAllProducts: () => void;
  getPopularProducts: () => void;
  getProductById: (id: number) => Promise<Product>;
  setCartProduct: (value: Product) => void;
  removeCartProduct: (value: number) => void;
}

export const useProductsStore = create<ProductState>()((set, get) => ({
  products: [],
  isLoading: false,
  popularProducts: [],
  cartProducts: JSON.parse(localStorage.getItem("cart") || "[]"),

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
  setCartProduct: (product) => {
    const newProducts = [...get().cartProducts, product];
    localStorage.setItem("cart", JSON.stringify(newProducts));
    set({ cartProducts: newProducts });
  },
  removeCartProduct: (id) => {
    const newProducts = get().cartProducts.filter((p) => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(newProducts));
    set({ cartProducts: newProducts });
  },
}));
