"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { commonClassName } from "@/constants";
import { IconDelete, IconEdit } from "../icons";
import { Input } from "../ui/input";
const CoureUpdateContent = () => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-3 items-center w-full justify-between pr-5">
              {/* <div>Chương 1: Giới thiệu</div> */}
              <div className="w-full">
                <Input placeholder="Tiêu đề" />
              </div>
              <div className="flex gap-2">
                <span className={commonClassName.action}>
                  <IconEdit />
                </span>
                <span className={commonClassName.action}>
                  <IconDelete />
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default CoureUpdateContent;
