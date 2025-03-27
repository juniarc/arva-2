import FloatingDrawer from "@/components/floating-drawers/FloatingDrawer";
import ImagesSection from "@/containers/product-detail-page/ImagesSection";
import OtherProductSection from "@/containers/product-detail-page/OtherProductSection";
import ProductInfo from "@/containers/product-detail-page/ProductInfo";
import ReviewSection from "@/containers/product-detail-page/ReviewSection";
import ShopInfo from "@/containers/product-detail-page/ShopInfo";
import api from "@/services/api/productServices";
import { dummyReviews } from "@/services/dummy/dummyReviews";
import uriHelpers from "@/utils/uriHelpers";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ productInfo: string; shopName: string }>;
}) {
  const { productInfo, shopName } = await params;
  const productId = Number(uriHelpers.extractIdFromUrl(productInfo));

  const detailProduct = await api.getDetailProductById(productId);

  if (detailProduct) {
    return (
      <main className="mb-20 lg:mb-0 lg:px-20 2xl:px-32  lg:py-5">
        <div className="lg:flex lg:gap-10">
          <section className="lg:w-1/3">
            <Suspense fallback={<div>Loading...</div>}>
              <ImagesSection image={detailProduct.image} />
            </Suspense>
          </section>
          <div className="lg:w-2/3 px-5 md:px-[150px] lg:px-0">
            <section>
              <ProductInfo
                product_id={detailProduct.product_id}
                product_name={detailProduct.product_name}
                category={detailProduct.category}
                description={detailProduct.description}
                shop={detailProduct.shop}
                variant={detailProduct.variant}
                discount={detailProduct.discount}
                sold={detailProduct.sold}
                ratings={detailProduct.rating}
              />
            </section>

            <section>
              <ShopInfo {...detailProduct.shop} />
            </section>
            <section>
              <ReviewSection reviews={dummyReviews} />
            </section>
          </div>
        </div>
        <OtherProductSection
          category="fruits"
          shopName={shopName}
          name={detailProduct.shop.shop_name}
        />
        <FloatingDrawer
          product_id={detailProduct.product_id}
          category={detailProduct.category}
          image={detailProduct.image}
          product_name={detailProduct.product_name}
          discount={detailProduct.discount}
          variant={detailProduct.variant}
          sold={detailProduct.sold}
          isWishlist={false}
        />
      </main>
    );
  }
}
