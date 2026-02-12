import React, { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    audio.muted = true; // 🔇 start muted
    audio.play().catch(() => {}); // allowed because muted

    const enableSound = () => {
      audio.muted = false; // 🔊 unmute on first interaction
      audio.play().catch(() => {});
      setShowIcon(false); // hide icon

      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    // Any first user interaction will enable sound
    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);
    window.addEventListener("keydown", enableSound);

    const pauseGlobal = () => audio.pause();
    const playGlobal = () => audio.play().catch(() => {});

    window.addEventListener("pause-global-music", pauseGlobal);
    window.addEventListener("play-global-music", playGlobal);

    return () => {
      window.removeEventListener("pause-global-music", pauseGlobal);
      window.removeEventListener("play-global-music", playGlobal);
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  return (
    <>
      {/* Audio */}
      <audio
     ref={audioRef}
     src={import.meta.env.BASE_URL + "song.mp3"}
     loop
    />


      {/* Small speaker icon in corner */}
      {showIcon && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
            <Volume2 />
          </div>
        </div>
      )}
    </>
  );
};
