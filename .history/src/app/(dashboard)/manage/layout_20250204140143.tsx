import PageNotFound from "@/app/not-found";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) return <PageNotFound></PageNotFound>;
  return <div>{children}</div>;
};

export default AdminLayout;
