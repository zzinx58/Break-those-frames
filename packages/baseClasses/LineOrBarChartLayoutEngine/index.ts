import { LayoutEngine, Series_ChartConfig } from "../index";
import type { ContextType, ChartOptions } from "../index";
export { LineOrBarChartLayoutEngine };
class LineOrBarChartLayoutEngine extends LayoutEngine {
  constructor(
    containerDOM: HTMLElement,
    contextType: ContextType,
    chartOptions: ChartOptions
  ) {
    let dataArr = [];
    chartOptions.series.forEach((item: Series_ChartConfig) => {
      dataArr.push.apply(dataArr, item.data);
    });
    const maxValue = Math.max(...dataArr);
    super(containerDOM, contextType, chartOptions.grid, maxValue);
  }
}
