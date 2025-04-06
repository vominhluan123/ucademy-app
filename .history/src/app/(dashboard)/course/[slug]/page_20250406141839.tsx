import PageNotFound from "@/app/not-found";
import { IconCheck, IconPlay, IconStudy, IconUser } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ILecture } from "@/database/lecture.model";
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
  const lectures = data?.lectures || [];
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
        </div>{" "}
        <h2 className="font-bold text-xl mb-2 dark:text-dark-text">
          Nội dung khoá học
        </h2>
        <div className="leading-normal mb-10 dark:text-dark-text">
          {lectures.map((lecture: ILecture) => (
            <Accordion
              type="single"
              collapsible
              className="w-full"
              key={lecture._id}
            >
              <AccordionItem value={lecture._id}>
                <AccordionTrigger>
                  <div className="flex gap-3 items-center w-full justify-between pr-5">
                    <div>{lecture.title || "Chương Mới"} </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {/* {lecture.content.map((item : any) =>  (
                    <div
                      key={lecture._id}
                      className="flex items-center gap-2 mb-5"
                    >
                      <span className="flex-shrink-0 size-5 bg-primary text-white p-1  flex items-center justify-center rounded">
                        <IconCheck></IconCheck>
                      </span>
                      {item.title}
                      {item.video && (
                        <span className="text-slate-400 text-sm dark:text-white">
                          ({item.video})
                        </span>
                      )}
                    </div>
                  ))} */}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
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
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value={qa.question}>
                <AccordionTrigger>{qa.question}</AccordionTrigger>
                <AccordionContent>{qa.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div className="pb-20 lg:p-0">
        <div className="bg-white rounded-lg p-3 md:p-5 dark:bg-dark-card">
          <div className="flex items-center gap-2 mb-3">
            <strong className="text-primary text-xl font-bold dark:text-white">
              {data.sale_price}
            </strong>
            <span className="text-slate-400 line-through text-sm dark:text-white">
              {data.price}
            </span>
            <span className="ml-auto font-semibold text-sm inline-block px-3 py-1 rounded-lg bg-primary text-primary bg-opacity-10 dark:text-white">
              {Math.floor(((data.price - data.sale_price) / data.price) * 100)}%
            </span>
          </div>
          <h3 className="font-bold mb-3 dark:text-white">Khoá học gồm có:</h3>
          <ul className="mb-5 flex flex-col text-sx text-slate-500 dark:text-white">
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
