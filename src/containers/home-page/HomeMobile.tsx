import AdsSection from "./ads-section/AdsSection";
import HomeCategories from "./category-section/CategorySection";
import ProductSection from "./product-section/ProductSection";

export default function HomeMobile() {
  return (
    <>
      <section>
        <HomeCategories />
      </section>
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
    </>
  );
}
