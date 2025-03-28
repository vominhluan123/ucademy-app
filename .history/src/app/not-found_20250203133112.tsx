import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl">404</h1>
      <h2 className="mb-5">Page Not Found</h2>
      <Link href="/">Trang chủ</Link>
    </div>
  );
};

export default PageNotFound;
