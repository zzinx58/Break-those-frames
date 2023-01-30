import { Chart_Text_2D } from "../../baseClasses/index";
import { CanvasContainer } from "../Container";
interface BarChartOptions {
  bar_colors: Array<string>;
}
interface BasicChartConfigOption {}

export { BarChart };
class BarChart extends CanvasContainer {
  //RenderingContext of this.canvasElement
  protected renderingContext!: RenderingContext | null;
  private barChartOptions: BarChartOptions;
  constructor(containerDOM: HTMLElement, barChartOptions: BarChartOptions) {
    super(containerDOM);
    this.barChartOptions = barChartOptions;
    // console.log(this.containerInfo_RelateToViewport);
    this.test();
  }

  private getRenderingContext(renderingContextId: string) {
    //do something: If it's necessary to constrain user's input values.
    //default context 2B "2d".
    this.renderingContext = this.canvasElement.getContext(renderingContextId);
    return this.renderingContext;
  }

  private test() {
    const ctx = this.getRenderingContext("2d") as CanvasRenderingContext2D;
    // ctx.save();
    // ctx.strokeStyle = "fff";
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(100, 100);
    // ctx.stroke();
    // ctx.restore();
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 32,
        message: "Hello, world! 你好，世界！",
      },
      { x_coordinate: 0, y_coordinate: 12 }
    );
  }
}
