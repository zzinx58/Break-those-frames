export { Chart_Text_2D };
export type { FontConfigOptions, Position_DrawTextOptions };
type FontBasicConfigOptions = {
  font_size?: number;
  font_weight?: string;
  font_family?: string;
};
type FillTextConfigOption = {
  //For RendingEngine use.
  fillText_color?: string;
} & FontBasicConfigOptions;
type StrokeTextConfigOption = {
  //For RendingEngine use.
  strokeText_color?: string;
} & FontBasicConfigOptions;
interface BasicFontOptionReturnType {
  ctx: CanvasRenderingContext2D;
  positionOptions: Position_DrawTextOptions;
}
type Position_DrawTextOptions = {
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
  private canvasRendingContext2D: CanvasRenderingContext2D;
  private message: string;
  private fontConfigOptions: FontConfigOptions;
  //Provide position config ability to LayoutEngine.
  public position_drawItemOptions: Position_DrawTextOptions;
  constructor(
    canvasRendingContext2D: CanvasRenderingContext2D,
    message: string,
    fontConfigOptions: FontConfigOptions,
    position_drawItemOptions?: Position_DrawTextOptions
  ) {
    this.canvasRendingContext2D = canvasRendingContext2D;
    this.message = message;
    this.fontConfigOptions = fontConfigOptions;
    this.position_drawItemOptions = position_drawItemOptions ?? {
      x_coordinate: 0,
      y_coordinate: 0,
    };
    // this.test();
    this.main_drawText();
  }

  private main_drawText() {
    this.drawFillText();
    this.drawStrokeText();
  }

  private getFontOptions(fontType: "FillText"): BasicFontOptionReturnType & {
    fontConfigOptions: FillTextConfigOption;
  };
  private getFontOptions(fontType: "StrokeText"): BasicFontOptionReturnType & {
    fontConfigOptions: StrokeTextConfigOption;
  };
  private getFontOptions(fontType: any): any {
    return {
      ctx: this.canvasRendingContext2D,
      positionOptions: this.position_drawItemOptions,
      fontConfigOptions: this.fontConfigOptions,
    };
  }

  //Provide Text size info to LayoutEngine for calc use.
  //It's size contains it's weight? This might be a bug.
  public getFontSize() {
    let fontMetrics = this.canvasRendingContext2D.measureText(this.message);
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
      fontConfigOptions.font_size ?? 10
    }px ${fontConfigOptions.font_family ?? "sans-serif"}`;
    ctx.textAlign = positionOptions.textAlign ?? "start";
    ctx.textBaseline = positionOptions.textBaseLine ?? "alphabetic";
    if (positionOptions.rotate_radians) {
      ctx.translate(positionOptions.x_coordinate, positionOptions.y_coordinate);
      ctx.rotate(positionOptions.rotate_radians);
      ctx.strokeText(this.message, 0, 0);
    } else {
      ctx.strokeText(
        // `(${positionOptions.x_coordinate}, ${positionOptions.y_coordinate})`,
        this.message,
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
      fontConfigOptions.font_size ?? 10
    }px ${fontConfigOptions.font_family ?? "sans-serif"}`;
    ctx.textAlign = positionOptions.textAlign ?? "start";
    ctx.textBaseline = positionOptions.textBaseLine ?? "alphabetic";
    if (positionOptions.rotate_radians) {
      ctx.translate(positionOptions.x_coordinate, positionOptions.y_coordinate);
      ctx.rotate(positionOptions.rotate_radians);
      ctx.fillText(this.message, 0, 0);
    } else {
      ctx.fillText(
        // `(${positionOptions.x_coordinate}, ${positionOptions.y_coordinate})`,
        this.message,
        positionOptions.x_coordinate,
        positionOptions.y_coordinate
      );
    }
    ctx.restore();
  }
}
