import {
  Chart_Text_2D,
  FontConfigOptions,
  Position_DrawTextOptions,
} from "../../baseClasses/index";
import { CanvasContainer } from "../Container";
type basicBarChartType = "vertical" | "horizontal";
interface BasicChartConfigOption {
  barChartType: basicBarChartType | "horizontal_two-way";
  data: {
    [key: string]: number;
  };
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

export { BarChart };
class BarChart extends CanvasContainer {
  //RenderingContext of this.canvasElement
  protected renderingContext!: RenderingContext | null;
  private barChartConfigOptions: BasicChartConfigOption;
  constructor(
    containerDOM: HTMLElement,
    barChartConfigOptions: BasicChartConfigOption
  ) {
    super(containerDOM);
    this.barChartConfigOptions = barChartConfigOptions;
    // this.test1();
    // this.test2();
  }

  private getRenderingContext(renderingContextId: string) {
    //do something: If it's necessary to constrain user's input values.
    //default context 2B "2d".
    this.renderingContext = this.canvasElement.getContext(renderingContextId);
    return this.renderingContext;
  }

  private getTitleTextInstance() {}

  private useBarChartLayoutEngine() {
    const ctx = this.getRenderingContext("2d") as CanvasRenderingContext2D;

    return {
      title_position: {},
    };
  }

  private test3() {
    const ctx = this.getRenderingContext("2d") as CanvasRenderingContext2D;
    const titleText = new Chart_Text_2D(
      ctx,
      //do something about maybe undefined.
      this.barChartConfigOptions.title_configOptions!.fontConfigOptions
    );
    const titleSizeInfo = titleText.getFontSize();
  }

  private test1() {
    const ctx = this.getRenderingContext("2d") as CanvasRenderingContext2D;
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
        x_coordinate: this.canvasSizeInfo.width,
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
        y_coordinate: this.canvasSizeInfo.height,
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
        x_coordinate: this.canvasSizeInfo.width,
        y_coordinate: this.canvasSizeInfo.height,
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
        font_size: 30,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: this.canvasSizeInfo.width / 2,
        y_coordinate: this.canvasSizeInfo.height / 2,
        textBaseLine: "middle",
        textAlign: "center",
        rotate_radians: (Math.PI * 90) / 180,
      }
    );
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 30,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: this.canvasSizeInfo.width,
        y_coordinate: this.canvasSizeInfo.height / 2,
        textBaseLine: "top",
        textAlign: "center",
        rotate_radians: (Math.PI * 90) / 180,
      }
    );
    new Chart_Text_2D(
      ctx,
      {
        font_weight: "bold",
        fillText_color: "#D9ACF5",
        strokeText_color: "#AAE3E2",
        font_family: "Arial",
        font_size: 30,
        message: "Hello, world! 你好，世界！",
      },
      {
        x_coordinate: 0,
        y_coordinate: this.canvasSizeInfo.height / 2,
        textBaseLine: "top",
        textAlign: "center",
        rotate_radians: -Math.PI / 2,
      }
    );
  }
}
