import Link from "next/link";
import { memo } from "react";

const HeroInfoSection = () => {
  return (
    <div className="w-full md:w-1/2 max-md:pt-10 md:min-h-[663px] flex flex-col gap-y-4 md:gap-y-8 justify-center">
      <h1 className="text-4xl md:text-5xl ld:text-6xl font-extrabold max-w-[577px] w-full">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="text-second-text max-sm:text-sm">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Link
        href={"/product"}
        className="md:max-w-[200px] duration-200 grid place-items-center w-full h-12.5 rounded-radius bg-black text-white hover:bg-white hover:text-black"
      >
        Shop Now
      </Link>
      <div className="max-w-[596px] w-full grid grid-cols-2 sm:grid-cols-3 gap-y-2">
        <div className="flex flex-col gap-y-0.5">
          <b className="text-2xl md:text-3xl lg:text-4xl">200+</b>
          <span className="text-second-text text-xs md:text-sm lg:text-base">
            International Brands
          </span>
        </div>
        <div className="flex flex-col gap-y-0.5">
          <b className="text-2xl md:text-3xl lg:text-4xl">2,00+</b>
          <span className="text-second-text text-xs md:text-sm lg:text-base">
            International Brands
          </span>
        </div>
        <div className="flex flex-col gap-y-0.5">
          <b className="text-2xl md:text-3xl lg:text-4xl">30,000+</b>
          <span className="text-second-text text-xs md:text-sm lg:text-base">
            International Brands
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroInfoSection);
