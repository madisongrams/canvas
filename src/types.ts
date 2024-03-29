export type DrawFunction = (
  cxt: CanvasRenderingContext2D,
  frameCount: number
) => void;

export interface Point {
  x: number,
  y: number
}
