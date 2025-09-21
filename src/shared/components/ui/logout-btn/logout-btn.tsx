"use client";

import { redirect, RedirectType } from "next/navigation";
import { memo } from "react";

const LogoutBtn = () => {
  const handleClick = (): void => {
    redirect("/", RedirectType.replace);
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-full h-12 rounded-md border hover:bg-black hover:text-white transition duration-200"
    >
      Log Out
    </button>
  );
};

export default memo(LogoutBtn);
