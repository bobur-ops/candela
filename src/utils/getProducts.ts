import { products } from "../config/dummyData";
import { Product } from "../myTypes/types";

function shuffleArray<T>(array: T[]): T[] {
  // Create a copy of the array to avoid modifying the original array
  const shuffledArray = array.slice();

  // Perform Fisher-Yates shuffle
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
};

export const getPopularProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomizedProducst = shuffleArray(products);

      resolve(randomizedProducst.slice(0, 4));
    }, 300);
  });
};

export const getProduct = (id: number): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((i) => i.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("error");
      }
    });
  });
};
