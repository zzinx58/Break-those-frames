export { BarChartLayoutEngine };
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
class BarChartLayoutEngine {
  // public barChartSpaceRectObj: Record<string, CanvasItemRect>;
  constructor() {}

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
}
