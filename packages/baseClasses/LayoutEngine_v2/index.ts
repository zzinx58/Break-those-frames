import { CanvasContainer } from "../../topClasses/Container";
import {
  CanvasItemRect,
  CanvasPointPositionType,
  Chart_Text_2D,
  FontConfigOptions,
  GridConfigType,
} from "../index";
export { LayoutEngine };
export type { ContextType };
type ContextType = "2d" | "webgl2" | "bitmaprenderer";
class LayoutEngine extends CanvasContainer {
  //TODO: Public for test use.
  //Some platform may forbiden the webgl ability,so RenderingContext's might be null;
  public renderingContext: RenderingContext | null;
  protected chartContentSpaceRect: CanvasItemRect;
  constructor(
    containerDOM: HTMLElement,
    contextType: ContextType,
    maxValue: number,
    gridConfig?: GridConfigType
  ) {
    super(containerDOM);
    const ctx = this.canvasElement.getContext(
      contextType
    ) as CanvasRenderingContext2D;
    this.renderingContext = ctx;
    const finalGridConfig =
      gridConfig ??
      ({
        topSpaceHeight: 0,
        border_paddingWidth: 0,
        bottomSpaceHeight: 0,
      } as GridConfigType);
    this.initChartContentSpace(ctx, finalGridConfig, maxValue);
  }

  private initChartContentSpace(
    ctx: CanvasRenderingContext2D,
    gridConfig: GridConfigType,
    maxValue: number
  ) {
    const { defaultFontConfigOptions } =
      this._AggregateOfLayoutEngineNeededObj();
    //Inside padding width.
    const chartPaddingWidth = 2;
    const defaultCoordinateFontSizeInfo = new Chart_Text_2D(
      ctx,
      maxValue + "",
      defaultFontConfigOptions
    ).getFontSize();
    //Font with padding.
    defaultCoordinateFontSizeInfo.fontWidth =
      defaultCoordinateFontSizeInfo.fontWidth + 4;
    defaultCoordinateFontSizeInfo.fontHeight =
      defaultCoordinateFontSizeInfo.fontHeight + 4;

    const actualChartSpace: CanvasItemRect = {
      x_coordinate: chartPaddingWidth,
      y_coordinate: gridConfig.topSpaceHeight + chartPaddingWidth,
      width: this.canvasSizeInfo.width - 2 * chartPaddingWidth,
      height:
        this.canvasSizeInfo.height -
        gridConfig.topSpaceHeight -
        gridConfig.bottomSpaceHeight -
        2 * chartPaddingWidth,
    };

    const chartContentSpace: CanvasItemRect = {
      x_coordinate:
        actualChartSpace.x_coordinate + defaultCoordinateFontSizeInfo.fontWidth,
      y_coordinate: actualChartSpace.y_coordinate,
      width: actualChartSpace.width - defaultCoordinateFontSizeInfo.fontWidth,
      height: actualChartSpace.height,
    };

    this.chartContentSpaceRect = chartContentSpace;
  }

  private _AggregateOfLayoutEngineNeededObj() {
    const defaultFontConfigOptions: FontConfigOptions = {
      font_family: "Arial",
      fillText_color: "red",
      font_size: 10,
    };

    return {
      defaultFontConfigOptions,
    };
  }

  protected createCanvasItemRect<T extends string>(
    spaceNames: ReadonlyArray<T>
  ): { [K in T]: CanvasItemRect } {
    let template_of_CanvasItemRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    return spaceNames.reduce((result, name) => {
      result[name] = template_of_CanvasItemRect;
      return result;
    }, Object.create(null));
  }
  protected createCanvasPointPositionType<T extends string>(
    spaceNames: ReadonlyArray<T>
  ): { [K in T]: CanvasPointPositionType } {
    let template_of_CanvasPointPosition = {
      x: 0,
      y: 0,
    };
    return spaceNames.reduce((result, name) => {
      result[name] = template_of_CanvasPointPosition;
      return result;
    }, Object.create(null));
  }
}
