export { Chart_Line_2D };
type LinePositionConfig = {
  start_x_coordinate: number;
  start_y_coordinate: number;
  end_x_coordinate: number;
  end_y_coordinate: number;
};

type LineStyle = {
  line_color?: string;
  lineWidth?: number;
};
class Chart_Line_2D {
  constructor(
    ctx: CanvasRenderingContext2D,
    linePositionConfig: LinePositionConfig,
    lineStyle?: LineStyle
  ) {
    this.drawLine(ctx, linePositionConfig, lineStyle);
  }
  private drawLine(
    ctx: CanvasRenderingContext2D,
    linePositionConfig: LinePositionConfig,
    lineStyle?: LineStyle
  ) {
    //The difference between ctx.moveto() and ctx.translate(). So drawing line on canvas has no need to use translate(), also the save() & restore().
    // ctx.save();
    ctx.lineWidth = lineStyle?.lineWidth ?? 1;
    ctx.strokeStyle = lineStyle?.line_color ?? "black";
    ctx.beginPath();
    ctx.moveTo(
      linePositionConfig.start_x_coordinate,
      linePositionConfig.start_y_coordinate
    );
    ctx.lineTo(
      linePositionConfig.end_x_coordinate,
      linePositionConfig.end_y_coordinate
    );
    ctx.stroke();
  }
}
