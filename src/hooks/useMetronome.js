import { useState, useEffect, useRef, useCallback } from 'react';

export function useMetronome() {
  const [bpm, setBpm] = useState(80);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState(0);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const playClick = useCallback((isAccent) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = isAccent ? 1000 : 800;
    gain.gain.value = isAccent ? 0.3 : 0.15;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  }, [getAudioContext]);

  const start = useCallback(() => {
    if (isPlaying) return;
    setIsPlaying(true);
    setBeat(0);
    const interval = (60 / bpm) * 1000;
    let currentBeat = 0;
    playClick(true);
    intervalRef.current = setInterval(() => {
      currentBeat = (currentBeat + 1) % beatsPerMeasure;
      setBeat(currentBeat);
      playClick(currentBeat === 0);
    }, interval);
  }, [bpm, beatsPerMeasure, isPlaying, playClick]);

  const stop = useCallback(() => {
    setIsPlaying(false);
    setBeat(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) stop();
    else start();
  }, [isPlaying, start, stop]);

  useEffect(() => {
    if (isPlaying) {
      stop();
      start();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bpm, beatsPerMeasure]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { bpm, setBpm, isPlaying, beat, beatsPerMeasure, setBeatsPerMeasure, toggle, start, stop };
}
