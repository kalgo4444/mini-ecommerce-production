import { API_URL } from "@/shared/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "error" });
  }

  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  const nextResponse = NextResponse.json(data);

  if (response.status === 401 || response.status === 403) {
    nextResponse.cookies.delete("token");
  }
  return nextResponse;
}
