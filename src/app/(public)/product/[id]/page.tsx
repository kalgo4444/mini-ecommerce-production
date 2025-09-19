"use client";

import DetailProduct from "@/shared/components/detail/detail-product";
import { useProduct } from "@/shared/services/product.service";
import { useParams } from "next/navigation";
import { memo } from "react";

const ProductDetailPAge = () => {
  const { id } = useParams();
  const { getProductByID } = useProduct();
  const { data, isLoading } = getProductByID(String(id));
  return (
    <>
      <DetailProduct product={data} isLoading={isLoading} />
    </>
  );
};

export default memo(ProductDetailPAge);
