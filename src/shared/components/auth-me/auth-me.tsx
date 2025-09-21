"use client";

import { useEffect } from "react";

export default function AuthMe() {
  useEffect(() => {
    const authMe = async () => {
      try {
        await fetch("/api/auth/me");
      } catch (err) {
        console.error(err);
      }
    };
    authMe();
  }, []);
  return null;
}
