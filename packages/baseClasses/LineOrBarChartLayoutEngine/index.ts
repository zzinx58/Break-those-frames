import { LayoutEngine } from "../index";
import type { ContextType } from "../index";
export { LineOrBarChartLayoutEngine };
class LineOrBarChartLayoutEngine extends LayoutEngine {
  constructor(containerDOM: HTMLElement, contextType: ContextType) {
    super(containerDOM, contextType);
  }
}
