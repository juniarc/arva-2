import HomeCategories from "@/containers/home-page/category-section/CategorySection";
import AsideCategory from "@/containers/home-page/desktop/AsideCategory";
import HeroSection from "@/containers/home-page/hero-section/HeroSection";
import ProductSection from "@/containers/home-page/product-section/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section>
        <HeroSection />
      </section>
      <div className="w-full h-fit lg:px-20 2xl:px-32 lg:flex justify-between items-start gap-5">
        <HomeCategories />
        <aside className="hidden lg:block w-1/4 sticky top-[86px] left-0">
          <AsideCategory />
        </aside>
        <ProductSection />
      </div>
    </main>
  );
}
