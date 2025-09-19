"use client";

import Product from "@/shared/components/product/product";
import ProductSelect from "@/shared/components/product/select/product-select";
import { useProduct } from "@/shared/services/product.service";
import { memo, Suspense, useState } from "react";

const ProductPage = () => {
  const [order, setOrder] = useState<string>("latest");
  const [limit, setLimit] = useState<number>(20);
  const { getProduct } = useProduct();
  const { data, isLoading } = getProduct({ order, limit });
  return (
    <>
      <Suspense>
        <ProductSelect order={order} setOrder={setOrder} />
      </Suspense>
      <Product
        limit={limit}
        setLimit={setLimit}
        seemore
        product={data?.data}
        loading={isLoading}
      />
    </>
  );
};

export default memo(ProductPage);
