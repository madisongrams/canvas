import { Point } from "./types";
const SCALE = 0.1;
const OFFSET = 80;
export const canvasWidth = window.innerWidth * .5;
export const canvasHeight = window.innerHeight * .5;

const heartSVG = "M463.46 37.008l-30.694 50.738-7.043-2.28c-27.146-8.797-71.525-7.15-97.6.11L321.22 87.5l-28.68-48.543c-33.63 69.254-32.264 117.56-14.79 148.574 18.71 33.208 57.378 49.09 99.117 48.574 48.743-.606 88.968-19.665 107.035-54.194 16.918-32.332 15.684-80.456-20.443-144.902zM323.935 137.594c18.45.1 29.36 15.338 31.462 36.644-37.11 17.91-53.963 3.398-61.173-26.545 11.382-7.063 21.324-10.144 29.71-10.1zm109.26 0c8.385-.045 18.328 3.036 29.71 10.1-7.21 29.942-24.064 44.454-61.174 26.544 2.104-21.306 13.014-36.545 31.463-36.644zm-293.553 50.96c-1.226-.01-2.446-.003-3.66.018-30.175.536-56.142 10.59-75.743 26.574-43.444 35.43-57.27 100.752-12.824 166.192 20.293 33.995 44.432 54.24 70.797 64.187 32.85 12.395 66.655 8.823 99.94 4.114 33.284-4.71 65.854-10.63 96.896-8.42 31.04 2.212 62.09 10.18 90.505 41.165 19.374 21.125 46.887-1.627 23.82-24.156-35.024-34.207-72.527-47.42-109.377-50.04-36.85-2.62-72.2 4.698-104.207 9.228-32.007 4.53-60.272 6.552-84.558-2.61-14.39-5.43-28.308-14.802-41.55-31.142h351.744c13.673-52.293 14.867-106.368 1.873-142.072-19.765 8.49-42.412 12.9-66.2 13.197h-.002c-29.85.37-59.458-6.925-82.907-22.823-4.647 3.012-9.407 6.23-14.292 9.685l-5.734 4.057-5.49-4.382c-46.63-37.2-91.028-52.48-129.03-52.773z"
const SVG_PATH = new Path2D(heartSVG);

export function resizeCanvas(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  // const { width, height } = canvas.getBoundingClientRect();

  const width = window.innerWidth;
  const height = window.innerHeight;
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 0.5 } = window;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

export const predraw = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) => {
  context.save();
  resizeCanvas(context, canvas);
  const { width, height } = context.canvas;
  // clear the canvas
  context.clearRect(0, 0, width, height);
  context.fillStyle = "pink";
  context.fillRect(0, 0, width, height);
};

export const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fill();
};

export const drawCoordinate = (ctx: CanvasRenderingContext2D, coordinate: Point) => {
  ctx.fillStyle = 'red';
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(coordinate.x / SCALE - OFFSET, coordinate.y/ SCALE - OFFSET);
  ctx.fill(SVG_PATH);
  ctx.restore();  
}
