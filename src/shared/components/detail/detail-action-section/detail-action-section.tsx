import { IProduct } from "@/types/product.interface";
import { memo, type FC } from "react";
import Title from "../../title/title";
import { StarIcon } from "lucide-react";

interface DetailImageSectionProps {
  product: IProduct | undefined;
}

const DetailImageSection: FC<DetailImageSectionProps> = (props) => {
  const { product } = props;
  const sale = product?.price && (product?.price * 100) / 20 - product?.price;

  return (
    <div className="w-full md:w-3/5 p-1 md:p-3">
      <Title title={product?.title} className="text-left line-clamp-2" />
      <div className="flex space-x-2 my-1 md:my-4">
        <div className="flex items-center">
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
          <StarIcon fill="gold" className="text-white" />
        </div>
        <span>
          5/<span className="text-black/60">4.5</span>
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
      <div className="text-sm text-black/60 line-clamp-3">
        {product?.description}
      </div>
      <div className="border-t py-2 border-main-border">
        <span className="text-black/60 text-sm">Select Color</span>
        <div className="flex items-center gap-x-4 my-2">
          <div className="size-8 rounded-full bg-blue-500"></div>
          <div className="size-8 rounded-full bg-red-500"></div>
          <div className="size-8 rounded-full bg-yellow-500"></div>
        </div>
      </div>
      <div className="border-t py-2 border-main-border">
        <span className="text-black/60 text-sm">Choose Size</span>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-3 my-2">
          <div className="text-black/60 px-4 py-2 rounded-radius bg-bg-card">
            Small
          </div>
          <div className="text-black/60 px-4 py-2 rounded-radius bg-bg-card">
            Medium
          </div>
          <div className="text-black/60 px-4 py-2 rounded-radius bg-bg-card">
            Large
          </div>
          <div className="text-black/60 px-4 py-2 rounded-radius bg-bg-card">
            X-Large
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailImageSection);
