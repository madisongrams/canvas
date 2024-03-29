export function resizeCanvas(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
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
};

export const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fill();
};
