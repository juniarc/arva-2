import ProductlistHeading from "@/components/headings/ProductlistHeading";
import ProductLoading from "@/components/loadings/product-item/ProductLoading";
import ProductList from "@/components/products/product-list/ProductList";
import { Suspense } from "react";

export default function ProductSection({
  name,
  href,
  category,
}: {
  name: string;
  href: string;
  category: string;
}) {
  return (
    <section className="px-3 lg:px-0 md:px-7 mt-5">
      <ProductlistHeading href={href} heading={name} />
      <Suspense fallback={<ProductLoading />}>
        <ProductList category={category} />
      </Suspense>
    </section>
  );
}
