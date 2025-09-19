import { memo } from "react";
import hero_image from "@/shared/assets/images/hero-image.png";
import Image from "next/image";

const HeroImageSection = () => {
  return (
    <div className="w-full md:w-1/2">
      <Image
        src={hero_image}
        alt="Hero Banner Image"
        width={300}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default memo(HeroImageSection);
