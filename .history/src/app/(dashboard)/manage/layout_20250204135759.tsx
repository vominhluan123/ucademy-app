import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  return <div>{children}</div>;
};

export default AdminLayout;
