import { useEffect } from 'react';

export type AnimationCallback = {
  (delta: number): void;
};

export function useAnimation(callback: AnimationCallback): void {
  useEffect(() => {
    let handle: number;
    let lastFrame: number = 0;

    function animationLoop(now: number) {
      const delta = (now - lastFrame) / 1000;
      lastFrame = now;
      callback(delta);
      handle = requestAnimationFrame(animationLoop);
    }
    handle = requestAnimationFrame(animationLoop);

    return () => {
      cancelAnimationFrame(handle);
    };
  }, [callback]);
}
