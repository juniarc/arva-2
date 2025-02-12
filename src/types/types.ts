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
