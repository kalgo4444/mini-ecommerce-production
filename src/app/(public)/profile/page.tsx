import { API_URL } from "@/shared/api";
import LogoutBtn from "@/shared/components/ui/logout-btn/logout-btn";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { memo } from "react";

const ProfilePage = async () => {
  const cookieState = await cookies();
  const token = cookieState.get("token")?.value;

  const response = await fetch(`${API_URL}/auth/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 60 * 60 * 1 },
  });

  if (response.status == 401 || response.status === 403) {
    redirect("/", RedirectType.replace);
  }

  const { data } = await response.json();

  return (
    <section className="min-h-[60vh]">
      <div className="max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          {data.fname} {data.lname || ""}
        </h2>
        <p className="text-sm text-gray-500 mb-3">ID: {data.id}</p>

        <div className="space-y-2 my-4">
          <p>
            <span className="font-medium">Email:</span> {data.email}
          </p>
          <p>
            <span className="font-medium">Role:</span> {data.role}
          </p>
          <p>
            <span className="font-medium">Address:</span> {data.address || "—"}
          </p>
          <p>
            <span className="font-medium">Created:</span>{" "}
            {new Date(data.createdAt).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Updated:</span>{" "}
            {new Date(data.updatedAt).toLocaleString()}
          </p>
          <p className="flex items-center gap-x-1">
            <span className="font-medium">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                data.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {data.isActive ? "Active" : "Inactive"}
            </span>
          </p>
        </div>
        <LogoutBtn />
      </div>
    </section>
  );
};

export default memo(ProfilePage);
