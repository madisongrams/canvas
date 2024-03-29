import { useRef, useEffect, Ref } from "react";
import { DrawFunction } from "./types";
import { predraw } from "./canvas-helpers";

const useCanvas = (draw: DrawFunction) => {
  const canvasRef: Ref<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    if (!context) return;

    let frameCount = 0;
    let animationFrameId: number;
    const postdraw = () => {
      context.restore();
    };
    const render = () => {
      predraw(context, canvas);
      frameCount++;
      draw(context, frameCount);
      postdraw();
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
