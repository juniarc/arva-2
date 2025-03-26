export interface Discount {
  discount_id: number;
  discount_name: string;
  discount_type: string;
  discount_value: number;
  end_date: string;
  product_id: number;
  start_date: string;
}
export interface Variant {
  variant_id: number;
  variant_name: string;
  variant_price: number;
  variant_stock: number;
  variant_unit: string;
}

export interface Product {
  product_id: number;
  product_name: string;
  description: string;
  product_type: string;
  image: string[];
  category: string;
  discount: Discount[];
  ratings: string;
  shipping_cost: number;
  shop: { shop_id: number; shop_address_city: string; shop_name: string };
  sold: number;
  variant: Variant[];
  status: string;
  created_at: string;
}

export interface CartItem {
  cart_id: number;
  user_id: number;
  product_id: number;
  product_name: string;
  category: string;
  image: string;
  shop: Shop;
  selectedVariant: Variant;
  quantity: number;
  discount: Discount[];
  priceAfterDiscount: number;
  shipping_cost: number;
}

export interface Shop {
  shop_id: number;
  shop_name: string;
  shop_phone_number: string;
  shop_email: string;
  description: string;
  shop_image: string;
  created_at: string;
  shop_address_province: string;
  shop_address_city: string;
  shop_address_district: string;
  shop_address_subdistrict: string;
  shop_address_street: string;
  shop_zip_code: number;
  status: string;
  user_id: number;
}

export type Status = "loading" | "error" | "idle" | "success";

export interface ProductDetail {
  product_id: number;
  product_name: string;
  product_type: string;
  rating: number | null;
  category: string;
  created_at: string;
  description: string;
  discount: Discount[];
  image: { image_data: string; image_id: number }[];
  shop: Shop;
  sold: number;
  status: string;
  tag: string[];
  variant: Variant[];
}
