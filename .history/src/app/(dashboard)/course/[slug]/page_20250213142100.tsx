import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-10 min-h-screen">
      <div className="relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt=""
          fill
          className="w-full h-full object-cover aspect-video"
        ></Image>
      </div>
      <div></div>
    </div>
  );
};

export default page;
