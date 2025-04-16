"use client";

import useLessonLayoutStore from "@/store";

const LessonWrapper = ({ children }: { children: React.ReactNode }) => {
  const isExpanded = useLessonLayoutStore((state) => state.isExpanded);
  return (
    <div
      className={
        isExpanded
          ? "block"
          : "flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen"
      }
    >
      {children}
    </div>
  );
};

export default LessonWrapper;
