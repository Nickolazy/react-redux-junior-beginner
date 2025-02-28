import React, { useState, useEffect } from "react";

const animationPath = "src/assets/loading_animation_frames/";
const frames = Array.from({ length: 6 }, (_, i) => `${animationPath}frame${i + 1}.svg`);

const Loading = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <img src={frames[currentFrame]} alt="Loading..." />
    </div>
  );
};

export default Loading;
