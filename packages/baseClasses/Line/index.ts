import { ContentDrawer } from "..";
import { Queue } from "../LayoutEngine_v2";
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

//The point has been moved to, so the end_point of the line could just use height as param.
class Chart_Line_2D implements ContentDrawer {
  private renderingContext: CanvasRenderingContext2D;
  private linePositionConfig: LinePositionConfig;
  private lineStyle: LineStyle | undefined;
  constructor(
    ctx: CanvasRenderingContext2D,
    linePositionConfig: LinePositionConfig,
    instanceQueue?: Queue<ContentDrawer>
  );
  constructor(
    ctx: CanvasRenderingContext2D,
    linePositionConfig: LinePositionConfig,
    lineStyle?: LineStyle,
    instanceQueue?: Queue<ContentDrawer>
  );
  constructor(
    ctx: CanvasRenderingContext2D,
    linePositionConfig: LinePositionConfig,
    styleOrQueue?: LineStyle | Queue<ContentDrawer>,
    instanceQueue?: Queue<ContentDrawer>
  ) {
    this.renderingContext = ctx;
    this.linePositionConfig = linePositionConfig;
    instanceQueue && instanceQueue.add(this);
    if (styleOrQueue instanceof Queue<ContentDrawer>) {
      styleOrQueue.add(this);
    } else {
      this.lineStyle = styleOrQueue;
    }
    this.drawItem();
  }

  public drawItem() {
    const ctx = this.renderingContext;
    const lineStyle = this.lineStyle;
    const linePositionConfig = this.linePositionConfig;
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
