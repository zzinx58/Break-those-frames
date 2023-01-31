export { Chart_Text_2D };
type FontBasicConfigOptions = {
  font_size: number;
  font_weight?: string;
  font_family: string;
  message: string;
};
type FillTextConfigOption = {
  fillText_color?: string;
} & FontBasicConfigOptions;
type StrokeTextConfigOption = {
  strokeText_color?: string;
} & FontBasicConfigOptions;
interface BasicFontOptionReturnType {
  ctx: CanvasRenderingContext2D;
  positionOptions: Position_DrawItemOptions;
}
type Position_DrawItemOptions = {
  x_coordinate: number;
  y_coordinate: number;
  rotate_radians?: number;
  textAlign?: "left" | "right" | "center" | "start" | "end";
  textBaseLine?:
    | "top"
    | "hanging"
    | "middle"
    | "alphabetic"
    | "ideographic"
    | "bottom";
};
type FontConfigOptions = FillTextConfigOption & StrokeTextConfigOption;

class Chart_Text_2D {
  private fontConfigOptions: FontConfigOptions;
  private canvasRendingContext2D: CanvasRenderingContext2D;
  private position_drawItemOptions: Position_DrawItemOptions;
  constructor(
    canvasRendingContext2D: CanvasRenderingContext2D,
    fontConfigOptions: FontConfigOptions,
    position_drawItemOptions: Position_DrawItemOptions
  ) {
    this.fontConfigOptions = fontConfigOptions;
    this.canvasRendingContext2D = canvasRendingContext2D;
    this.position_drawItemOptions = position_drawItemOptions;
    // this.test();
    this.main_drawText();
  }

  private main_drawText() {
    this.drawFillText();
    this.drawStrokeText();
  }

  private getFontOptions(fontType: "FillText"): {
    fontConfigOptions: FillTextConfigOption;
  } & BasicFontOptionReturnType;
  private getFontOptions(fontType: "StrokeText"): {
    fontConfigOptions: StrokeTextConfigOption;
  } & BasicFontOptionReturnType;
  private getFontOptions(fontType: any): any {
    return {
      ctx: this.canvasRendingContext2D,
      positionOptions: this.position_drawItemOptions,
      fontConfigOptions: this.fontConfigOptions,
    };
  }

  private getFontSize(str: string) {
    let fontMetrics = this.canvasRendingContext2D.measureText(str);
    return {
      actualFontHeight:
        fontMetrics.actualBoundingBoxAscent +
        fontMetrics.actualBoundingBoxDescent,
      fontHeight:
        fontMetrics.fontBoundingBoxAscent + fontMetrics.fontBoundingBoxDescent,
      fontWidth: fontMetrics.width,
    };
  }

  private drawStrokeText() {
    const { ctx, fontConfigOptions, positionOptions } =
      this.getFontOptions("StrokeText");
    ctx.save();
    ctx.strokeStyle = fontConfigOptions.strokeText_color ?? "#fff";
    //Canvas's font attr must contain 'size' & 'family'.
    //And the 'style', 'variant', 'weight' must be in the front of the 'size'.
    //The 'family' must be specified at the end position.
    ctx.font = `${fontConfigOptions.font_weight ?? ""} ${
      fontConfigOptions.font_size
    }px ${fontConfigOptions.font_family}`;
    ctx.textAlign = positionOptions.textAlign ?? "start";
    ctx.textBaseline = positionOptions.textBaseLine ?? "alphabetic";
    if (positionOptions.rotate_radians) {
      ctx.translate(positionOptions.x_coordinate, positionOptions.y_coordinate);
      ctx.rotate(positionOptions.rotate_radians);
      ctx.strokeText(fontConfigOptions.message, 0, 0);
    } else {
      ctx.strokeText(
        // `(${positionOptions.x_coordinate}, ${positionOptions.y_coordinate})`,
        fontConfigOptions.message,
        positionOptions.x_coordinate,
        positionOptions.y_coordinate
      );
    }
    ctx.restore();
  }

  private drawFillText() {
    const { ctx, fontConfigOptions, positionOptions } =
      this.getFontOptions("FillText");
    ctx.save();
    ctx.fillStyle = fontConfigOptions.fillText_color ?? "#fff";
    ctx.font = `${fontConfigOptions.font_weight ?? ""} ${
      fontConfigOptions.font_size
    }px ${fontConfigOptions.font_family}`;
    ctx.textAlign = positionOptions.textAlign ?? "start";
    ctx.textBaseline = positionOptions.textBaseLine ?? "alphabetic";
    if (positionOptions.rotate_radians) {
      ctx.translate(positionOptions.x_coordinate, positionOptions.y_coordinate);
      ctx.rotate(positionOptions.rotate_radians);
      ctx.fillText(fontConfigOptions.message, 0, 0);
    } else {
      ctx.fillText(
        // `(${positionOptions.x_coordinate}, ${positionOptions.y_coordinate})`,
        fontConfigOptions.message,
        positionOptions.x_coordinate,
        positionOptions.y_coordinate
      );
    }
    ctx.restore();
  }

  private test() {
    this.position_drawItemOptions = { x_coordinate: 0, y_coordinate: 100 };
    this.drawStrokeText();
    this.position_drawItemOptions = { x_coordinate: 0, y_coordinate: 200 };
    this.drawFillText();
    this.position_drawItemOptions = { x_coordinate: 0, y_coordinate: 300 };
    this.drawStrokeText();
    this.drawFillText();
    this.position_drawItemOptions = {
      x_coordinate: 10,
      y_coordinate: 300,
      textBaseLine: "top",
    };
    this.drawStrokeText();
    this.drawFillText();
    this.position_drawItemOptions = {
      x_coordinate: 500,
      y_coordinate: 400,
      rotate_radians: (Math.PI * 90) / 180,
      textAlign: "center",
    };
    this.drawStrokeText();
    this.drawFillText();
    for (let i = 1; i < 5; i++) {
      this.position_drawItemOptions = {
        x_coordinate: 0,
        y_coordinate: 500,
        rotate_radians: (15 * i * Math.PI) / 180,
      };
      this.drawStrokeText();
      this.drawFillText();
    }
  }
}
