import { useState, useEffect, useRef } from 'react';

export default function useCountDown(idx: number, initialCount: number = -1) {
  const intervalRef = useRef<number>();
  const [countDown, setCountDown] = useState<number>(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  const startCountDown = (count?: number) => {
    setCountDown(count ?? initialCount);
    setIsRunning(true);
  };

  const cleanUp = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  useEffect(() => {
    if (idx == -1) {
      return;
    }

    if (isRunning && !intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setCountDown((count) => {
          return count - 1;
        });
      }, 1000);
    }

    return cleanUp;
  }, [idx, isRunning]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (countDown === 0) {
      cleanUp();
    }
  }, [countDown]);

  return {
    countDown,
    isRunning,
    stop: cleanUp,
    start: startCountDown,
  };
}
