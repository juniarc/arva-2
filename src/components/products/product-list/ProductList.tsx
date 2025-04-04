import { convertCategoryNameToId } from "@/utils/elementHelpers";
import ProductItem from "../product-item/ProductItem";
import api from "@/services/api/productServices";
import uriHelpers from "@/utils/uriHelpers";
import { getShopProducts } from "@/services/api/shopServices";
import { Product } from "@/types/types";

export default async function ProductList({
  category,
  shopName,
  className = "lg:grid-cols-3 2xl:grid-cols-4",
}: {
  category?: string;
  shopName?: string;
  className?: string;
}) {
  let products: Product[] | undefined = [];

  if (category) {
    const categoryId = convertCategoryNameToId(category);
    products = categoryId ? await api.getAllProductsByCategory(categoryId) : [];
  } else if (shopName) {
    const shopId = uriHelpers.extractIdFromUrl(shopName);
    products = shopId ? await getShopProducts(Number(shopId)) : [];
  }

  return (
    <div
      className={`mt-3 flex flex-nowrap lg:grid gap-3 overflow-x-scroll pb-1 no-scrollbar ${className}`}
    >
      {products?.map((product, index) => (
        <ProductItem {...product} key={index} />
      ))}
    </div>
  );
}
