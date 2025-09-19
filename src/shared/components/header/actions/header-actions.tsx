import { CircleUserIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import LoginBtn from "../../ui/login-btn/login-btn";
import { cookies } from "next/headers";

const HeaderActions = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  console.log(token);
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
            <span>{<CircleUserIcon />}</span>
            <span>Profile</span>
          </Link>
        ) : (
          <LoginBtn />
        )}
      </li>
    </ul>
  );
};

export default memo(HeaderActions);
