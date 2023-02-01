export { BarChartLayoutEngine2D };
export type { BasicChartConfigOption };
import {
  Chart_Text_2D,
  FontConfigOptions,
  Position_DrawTextOptions,
} from "../../baseClasses/index";
interface BasicChartConfigOption {
  barChartType: BarChartType;
  data: {
    [key: string]: number;
  };
  chartPadding?: number;
  bar_colors?: string[];
  title_configOptions?: {
    fontConfigOptions: FontConfigOptions;
    //Temporarily not provide.
    // positionConfigOptions: Position_DrawItemOptions
  };
  coordinateLabel_configOptions?: {
    fontConfigOptions: FontConfigOptions;
  };
  tipsLabel_configOptions?: {
    position: "inside" | "outside";
  };
}
type basicBarChartType = "vertical_B2T" | "horizontal_L2R";
type BarChartType = basicBarChartType | "horizontal_two-way_T2B";
type CanvasItemRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};
type SpaceNameType =
  | "titleSpaceRect"
  | "SubtitleSpaceRect"
  | "toolTipsSpaceRect"
  | "ActualChartSpaceRect"
  | "x_coordinateLabelSpaceRect"
  | "y_coordinateLabelSpaceRect"
  | "ChartContentSpaceRect"
  | "LeftBottomIdleSpaceRect"
  | "RightBottomIdleSpaceRect";

//BarChartLayoutEngine have to return the spaceItemRect infos.
class BarChartLayoutEngine2D {
  // public barChartSpaceRectObj: Record<string, CanvasItemRect>;
  private barChartConfigOption: BasicChartConfigOption;
  constructor(barChartConfigOption: BasicChartConfigOption) {
    this.barChartConfigOption = barChartConfigOption;
  }

  private createCanvasItemRect<T extends string>(
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

  private test() {}
}
