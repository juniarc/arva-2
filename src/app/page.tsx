// import Image from "next/image";

import { api } from "@/api/api";
import ProductItem from "@/components/global/ProductItem";

export default async function Home() {
  const req = await api.getAllProducts();
  console.log(req);
  return (
    <div className={`grid gap-5`}>
      {req.map((product, index) => (
        <ProductItem {...product} key={index} userId={1} />
      ))}
    </div>
  );
}
