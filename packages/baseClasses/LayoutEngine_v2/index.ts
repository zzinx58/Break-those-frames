import { CanvasContainer } from "../../topClasses/Container";
export { LayoutEngine };
export type { ContextType };
type ContextType = "2d" | "webgl2" | "bitmaprenderer";
class LayoutEngine extends CanvasContainer {
  //TODO: Public for test use.
  //Some platform may forbiden the webgl ability,so RenderingContext's might be null;
  public renderingContext: RenderingContext | null;
  constructor(containerDOM: HTMLElement, contextType: ContextType) {
    super(containerDOM);
    this.renderingContext = this.canvasElement.getContext(contextType);
  }
}
