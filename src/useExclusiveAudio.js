import { useCallback, useEffect, useRef } from "react";

// One audio player for the whole experience: starting a new track stops the old one.
export function useExclusiveAudio() {
  const audioRef = useRef(null);
  const currentSourceRef = useRef("");

  const stop = useCallback(() => {
    const player = audioRef.current;
    if (player) {
      player.pause();
      player.currentTime = 0;
      player.onended = null;
      player.onerror = null;
    }
    audioRef.current = null;
    currentSourceRef.current = "";
  }, []);

  const play = useCallback(async (source) => {
    if (!source) return;
    if (currentSourceRef.current === source && audioRef.current && !audioRef.current.paused) return;
    stop();
    const player = new Audio(source);
    player.preload = "auto";
    audioRef.current = player;
    currentSourceRef.current = source;
    player.onended = () => {
      if (audioRef.current === player) stop();
    };
    player.onerror = () => {
      if (audioRef.current === player) stop();
      console.warn(`Could not load audio: ${source}`);
    };
    try {
      await player.play();
    } catch (error) {
      if (audioRef.current === player) stop();
      console.warn("Audio playback was blocked or failed:", error);
    }
  }, [stop]);

  useEffect(() => () => stop(), [stop]);
  return { play, stop };
}
