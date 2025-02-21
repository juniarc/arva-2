import { convertCategoryNameToId } from "@/utils/elementHelpers";
import ProductItem from "../product-item/ProductItem";
import api from "@/services/api/productServices";

export default async function ProductList({ category }: { category: string }) {
  const categoryId = convertCategoryNameToId(category);
  const productsData = await api.getAllProductsByCategory(categoryId);

  return (
    <div className="mt-3 flex flex-nowrap lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-3 overflow-x-scroll pb-1 no-scrollbar">
      {productsData?.map((product, index) => (
        <ProductItem {...product} key={index} />
      ))}
    </div>
  );
}
