import { IProduct } from "@/types/product.interface";
import { memo, type FC } from "react";
import ProductImage from "./product-image";
import { StarIcon } from "lucide-react";

interface ProductCartProps {
  product: IProduct | undefined;
}

const ProductCart: FC<ProductCartProps> = (props) => {
  const { product } = props;
  const sale = product?.price && (product?.price * 100) / 20 - product?.price;
  return (
    <div>
      <ProductImage product={product} />
      <div className="py-4">
        <b
          className="text-base md:text-lg lg:text-xl line-clamp-1"
          title={product?.title}
        >
          {product?.title}
        </b>
        <div className="flex items-center my-2">
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
          <span className="text-sm">
            5/<span className="text-black/60">5</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <b className="text-lg md:text-xl lg:text-2xl">
            ${product?.price?.toFixed(0)}
          </b>
          <del className="text-lg md:text-xl lg:text-2xl text-black/60">
            ${sale?.toFixed(0)}
          </del>
          <div className="w-12 h-7 rounded-radius bg-red-500/10 grid place-items-center text-red-500 text-xs">
            -20%
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCart);
