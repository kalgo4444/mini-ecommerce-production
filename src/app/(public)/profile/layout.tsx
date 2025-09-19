import AuthMe from "@/shared/components/auth-me/auth-me";
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthMe />
      {children}
    </>
  );
}
