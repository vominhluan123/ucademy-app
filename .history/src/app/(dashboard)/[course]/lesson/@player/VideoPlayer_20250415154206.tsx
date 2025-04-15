"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function VideoPlayer({
  videoId,
  nextLessonSlug,
  params,
  searchParams,
}: {
  videoId: string;
  nextLessonSlug: string | null;
  params: {
    course: string;
  };
  searchParams: {
    slug: string;
  };
}) {
  const router = useRouter();
  const course = params.course;
  const slug = searchParams.slug;
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    let player: any;

    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player("yt-player", {
        height: "390",
        width: "100%",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
        },
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              if (nextLessonSlug) {
                router.push(`/${course}/lesson?slug=${nextLessonSlug}`);
              }
            }
          },
        },
      });
    };

    return () => {
      if (player) player.destroy();
    };
  }, [videoId, nextLessonSlug, router]);

  return <div id="yt-player" className="w-full h-full rounded-lg" />;
}
