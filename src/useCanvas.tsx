import { useRef, useEffect, Ref, useState } from "react";
import { DrawFunction, Point } from "./types";
import { drawCoordinate, predraw } from "./canvas-helpers";

type useCanvasType = (
  draw: DrawFunction
) => [
  canvas: Ref<HTMLCanvasElement>,
  coords: Point[],
  setCoords: React.Dispatch<React.SetStateAction<Point[]>>
];

const useCanvas: useCanvasType = (draw: DrawFunction) => {
  const canvasRef: Ref<HTMLCanvasElement> = useRef(null);
  const [coords, setCoords] = useState([] as Point[]);

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
      coords.forEach((coord) => drawCoordinate(context, coord))
      postdraw();
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, coords]);

  return [canvasRef, coords, setCoords];
};

export default useCanvas;
