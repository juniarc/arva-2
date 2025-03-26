import ProductlistHeading from "@/components/headings/ProductlistHeading";
import ProductLoading from "@/components/loadings/product-item/ProductLoading";
import { Suspense, lazy } from "react";

const LazyProductList = lazy(
  () => import("@/components/products/product-list/ProductList")
);

export default function OtherProductSection({
  shopName,
  category,
  name,
}: {
  shopName: string;
  category: string;
  name: string;
}) {
  return (
    <div>
      <section className="px-5 lg:px-0 md:px-7 mt-5">
        <ProductlistHeading href={shopName} heading={`Product from ${name}`} />
        <Suspense fallback={<ProductLoading />}>
          <LazyProductList shopName={shopName} />
        </Suspense>
      </section>
      <section className="px-5 lg:px-0 md:px-7 mt-5">
        <ProductlistHeading
          href={`/${category}`}
          heading="Recomendation for you"
        />
        <Suspense fallback={<ProductLoading />}>
          <LazyProductList category={category} />
        </Suspense>
      </section>
    </div>
  );
}
