"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const LessonNavigation = () => {
  const router = useRouter();
  return (
    <>
      <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition p-2 max-md:hidden">
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition max-md:hidden">
        <ChevronRight className="w-5 h-5" />
      </button>
    </>
  );
};

export default LessonNavigation;
