import { BarChartRenderingEngine2D } from "../../baseClasses/index";
import type { BasicBarChartConfigOption } from "../../baseClasses/index";

export { BarChart2D };
class BarChart2D extends BarChartRenderingEngine2D {
  constructor(
    containerDOM: HTMLElement,
    barChartConfigOptions: BasicBarChartConfigOption
  ) {
    super(containerDOM, barChartConfigOptions);
  }
}
