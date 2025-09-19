import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import Link from "next/link";
import { memo, type FC } from "react";

interface ProductImageProps {
  product: IProduct | undefined;
}
export const IMAGE_URL: string = "https://api.errorchi.uz/product/image/";

const ProductImage: FC<ProductImageProps> = ({ product }) => {
  return (
    <div className="h-[300px] bg-bg-card rounded-2xl overflow-hidden">
      <Link href={`/product/${product?.id}`}>
        {product?.images.length ? (
          <Image
            src={IMAGE_URL + product?.images[0]}
            alt="Product Cart Image"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            Image not found
          </div>
        )}
      </Link>
    </div>
  );
};

export default memo(ProductImage);
