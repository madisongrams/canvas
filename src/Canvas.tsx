import React from "react";
import { DrawFunction } from "./types";
import useCanvas from "./useCanvas";

interface CanvasProps {
  draw: DrawFunction;
}

const Canvas = ({ draw, ...props }: CanvasProps) => {
  const [canvasRef, coords, setCoords] = useCanvas(draw);

  const handleClick: React.MouseEventHandler<HTMLCanvasElement> = (e) => {
    console.log("shdhsd")
    const newCoord = { x: e.clientX, y: e.clientY };
    setCoords([...coords, newCoord]);
  };

  return <canvas {...props} ref={canvasRef} onClick={handleClick} />;
};

export default Canvas;
