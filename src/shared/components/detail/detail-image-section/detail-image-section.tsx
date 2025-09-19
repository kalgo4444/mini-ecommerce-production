import { BASE_URL } from "@/shared/api";
import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import { memo, type FC } from "react";
import { IMAGE_URL } from "../../product/cart/product-image";

interface DetailImageSectionProps {
  product: IProduct | undefined;
}

const DetailImageSection: FC<DetailImageSectionProps> = (props) => {
  const { product } = props;
  return (
    <div className="w-full md:w-2/5 p-0 md:p-5">
      <div className="max-w-[350px] w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden object-cover block mx-auto">
        <Image
          src={IMAGE_URL + product?.images[0]}
          alt={product ? product.title : "Product Image"}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default memo(DetailImageSection);
