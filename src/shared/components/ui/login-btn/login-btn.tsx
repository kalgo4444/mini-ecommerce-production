"use client";

import { DASHBOARD_LINK } from "@/shared/links";
import { memo } from "react";

const LoginBtn = () => {
  return (
    <button
      onClick={() => open(DASHBOARD_LINK)}
      className="btn px-4 py-1 rounded-radius hover:bg-black hover:text-white duration-200"
    >
      Login
    </button>
  );
};

export default memo(LoginBtn);
