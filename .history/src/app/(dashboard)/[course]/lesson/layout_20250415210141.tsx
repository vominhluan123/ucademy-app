import { Suspense } from "react";
import LoadingOutline from "./@outline/LoadingOutline";
import LoadingPlayer from "./@player/LoadingPlayer";
import LessonWrapper from "./LessonWrapper";

const Layout = async ({
  player,
  outline,
}: {
  player: React.ReactNode;
  outline: React.ReactNode;
}) => {
  return (
    <LessonWrapper>
      <Suspense fallback={<LoadingPlayer />}>{player}</Suspense>
      <Suspense fallback={<LoadingOutline />}>{outline}</Suspense>
    </LessonWrapper>
  );
};

export default Layout;
