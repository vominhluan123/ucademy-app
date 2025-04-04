"use client";
import { Form } from "@/components/ui/form";
import { ILesson } from "@/database/lesson.modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({});
export const LessonItemUpdate = ({ lesson }: { lesson: ILesson }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
      </Form>
    </div>
  );
};
