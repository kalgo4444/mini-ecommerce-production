import { memo } from "react";
import DetailImageSection from "./detail-image-section/detail-image-section";
import DetailActionSection from "./detail-action-section/detail-action-section";
import { IProduct } from "@/types/product.interface";
import DetailLoading from "./detail-loading";

const DetailProduct = ({
  product,
  isLoading,
}: {
  product: IProduct | undefined;
  isLoading: boolean;
}) => {
  return (
    <section className="my-10 min-h-[60vh]">
      <div className="container">
        {isLoading ? (
          <DetailLoading />
        ) : (
          <div className="flex flex-col md:flex-row gap-5">
            <DetailImageSection product={product} />
            <DetailActionSection product={product} />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(DetailProduct);
