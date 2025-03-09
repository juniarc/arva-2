import ProductlistHeading from "@/components/headings/ProductlistHeading";
import ProductLoading from "@/components/loadings/product-item/ProductLoading";
import ProductList from "@/components/products/product-list/ProductList";
import { Suspense } from "react";
import AdsSection from "../ads-section/AdsSection";

const dummyData = [
  {
    id: 2,
    category: "fruits",
  },
  {
    id: 3,
    category: "equipments",
  },
];

export default function ProductSection() {
  return (
    <section className="w-full lg:w-3/4">
      <div className="px-3 lg:px-0 md:px-7 mt-5">
        <ProductlistHeading href="/vegetables" heading="vegetables" />
        <Suspense fallback={<ProductLoading />}>
          <ProductList category="vegetables" />
        </Suspense>
      </div>
      <AdsSection />
      {dummyData.map((item) => (
        <div key={item.id} className="px-3 lg:px-0 md:px-7 mt-5">
          <ProductlistHeading href={item.category} heading={item.category} />
          <Suspense fallback={<ProductLoading />}>
            <ProductList category={item.category} />
          </Suspense>
        </div>
      ))}
    </section>
  );
}
