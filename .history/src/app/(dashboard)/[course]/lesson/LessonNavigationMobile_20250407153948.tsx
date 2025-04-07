'use client'
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";'
const LessonNavigationMobile = () => {
  return (
    <>
    <Button className="size-10 p-3">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button className="size-10 p-3">
                <ChevronRight className="w-5 h-5" />
              </Button>
    </>
  );
};

export default LessonNavigationMobile;
