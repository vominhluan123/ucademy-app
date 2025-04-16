const VideoPlayer = ({ videoID }: { videoID: string }) => {
  return (
    <iframe
      className="w-full h-full rounded-lg object-fill"
      src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`}
      allow="autoplay"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
