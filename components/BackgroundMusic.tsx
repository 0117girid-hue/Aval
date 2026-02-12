import React, { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    const pauseGlobal = () => audio.pause();
    const playGlobal = () => audio.play().catch(() => {});

    window.addEventListener("pause-global-music", pauseGlobal);
    window.addEventListener("play-global-music", playGlobal);

    return () => {
      window.removeEventListener("pause-global-music", pauseGlobal);
      window.removeEventListener("play-global-music", playGlobal);
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

      {/* Speaker button (user click starts music) */}
      {showIcon && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => {
              if (audioRef.current) {
                audioRef.current
                  .play()
                  .then(() => setShowIcon(false))
                  .catch((e) => console.log("Play blocked:", e));
              }
            }}
            className="w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg flex items-center justify-center animate-pulse"
            aria-label="Play background music"
          >
            <Volume2 />
          </button>
        </div>
      )}
    </>
  );
};
