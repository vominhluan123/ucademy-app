import PageNotFound from "@/app/not-found";
import {
  IconCheck,
  IconPlay,
  IconQuestion,
  IconStudy,
  IconUser,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { courseLevelTitele } from "@/constants";
import { getCourseBySlug } from "@/lib/actions/course.action";
import { ECourseStatus } from "@/types/enum";
import Image from "next/image";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getCourseBySlug({ slug: params.slug });
  console.log("🚀 ~ data:", data);
  if (!data) {
    return null;
  }
  if (data.status !== ECourseStatus.APPROVED) return <PageNotFound />;
  const videoId = data.intro_url?.split("v=")[1];
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
      <div>
        <div className="relative aspect-video mb-5">
          {data.intro_url ? (
            <>
              <iframe
                className="w-full h-full aspect-video"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={data.image}
                alt=""
                layout="fill" // Sử dụng layout fill thay vì fill
                objectFit="cover" // Đảm bảo ảnh không bị méo
                className="rounded-lg"
              />
            </div>
          )}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-10">
          <div className="bg-white rounded-lg p-5">
            <h4 className="text-sm text-slate-400 dark:text-dark">Bài học</h4>
            <h3 className="font-bold dark:text-dark">100</h3>
          </div>
          <div className="bg-white rounded-lg p-5">
            <h4 className="text-sm text-slate-400 dark:text-dark">Lượt xem</h4>
            <h3 className="font-bold dark:text-dark">
              {data.views.toLocaleString()}
            </h3>
          </div>
          <div className="bg-white rounded-lg p-5">
            <h4 className="text-sm text-slate-400 dark:text-dark">Trình độ</h4>
            <h3 className="font-bold dark:text-dark">
              {courseLevelTitele[data.level]}
            </h3>
          </div>
          <div className="bg-white rounded-lg p-3 md:p-5">
            <h4 className="text-sm text-slate-400 dark:text-dark">
              Thời lượng
            </h4>
            <h3 className="font-bold dark:text-dark">45phút</h3>
          </div>
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Yêu cầu</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {data.info.requirements.map((r, index) => (
            <div key={index} className="mb-5 flex items-center gap-2">
              <span className="flex-shrink-0 size-5 bg-primary text-white p-1  flex items-center justify-center rounded">
                <IconCheck></IconCheck>
              </span>
              {r}
            </div>
          ))}
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Lợi ích</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {data.info.benefits.map((b, index) => (
            <div key={index} className="mb-5 flex items-center gap-2">
              <span className="flex-shrink-0 size-5 bg-primary text-white p-1  flex items-center justify-center rounded">
                <IconCheck></IconCheck>
              </span>
              {b}
            </div>
          ))}
        </div>
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">Q.A</h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {data.info.qa.map((qa, index) => (
            <div key={index}>
              <div key={index} className="mb-5 flex items-center gap-2">
                <span className="flex-shrink-0 size-6 bg-primary text-white p-1  flex items-center justify-center rounded">
                  <IconQuestion></IconQuestion>
                </span>
                {qa.question}
              </div>{" "}
              <div key={index} className="mb-5 flex items-center gap-2">
                <span className="flex-shrink-0 size-6 bg-primary text-white p-1  flex items-center justify-center rounded">
                  <IconCheck></IconCheck>
                </span>
                {qa.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="bg-white rounded-lg p-3 md:p-5">
          <div className="flex items-center gap-2 mb-3">
            <strong className="text-primary text-xl font-bold">
              {data.price}
            </strong>
            <span className="text-slate-400 line-through text-sm dark:text-dark">
              {data.sale_price}
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
