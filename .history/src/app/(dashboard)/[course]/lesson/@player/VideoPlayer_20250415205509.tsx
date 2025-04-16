import { Button } from "@/components/ui/button";
import { useState } from "react";

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`transition-all duration-300 ${
        isExpanded ? "w-full h-[600px]" : "w-full h-[300px]"
      } relative`}
    >
      <iframe
        className="w-full h-full rounded-lg object-fill"
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`}
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <Button
        onClick={toggleExpand}
        className="absolute top-2 right-2 z-10"
        variant="secondary"
        size="sm"
      >
        {isExpanded ? "Thu nhỏ" : "Mở rộng"}
      </Button>
    </div>
  );
};

export default VideoPlayer;
