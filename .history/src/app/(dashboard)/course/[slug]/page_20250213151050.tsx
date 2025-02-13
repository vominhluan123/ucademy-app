import { IconPlay, IconStudy, IconUser } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/actions/course.action";
import Image from "next/image";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getCourseBySlug({ slug: params.slug });
  if (!data) {
    return null;
  }
  console.log("🚀 ~ data:", data);
  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-10">
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
          {data.title}
        </h1>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Mô tả</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {data.desc}
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">
          Thông tin
        </h2>
        <div className="grid grid-cols-4 gap-5 mb-10">
          <div className="bg-white rounded-lg p-5">
            <h4 className="text-sm text-slate-400 dark:text-dark">Bài học</h4>
            <h3 className="font-bold dark:text-dark">100</h3>
          </div>
          <div className="bg-white rounded-lg p-5">
            <h4 className="text-sm text-slate-400 dark:text-dark">Bài học</h4>
            <h3 className="font-bold dark:text-dark">100</h3>
          </div>
          <div className="bg-white rounded-lg p-5">
            <h4 className="text-sm text-slate-400 dark:text-dark">Bài học</h4>
            <h3 className="font-bold dark:text-dark">100</h3>
          </div>
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Yêu cầu</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {data.info.requirements.map((r, index) => (
            <div key={index}>{r}</div>
          ))}
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Lợi ích</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {data.info.benefits.map((b, index) => (
            <div key={index}>{b}</div>
          ))}
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Q.A</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {data.info.qa.map((qa, index) => (
            <div key={index}>
              <div>{qa.quesiton}</div>
              <div>{qa.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <strong className="text-primary text-xl font-bold">
              {data.sale_price}
            </strong>
            <span className="text-slate-400 line-through text-sm dark:text-dark">
              {data.price}
            </span>
            <span className="ml-auto font-semibold text-sm inline-block px-3 py-1 rounded-lg bg-primary text-primary bg-opacity-10">
              {Math.floor((data.price / data.sale_price) * 100)}%
            </span>
          </div>
          <h3 className="font-bold mb-3 dark:text-dark">Khoá học gồm có:</h3>
          <ul className="mb-5 flex flex-col text-sx text-slate-500">
            <li className="flex items-center gap-2">
              <IconPlay className="size-5"></IconPlay>
              <span>30h học</span>
            </li>{" "}
            <li className="flex items-center gap-2">
              <IconPlay className="size-5"></IconPlay>
              <span>Video Full HD</span>
            </li>
            <li className="flex items-center gap-2">
              <IconUser className="size-5"></IconUser>
              <span>Có nhóm hỗ trợ</span>
            </li>
            <li className="flex items-center gap-2">
              <IconStudy className="size-5"></IconStudy>
              <span>Tài liệu kèm theo</span>
            </li>
          </ul>
          <Button variant="primary" className="w-full">
            Mua Khoá Học
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
