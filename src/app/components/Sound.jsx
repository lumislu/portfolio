import { useState, useRef, useEffect } from "react";

const SoundBar = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    audioRef.current = new Audio("/song.mp3");
    audioRef.current.loop = true;
  }, []);


  return (
    <div
      className={`${
        isPlaying ? "play" : ""
      } soundBars link  d-flex align-items-center  justify-content-center "`}
      onClick={toggleMusic}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <audio ref={audioRef} loop preload="auto" />
    </div>
  );
};

export default SoundBar;
