const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to load products.");
  }
  const data = await response.json();
  return data.products;
};
