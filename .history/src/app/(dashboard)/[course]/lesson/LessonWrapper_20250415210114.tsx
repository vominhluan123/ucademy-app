"use client";

const LessonWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen"></div>
  );
};

export default LessonWrapper;
