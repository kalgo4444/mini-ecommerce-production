import { CircleUserIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import LoginBtn from "../../ui/login-btn/login-btn";

const HeaderActions = async ({ token }: { token: string | undefined }) => {
  return (
    <ul className="flex items-center gap-x-4">
      <li>
        <Link href={"/cart"}>
          <ShoppingCartIcon />
        </Link>
      </li>
      <li>
        {token ? (
          <Link href={"/profile"} className="flex items-center gap-x-2">
            {<CircleUserIcon />}
          </Link>
        ) : (
          <LoginBtn />
        )}
      </li>
    </ul>
  );
};

export default memo(HeaderActions);
