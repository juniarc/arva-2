import AdsSection from "./ads-section/AdsSection";
import AsideCategory from "./desktop/AsideCategory";
import ProductSection from "./product-section/ProductSection2";

export default function HomeDesktop() {
  return (
    <div className="w-full h-fit lg:px-20 2xl:px-32 flex justify-between items-start gap-5">
      <div className="w-1/4 sticky top-0 left-0">
        <AsideCategory />
      </div>
      <div className="w-3/4">
        <ProductSection
          name="Vegetables"
          href="/products/vegetables"
          category="vegetables"
        />
        <AdsSection />
        <ProductSection
          name="Fruits"
          href="/products/vegetables"
          category="fruits"
        />
        <ProductSection
          name="Equipments"
          href="/products/vegetables"
          category="equipments"
        />
      </div>
    </div>
  );
}
