// import Image from "next/image";

import { api } from "@/api/api";

export default async function Home() {
  const req = await api.getAllProducts();
  console.log(req);
  return <div>hai</div>;
}
