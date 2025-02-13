import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-10">
      <div>
        <div className="relative aspect-video mb-5">
          <Image
            src="https://plus.unsplash.com/premium_photo-1738860330964-f64cdbdf7240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="w-full h-full object-cover rounded-lg"
          ></Image>
        </div>
        <h1 className="font-bold text-3xl mb-5 dark:text-dark-text">
          khoá học javascrip
        </h1>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Mô tả</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          impedit accusamus similique deserunt, incidunt atque commodi deleniti
          iure in quidem, eveniet sunt perferendis? Doloremque sequi eum quod
          labore! Cumque, odit!
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Yêu cầu</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          impedit accusamus similique deserunt, incidunt atque commodi deleniti
          iure in quidem, eveniet sunt perferendis? Doloremque sequi eum quod
          labore! Cumque, odit!
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Lợi ích</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          impedit accusamus similique deserunt, incidunt atque commodi deleniti
          iure in quidem, eveniet sunt perferendis? Doloremque sequi eum quod
          labore! Cumque, odit!
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Q.A</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          impedit accusamus similique deserunt, incidunt atque commodi deleniti
          iure in quidem, eveniet sunt perferendis? Doloremque sequi eum quod
          labore! Cumque, odit!
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
