"use client";

import { useEffect } from "react";

export default function AuthMe() {
  useEffect(() => {
    const authMe = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        console.log(data?.data);
      } catch (error) {
        console.error(error);
        window.location.href = "/";
      }
    };
    authMe();
  }, []);
  return null;
}
