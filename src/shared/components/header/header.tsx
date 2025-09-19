import { memo } from "react";
import MainLogo from "@/shared/components/ui/logo/logo";
import HeaderActions from "./actions/header-actions";

const Header = () => {
  return (
    <header className="h-18 w-full bg-white">
      <nav className="container h-full flex items-center justify-between">
        <MainLogo />
        <HeaderActions />
      </nav>
    </header>
  );
};

export default memo(Header);
