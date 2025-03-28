import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-10 min-h-screen">
      <div className="relative aspect-video">
        <Image
          src="https://images.unsplash.com/photo-1734550268367-9e6badcfbce4?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="w-full h-full object-cover"
        ></Image>
      </div>
      <div></div>
    </div>
  );
};

export default page;
