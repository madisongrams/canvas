import React from "react";
import { DrawFunction } from "./types";
import useCanvas from "./useCanvas";

interface CanvasProps {
  draw: DrawFunction;
}

const Canvas = ({ draw, ...props }: CanvasProps) => {
  const canvasRef = useCanvas(draw);

  return <canvas {...props} ref={canvasRef} />;
};

export default Canvas;
