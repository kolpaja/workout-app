import { useState, useEffect, useRef } from 'react';

export default function useCountDown(idx: number, initialCount: number) {
  const intervalRef = useRef<number>();
  const [countDown, setCountDown] = useState<number>(initialCount);

  useEffect(() => {
    if (idx == -1) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setCountDown((count) => {
        console.log('countdown:', count);
        return count - 1;
      });
    }, 50);

    return cleanUp;
  }, [idx]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (countDown === 0) {
      cleanUp();
    }
  }, [countDown]);

  const cleanUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  return countDown;
}
