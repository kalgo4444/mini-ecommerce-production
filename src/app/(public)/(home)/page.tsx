import { BASE_URL } from "@/shared/api";
import BrandsBoard from "@/shared/components/brands-board/brands-board";
import Hero from "@/shared/components/hero/hero";
import Product from "@/shared/components/product/product";
import { memo } from "react";

const HomePage = async () => {
  const response = await fetch(BASE_URL + "?limit=8", {
    next: { revalidate: 300 },
  });
  const data = await response.json();

  return (
    <>
      <Hero />
      <BrandsBoard />
      <Product header title="new arrivals" product={data?.data} footer />
    </>
  );
};

export default memo(HomePage);
