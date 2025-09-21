import Footer from "@/shared/components/footer/footer";
import Header from "@/shared/components/header/header";
import ScrollUp from "@/shared/components/scroll-up/scroll-up";
import { cookies } from "next/headers";
import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return (
    <>
      <Header token={token} />
      <main>{children}</main>
      <ScrollUp />
      <Footer />
    </>
  );
}
