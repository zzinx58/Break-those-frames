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

    this.test1();
    this.test2();

    console.log(this.canvasSizeInfo);
    console.log(this.containerInfo_RelateToViewport);
  }

  private getRenderingContext(renderingContextId: string) {
    //do something: If it's necessary to constrain user's input values.
    //default context 2B "2d".
    this.renderingContext = this.canvasElement.getContext(renderingContextId);
    return this.renderingContext;
  }

  private test1() {
    const ctx = this.getRenderingContext("2d") as CanvasRenderingContext2D;
    // ctx.save();
    // ctx.strokeStyle = "fff";
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(100, 100);
    // ctx.stroke();
    // ctx.restore();
    // console.log(this.containerInfo_RelateToViewport.height);

    //left_upper
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 20,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: 0,
        y_coordinate: 0,
        textBaseLine: "top",
        textAlign: "start",
      }
    );
    //right_upper
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 20,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: this.canvasSizeInfo.width / 2,
        y_coordinate: 0,
        textBaseLine: "top",
        textAlign: "end",
      }
    );
    //left_bottom
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 20,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: 0,
        y_coordinate: this.canvasSizeInfo.height / 2,
        textBaseLine: "bottom",
        textAlign: "start",
      }
    );
    //right_bottom
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 20,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: this.canvasSizeInfo.width / 2,
        y_coordinate: this.canvasSizeInfo.height / 2,
        textBaseLine: "bottom",
        textAlign: "end",
      }
    );
  }

  test2() {
    const ctx = this.getRenderingContext("2d") as CanvasRenderingContext2D;
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 20,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: this.canvasSizeInfo.width / 4,
        y_coordinate: this.canvasSizeInfo.height / 4,
        textBaseLine: "middle",
        textAlign: "center",
      }
    );
  }
}
