import { getUserInfo } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) return redirect("/sign-in");
  const user = await getUserInfo({ userId });
  return <div>{children}</div>;
};

export default AdminLayout;
