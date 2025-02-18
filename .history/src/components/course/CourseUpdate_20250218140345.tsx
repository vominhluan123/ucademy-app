"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { ECourseLevel, ECourseStatus } from "@/types/enum";
import { updateCourse } from "@/lib/actions/course.action";
import { ICourse } from "@/database/course.model";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useImmer } from "use-immer";
import { IconAdd } from "../icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courseLevel, courseStatus } from "@/constants";
import { UploadButton } from "@/utils/uploadthing";

const formSchema = z.object({
  title: z.string().min(10, "Tối đa 10 kí tự"),
  slug: z.string().optional(),
  price: z.number().int().positive().optional(),
  sale_price: z.number().int().positive().optional(),
  intro_url: z.string().optional(),
  desc: z.string().optional(),
  image: z.string().optional(),
  status: z
    .enum([
      ECourseStatus.APPROVED,
      ECourseStatus.PENDING,
      ECourseStatus.REJECTED,
    ])
    .optional(),
  level: z
    .enum([
      ECourseLevel.ADVANCED,
      ECourseLevel.BEGINNER,
      ECourseLevel.INTERMEDIATE,
    ])
    .optional(),
  info: z.object({
    requirements: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),
    qa: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
  views: z.number().int().optional(),
});
export const CourseUpdate = ({ data }: { data: ICourse }) => {
  const [courseInfo, setcourseInfo] = useImmer({
    requirements: data.info.requirements,
    benefits: data.info.benefits,
    qa: data.info.qa,
  });
  const router = useRouter();
  const [isSubmitting, setisSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data.title,
      slug: data.slug,
      price: data.price,
      sale_price: data.sale_price,
      intro_url: data.intro_url,
      desc: data.desc,
      image: data.image,
      status: data.status,
      level: data.level,
      views: data.views,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setisSubmitting(true);
    try {
      const res = await updateCourse({
        slug: data.slug,
        updateData: {
          title: values.title,
          slug: values.slug,
          price: values.price,
          sale_price: values.sale_price,
          intro_url: values.intro_url,
          desc: values.desc,
          views: values.views,
          info: {
            requirements: courseInfo.requirements,
            benefits: courseInfo.benefits,
            qa: courseInfo.qa,
          },
          status: values.status,
          level: values.level,
        },
      });
      if (values.slug) {
        router.replace(`/manage/course/update?slug=${values.slug}`);
      }
      if (res?.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
        <div className="gap-8 mt-10 grid grid-cols-2 mb-8">
          {/* Tên Khoá Học */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên Khoá Học *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tên Khoá Học"
                    {...field}
                    className="w-full px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Đường dẫn Khoá Học */}
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Đường dẫn Khoá Học</FormLabel>
                <FormControl>
                  <Input
                    placeholder="duong-dan-khoa-hoc"
                    {...field}
                    className="w-full px-4 py-2 border font-medium dark:bg-dark-border  border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giá khuyến mãi</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="5999000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    className="w-full px-4 py-2 border font-medium dark:bg-dark-border  border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sale_price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giá gốc</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="9000.99"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    className="w-full px-4 py-2 border font-medium dark:bg-dark-border  border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả khoá học</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Nhập mô tả"
                    {...field}
                    className="h-[200px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ảnh đại diện</FormLabel>
                <FormControl>
                  <>
                    <div className=" border  rounded-lg dark:bg-dark-border  border-gray-300 dark:border-gray-600 h-[200px]"></div>
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        alert("Upload Completed");
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="intro_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Youtube URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.youtube.com/"
                    {...field}
                    className="w-full px-4 py-2 border font-medium dark:bg-dark-border  border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="views"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lượt xem</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1000"
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    className="w-full px-4 py-2 border font-medium dark:bg-dark-border  border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trạng thái</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseStatus.map((status) => (
                        <SelectItem value={status.value} key={status.value}>
                          {status.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trình độ</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Trình độ" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseLevel.map((level) => (
                        <SelectItem value={level.value} key={level.value}>
                          {level.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="info.requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between gap-5">
                  <span>Yêu cầu</span>
                  <button
                    type="button"
                    className="text-primary"
                    onClick={() => {
                      setcourseInfo((draft) => {
                        draft.requirements.push("");
                      });
                    }}
                  >
                    <IconAdd className="size-5"></IconAdd>
                  </button>
                </FormLabel>
                <FormControl>
                  <>
                    {courseInfo.requirements.map((r, index) => (
                      <div key={index} className="flex items-center w-full">
                        <Input
                          className="flex-1 px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                          placeholder={`Yêu cầu số ${index + 1}`}
                          value={r}
                          onChange={(e) => {
                            setcourseInfo((draft) => {
                              draft.requirements[index] = e.target.value; // Cập nhật giá trị trong state
                            });
                          }}
                        />
                        <button
                          type="button"
                          className="p-2"
                          {...field}
                          onClick={() => {
                            setcourseInfo((draft) => {
                              draft.requirements.splice(index, 1); // Xóa phần tử khỏi mảng
                            });
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="info.benefits"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between gap-5">
                  <span>Lơi ích</span>
                  <button
                    type="button"
                    className="text-primary"
                    onClick={() => {
                      setcourseInfo((draft) => {
                        draft.benefits.push("");
                      });
                    }}
                  >
                    <IconAdd className="size-5"></IconAdd>
                  </button>
                </FormLabel>
                <FormControl>
                  <>
                    {courseInfo.benefits.map((r, index) => (
                      <div key={index} className="flex items-center w-full">
                        <Input
                          className="flex-1 px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                          placeholder={`Lợi ích số ${index + 1}`}
                          value={r}
                          onChange={(e) => {
                            setcourseInfo((draft) => {
                              draft.benefits[index] = e.target.value; // Cập nhật giá trị trong state
                            });
                          }}
                        />
                        <button
                          type="button"
                          className="p-2"
                          {...field}
                          onClick={() => {
                            setcourseInfo((draft) => {
                              draft.benefits.splice(index, 1); // Xóa phần tử khỏi mảng
                            });
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="info.qa"
            render={({ field }) => (
              <FormItem className="col-start-1 col-end-3">
                <FormLabel className="flex items-center justify-between gap-5">
                  <span>Question/Answer</span>
                  <button
                    type="button"
                    className="text-primary"
                    onClick={() => {
                      setcourseInfo((draft) => {
                        draft.qa.push({
                          answer: "",
                          quesiton: "",
                        });
                      });
                    }}
                  >
                    <IconAdd className="size-5" />
                  </button>
                </FormLabel>
                <FormControl>
                  <>
                    {courseInfo.qa.map((r, index) => (
                      <div
                        className="flex items-center gap-3 w-full"
                        key={index}
                      >
                        <Input
                          className="flex-1 px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary transition"
                          placeholder={`Câu hỏi số ${index + 1}`}
                          value={r.quesiton}
                          onChange={(e) => {
                            setcourseInfo((draft) => {
                              draft.qa[index].quesiton = e.target.value; // Cập nhật giá trị trong state
                            });
                          }}
                        />
                        <Input
                          className="flex-1 px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary transition"
                          placeholder={`Câu trả lời số ${index + 1}`}
                          value={r.answer}
                          onChange={(e) => {
                            setcourseInfo((draft) => {
                              draft.qa[index].answer = e.target.value; // Cập nhật giá trị trong state
                            });
                          }}
                        />
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => {
                            setcourseInfo((draft) => {
                              draft.qa.splice(index, 1); // Xóa phần tử khỏi mảng qa
                            });
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          isLoading={isSubmitting}
          type="submit"
          variant={"primary"}
          className="w-[150px]"
          disabled={isSubmitting}
        >
          Cập Nhật Khoá Học
        </Button>
      </form>
    </Form>
  );
};
