import { memo } from "react";
import brand1 from "@/shared/assets/images/brands-board/1.png";
import brand2 from "@/shared/assets/images/brands-board/2.png";
import brand3 from "@/shared/assets/images/brands-board/3.png";
import brand4 from "@/shared/assets/images/brands-board/4.png";
import brand5 from "@/shared/assets/images/brands-board/5.png";
import Image from "next/image";
import "./brands-board.css";

const BrandsBoard = () => {
  return (
    <section className="bg-black overflow-hidden">
      <div className="container">
        <div className="brands-carousel brands-group py-7 md:py-10">
          <Image src={brand1} alt="1" width={166} height={35} />
          <Image src={brand2} alt="1" width={100} height={35} />
          <Image src={brand3} alt="1" width={156} height={35} />
          <Image src={brand4} alt="1" width={194} height={35} />
          <Image src={brand5} alt="1" width={200} height={35} />
        </div>
      </div>
    </section>
  );
};

export default memo(BrandsBoard);
