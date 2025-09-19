import VerifySection from "@/shared/components/verify-section/verify-section";
import { memo } from "react";

const VerifyPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  const user = atob(q);
  return <VerifySection user={user} />;
};

export default memo(VerifyPage);
