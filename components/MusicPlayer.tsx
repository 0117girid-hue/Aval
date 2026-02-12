import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Music as MusicIcon, Heart } from "lucide-react";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 - 100

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // ⏸ Pause MusicPlayer song
      audioRef.current.pause();
      setIsPlaying(false);

      // ▶️ Resume background music
      window.dispatchEvent(new Event("play-global-music"));
    } else {
      // 🛑 Stop background music
      window.dispatchEvent(new Event("pause-global-music"));

      // ▶️ Play MusicPlayer song
      audioRef.current.play().catch((e) =>
        console.log("User interaction required for audio", e)
      );
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Update progress while playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(percent) ? 0 : percent);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  // Seek when user clicks progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!audioRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = clickX / width;

    audioRef.current.currentTime = percent * audioRef.current.duration;
  };

  return (
    <section id="music" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 flex flex-col md:flex-row items-center gap-10">
        
        {/* Rotating Album */}
        <motion.div 
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-pink-200 shadow-2xl relative shrink-0"
        >
          <img 
            src="https://i.pinimg.com/736x/15/58/bb/1558bb34cd7a80f571305e7116a84d64.jpg" 
            alt="Album Art" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
              <MusicIcon className="text-pink-400" />
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-romantic font-bold text-pink-600 mb-2"
          >
            Our Theme Song
          </motion.h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-1">Kadhaipoma</h3>
          <p className="text-gray-500 italic mb-8">From "Oh My Kadavule" - Leon James</p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center md:justify-start gap-6">
              
              {/* Play / Pause */}
              <button 
                onClick={togglePlay}
                className="w-16 h-16 bg-pink-400 hover:bg-pink-500 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
              </button>

              {/* Progress Bar */}
              <div
                onClick={handleSeek}
                className="flex-1 h-2 bg-pink-100 rounded-full overflow-hidden relative cursor-pointer"
              >
                <div
                  className="h-full bg-pink-400 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Volume */}
              <button onClick={toggleMute}>
                {isMuted ? (
                  <VolumeX className="text-pink-400" />
                ) : (
                  <Volume2 className="text-pink-400" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Heart className="text-pink-400 animate-pulse" fill="currentColor" size={20} />
              <span className="text-pink-400 text-sm font-medium">
                Currently Playing In My Heart
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio */}
     <audio 
     ref={audioRef}
     src={import.meta.env.BASE_URL + "Kadhaippoma.mp3"}
     loop
    />

    </section>
  );
};
