const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      className="w-full h-full rounded-lg object-fill"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
      allow="autoplay"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
