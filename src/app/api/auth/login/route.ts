import { API_URL } from "@/shared/api";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const user = await req.json();

  const response = await fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: "error" }, { status: 401 });
  }

  const res = NextResponse.json({ status: "done" });
  res.cookies.set("token", data.data.accessToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
};
