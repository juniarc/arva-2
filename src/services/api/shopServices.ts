import { Product } from "@/types/types";
import { publicUrl } from "./apiClient";

export async function getShopProducts(shopId: number): Promise<Product[]> {
  try {
    const response = await publicUrl.get(
      `/product/getproductbyseller/${shopId}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
