import { CanvasItemRect, CanvasPointPositionType, ContentDrawer } from "..";

export { Chart_Rect_2D };
export type { ChartUseRectItemConfig };
type RectangleBounds = { rectangleBounds: CanvasItemRect };
type RectStyleConfig = {
  fillRect_color?: string;
  strokeRect_color?: string;
  strokeRect_lineWidth?: number;
};
type RectConfigUnionType = RectStyleConfig & RectangleBounds;
type ChartUseRectItemConfig =
  | ({ fillRect_color: string } & RectStyleConfig)
  | ({
      strokeRect_color: string;
    } & RectStyleConfig)
  | ({
      fillRect_color: string;
      strokeRect_color: string;
    } & RectStyleConfig);
type UserRectItemConfig =
  | ({ fillRect_color: string } & RectConfigUnionType)
  | ({
      strokeRect_color: string;
    } & RectConfigUnionType)
  | ({
      fillRect_color: string;
      strokeRect_color: string;
    } & RectConfigUnionType);
class Chart_Rect_2D implements ContentDrawer {
  private renderingContext: CanvasRenderingContext2D;
  //For RendingEngine use.
  public centerPoint: CanvasPointPositionType;
  private userRectItemConfig: UserRectItemConfig;
  constructor(
    canvasRendingContext2D: CanvasRenderingContext2D,
    user_rectItemConfig: UserRectItemConfig
  ) {
    this.renderingContext = canvasRendingContext2D;
    this.userRectItemConfig = user_rectItemConfig;
    this.drawItem();
    this.findCenterPoint(user_rectItemConfig.rectangleBounds);
  }

  public drawItem() {
    const userRectItemConfig = this.userRectItemConfig;
    const ctx = this.renderingContext;
    ctx.save();
    const { x_coordinate, y_coordinate, height, width } =
      userRectItemConfig.rectangleBounds;
    const { fillRect_color, strokeRect_color, strokeRect_lineWidth } =
      userRectItemConfig;
    if (fillRect_color) {
      ctx.fillStyle = fillRect_color;
      ctx.fillRect(x_coordinate, y_coordinate, width, height);
    }
    if (strokeRect_color) {
      ctx.lineWidth = strokeRect_lineWidth ?? 1;
      ctx.strokeStyle = strokeRect_color;
      ctx.strokeRect(x_coordinate, y_coordinate, width, height);
    }
    ctx.restore();
  }

  private findCenterPoint(rectangleBounds: CanvasItemRect) {
    const { x_coordinate, y_coordinate, height, width } = rectangleBounds;
    this.centerPoint = {
      x_coordinate: x_coordinate + width / 2,
      y_coordinate: y_coordinate + height / 2,
    };
  }
}
