import Link from "next/link";
import { memo } from "react";

const ProductBtn = ({ full }: { full: boolean }) => {
  return (
    <Link
      className={`btn ${
        full ? "max-w-full" : "max-w-[220px]"
      } w-full h-12 grid place-items-center hover:bg-black hover:text-white`}
      href={"/product"}
    >
      View All
    </Link>
  );
};

export default memo(ProductBtn);
