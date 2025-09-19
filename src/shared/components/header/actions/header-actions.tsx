import { CircleUserIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const HeaderActions = () => {
  return (
    <ul className="flex items-center gap-x-4">
      <li>
        <Link href={"/search"}>
          <SearchIcon />
        </Link>
      </li>
      <li>
        <Link href={"/cart"}>
          <ShoppingCartIcon />
        </Link>
      </li>
      <li>
        <Link href={"/user"}>
          <CircleUserIcon />
        </Link>
      </li>
    </ul>
  );
};

export default memo(HeaderActions);
