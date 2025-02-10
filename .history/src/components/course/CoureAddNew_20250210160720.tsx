"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
});

function CoureAddNew() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="gap-8 mt-10 grid grid-cols-2 mb-8">
          {/* Tên Khoá Học */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    placeholder=" "
                    {...field}
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary dark:focus:border-primary-dark transition"
                  />
                </FormControl>
                <FormLabel className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary dark:peer-focus:text-primary-dark transition-all">
                  Tên Khoá Học *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Đường dẫn Khoá Học */}
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    placeholder=" "
                    {...field}
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary dark:focus:border-primary-dark transition"
                  />
                </FormControl>
                <FormLabel className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary dark:peer-focus:text-primary-dark transition-all">
                  Đường dẫn Khoá Học
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Tạo khoá học</Button>
      </form>
    </Form>
  );
}
export default CoureAddNew;
