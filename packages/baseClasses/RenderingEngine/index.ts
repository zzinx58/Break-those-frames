import { BarChartLayoutEngine2D, BasicBarChartConfigOption } from "..";

export { BarChartRenderingEngine2D };
class BarChartRenderingEngine2D extends BarChartLayoutEngine2D {
  constructor(
    containerDOM: HTMLElement,
    barChartConfigOptions: BasicBarChartConfigOption
  ) {
    super(containerDOM, barChartConfigOptions);
  }
}
