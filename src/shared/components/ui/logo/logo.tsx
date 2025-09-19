import { memo } from "react";
import logo from "@/shared/assets/images/logo.svg";
import Link from "next/link";
import Image from "next/image";

const MainLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="Site Logo"
        width={160}
        height={22}
        loading="eager"
      />
    </Link>
  );
};

export default memo(MainLogo);
