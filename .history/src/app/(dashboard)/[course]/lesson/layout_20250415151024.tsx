import { Suspense } from "react";
import LoadingPlayer from "./@player/LoadingPlayer";

const Layout = async ({
  player,
  outline,
}: {
  player: React.ReactNode;
  outline: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
      <Suspense fallback={<LoadingPlayer />}>{player}</Suspense>
      <Suspense>{outline}</Suspense>
    </div>
  );
};

export default Layout;
