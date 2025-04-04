"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Editor } from "@tinymce/tinymce-react";

import { ILesson } from "@/database/lesson.modal";
import { updateLesson } from "@/lib/actions/lesson.action";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const formSchema = z.object({
  slug: z.string().optional(),
  duration: z.number().optional(),
  video_url: z.string().optional(),
  content: z.string().optional(),
});
export const LessonItemUpdate = ({ lesson }: { lesson: ILesson }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      slug: lesson.slug,
      duration: lesson.duration,
      video_url: lesson.video_url,
      content: lesson.content,
    },
  });
  console.log(lesson);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await updateLesson({
        lessonId: lesson._id,
        updateData: values,
      });
      if (res?.success) {
        toast.success("Cập nhật thành công");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Đường dẫn</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="bài-hoc-1"
                      {...field}
                      className="w-full px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thời lượng</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="bài-hoc-1"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className="w-full px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="video_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video Url</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.youtube.com/watch?v=abc123"
                      {...field}
                      className="w-full px-4 py-2 font-medium border dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Nội dung</FormLabel>
                  <FormControl>
                    <Editor
                      apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                      init={{
                        plugins: [
                          // Core editing features
                          "anchor",
                          "autolink",
                          "charmap",
                          "codesample",
                          "emoticons",
                          "image",
                          "link",
                          "lists",
                          "media",
                          "searchreplace",
                          "table",
                          "visualblocks",
                          "wordcount",
                          // Your account includes a free trial of TinyMCE premium features
                          // Try the most popular premium features until Apr 18, 2025:
                          "checklist",
                          "mediaembed",
                          "casechange",
                          "formatpainter",
                          "pageembed",
                          "a11ychecker",
                          "permanentpen",
                          "powerpaste",
                          "advtable",
                          "advcode",
                          "editimage",
                          "advtemplate",
                          "ai",
                          "mentions",
                          "tinycomments",
                          "tableofcontents",
                          "footnotes",
                          "mergetags",
                          "autocorrect",
                          "typography",
                          "inlinecss",
                          "markdown",
                          "importword",
                          "exportword",
                          "exportpdf",
                        ],
                        toolbar:
                          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                        browser_spellcheck: false,
                        contextmenu: false,
                        tinycomments_mode: "embedded",
                        tinycomments_author: "Author name",
                        mergetags_list: [
                          { value: "First.Name", title: "First Name" },
                          { value: "Email", title: "Email" },
                        ],
                        ai_request: (request: any, respondWith: any) =>
                          respondWith.string(() =>
                            Promise.reject("See docs to implement AI Assistant")
                          ),
                      }}
                      initialValue="Welcome to TinyMCE!"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end gap-5 items-center mt-8">
            <Button type="submit">Cập nhật</Button>
            <Link href="/" className="text-sm text-slate-600">
              Xem trước
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
