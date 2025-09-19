"use client";

import { DASHBOARD_LINK } from "@/shared/links";
import { memo, useEffect, useState } from "react";

const VerifySection = ({ user }: { user: string }) => {
  const [err, setErr] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    }).then((res) => {
      if (!res.ok) {
        setErr(true);
      }
      window.location.href = "/";
    });
  }, []);
  return (
    <section className="w-full h-screen bg-black text-white text-center grid place-items-center">
      <div className="max-w-xs w-full border-2 border-main-border/10 p-5 rounded-2xl flex flex-col">
        <h2 className="text-4xl font-bold">Verify...</h2>
        <p className="text-xl font-semibold">Need minute for success!</p>
        {err && (
          <button
            onClick={() => open(DASHBOARD_LINK)}
            className="btn px-5 py-2 bg-white hover:bg-white/90 duration-200 text-black my-5"
          >
            Try Again
          </button>
        )}
      </div>
    </section>
  );
};

export default memo(VerifySection);
