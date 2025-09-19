import Footer from "@/shared/components/footer/footer";
import Header from "@/shared/components/header/header";
import ScrollUp from "@/shared/components/scroll-up/scroll-up";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollUp />
      <Footer />
    </>
  );
}
