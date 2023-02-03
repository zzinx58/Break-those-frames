import {
  Chart_Text_2D,
  FontConfigOptions,
  Position_DrawTextOptions,
} from "../index";
import { CanvasContainer } from "../../topClasses/Container";
type basicBarChartType = "vertical_B2T" | "horizontal_L2R";
type BarChartType = basicBarChartType | "horizontal_two-way_T2B";

type SpaceNameType =
  | "titleSpaceRect"
  | "SubtitleSpaceRect"
  | "toolTipsSpaceRect"
  | "ActualChartSpaceRect"
  | "x_coordinateLabelSpaceRect"
  | "y_coordinateLabelSpaceRect"
  | "ChartContentSpaceRect"
  | "LeftBottomIdleSpaceRect"
  | "RightBottomIdleSpaceRect";
type CustomizableTextType = {
  message: string;
  fontConfigOptions: FontConfigOptions;
  positionConfigOptions?: Position_DrawTextOptions;
};
type StaticTextType = {
  message: string;
  fontConfigOptions: FontConfigOptions;
  positionConfigOptions?: Position_DrawTextOptions;
};
//Maybe no need for it.
// type TipsLabelTextType = {
//   fontConfigOptions: FontConfigOptions;
//   tipsLabel_position?: "inside" | "outside";
// };
interface BasicBarChartConfigOption {
  //For RendingEngine use.
  bar_colors?: string[];
  //For LayoutEngine use.
  //First.
  chartPadding?: number;
  //Second.
  title_configOptions: CustomizableTextType;
  subTitle_configOptions?: CustomizableTextType;
  //Third.
  //For RendingEngine use.
  barChartType: BarChartType;
  coordinateLabel_configOptions?: StaticTextType;
  toolTips_configOptions?: CustomizableTextType;
  tipsLabel_configOptions?: StaticTextType;
  //Fourth.
  data: {
    [key: string]: number;
  };
  //others.
}

interface FontConfigSolvedBarChartConfigOption {
  //Second.
  title_configOptions: CustomizableTextType;
  subTitle_configOptions: CustomizableTextType;
  //Third.
  coordinateLabel_configOptions: StaticTextType;
  toolTips_configOptions: CustomizableTextType;
  //Fourth.
  tipsLabel_configOptions: StaticTextType;
  //others.
}
//Function's ReturnType
type TypeTool_GetReturnType<Func extends Function> = Func extends (
  ...args: any[]
) => infer ReturnType
  ? ReturnType
  : never;
//BarChartLayoutEngine have to return the spaceItemRect infos.
class BarChartLayoutEngine2D extends CanvasContainer {
  /*
    //CanvasContainer's variables
    //CanvasContainer's Info realte to the viewport
    protected containerInfo_RelateToViewport: DOMRect;
    //CanvasContainer's Content：CanvasElement
    protected canvasElement: HTMLCanvasElement;
    protected canvasSizeInfo: { height: number; width: number };
   */

  //Fot test use.
  public renderingContext: RenderingContext | null;
  //LayoutEngine's variables
  // protected renderingContext: RenderingContext | null;
  protected barChartConfigOption: BasicBarChartConfigOption;
  // protected barChartSpaceRectObj: typeof this.createCanvasItemRect;
  // protected solvedSpaceConfigObj:

  constructor(
    containerDOM: HTMLElement,
    barChartConfigOption: BasicBarChartConfigOption
  ) {
    super(containerDOM);
    this.renderingContext = this.canvasElement.getContext("2d");
    this.barChartConfigOption = barChartConfigOption;
  }

  private createCanvasItemRect<T extends string>(
    spaceNames: ReadonlyArray<T>
  ): { [K in T]: CanvasItemRect } {
    let template_of_CanvasItemRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    return spaceNames.reduce((result, name) => {
      result[name] = template_of_CanvasItemRect;
      return result;
    }, Object.create(null));
  }
  private createCanvasPointPositionType<T extends string>(
    spaceNames: ReadonlyArray<T>
  ): { [K in T]: CanvasPointPositionType } {
    let template_of_CanvasPointPosition = {
      x: 0,
      y: 0,
    };
    return spaceNames.reduce((result, name) => {
      result[name] = template_of_CanvasPointPosition;
      return result;
    }, Object.create(null));
  }

  public getConstNameArr() {
    const _a =
      this._AggregateOfLayoutEngineNeededObj()
        .mayNeededPointsNameArr_default_public;
    const _b =
      this._AggregateOfLayoutEngineNeededObj()
        .mayNeededSpaceRectNameArr_default_public;
    return {
      spaceObjNameArr: _b,
      pointObjNameArr: _a,
    };
  }
  public solveConfig() {
    // private solveConfig() {
    //Could be impr using pipe.
    const solvedFontConfigObj = this.solveConfigOfFonts();
    const solvedSpaceConfigObj =
      this.solveConfigOfSpaceRectItems(solvedFontConfigObj);
    console.log(solvedSpaceConfigObj);
    return solvedSpaceConfigObj;
    //
    // Object.keys(solvedFontConfigObj).forEach((key) => {
    //   Object.assign(solvedFontConfigObj[key], solvedFontConfigObj[key]);
    // });
    // const finalBarChartConfigOptions = solvedFontConfigObj;
    // this.barChartConfigOption = {
    //   ...this.barChartConfigOption,
    //   ...finalBarChartConfigOptions,
    // };
  }

  private solveConfigOfFonts(): FontConfigSolvedBarChartConfigOption {
    const { title_configOptions, subTitle_configOptions } =
      this.barChartConfigOption;
    const {
      default_coordinateLabel_fontConfigOptions,
      default_tipsLabel_fontConfigOptions,
      default_title_fontConfigOptions,
      default_subTitle_fontConfigOptions,
      default_toolTips_fontConfigOptions,
    } = this._AggregateOfLayoutEngineNeededObj();
    //Use it if xxx.fontConfigOptions exist.
    title_configOptions.fontConfigOptions &&
      (default_title_fontConfigOptions.fontConfigOptions =
        title_configOptions.fontConfigOptions);
    //SubTitle is optional and belong to CustomizableTextType, so it's message field need to be check.
    subTitle_configOptions?.message &&
      (default_subTitle_fontConfigOptions.message =
        subTitle_configOptions.message);
    subTitle_configOptions?.fontConfigOptions &&
      (default_subTitle_fontConfigOptions.fontConfigOptions =
        subTitle_configOptions.fontConfigOptions);
    //Notice: Others's fontConfig were not for serve at present. Engine will use defaultConfig.
    const solvedConfigResult: FontConfigSolvedBarChartConfigOption = {
      title_configOptions: default_title_fontConfigOptions,
      subTitle_configOptions: default_subTitle_fontConfigOptions,
      toolTips_configOptions: default_toolTips_fontConfigOptions,
      coordinateLabel_configOptions: default_coordinateLabel_fontConfigOptions,
      tipsLabel_configOptions: default_tipsLabel_fontConfigOptions,
    };
    const result = { ...this.barChartConfigOption, ...solvedConfigResult };
    return result;
  }

  // private solveConfigOfSpaceRectItems(
  public solveConfigOfSpaceRectItems(
    solvedFontConfigObj: FontConfigSolvedBarChartConfigOption
  ) {
    const { subTitle_configOptions: user_subTitle_configOptions } =
      this.barChartConfigOption;
    const {
      title_configOptions,
      subTitle_configOptions,
      coordinateLabel_configOptions,
    } = solvedFontConfigObj;
    const {
      default_ChartPadding,
      mayNeededSpaceRectItemsObj_default,
      mayNeededCanvasPointsObj_default,
    } = this._AggregateOfLayoutEngineNeededObj();
    const chartPadding =
      this.barChartConfigOption.chartPadding ?? default_ChartPadding;
    const ctx = this.renderingContext as CanvasRenderingContext2D;
    //Title and SubTitle start at the same x_coordinate and are parallel, so theit width is determined by the longest one of them.
    const solvedTitleTextSize = new Chart_Text_2D(
      ctx,
      title_configOptions.message,
      title_configOptions.fontConfigOptions
    ).getFontSize();
    //Notice: SolveConfigOfFonts should only config the fontOptions, so when judging Customizable specItems exist or not other than titleSpecItem, you should via this.barChartConfigOptions instead of solvedFontConfigObj.
    const solvedSubTitleTextSize = new Chart_Text_2D(
      ctx,
      user_subTitle_configOptions ? subTitle_configOptions.message : "",
      subTitle_configOptions.fontConfigOptions
    ).getFontSize();
    const temp_TitleOrSubTitleFontWidth =
      solvedTitleTextSize.fontWidth > solvedSubTitleTextSize.fontWidth
        ? solvedTitleTextSize.fontWidth
        : solvedSubTitleTextSize.fontWidth;
    //All SpecRectItems are not configured by now and stays default with 0 values.
    mayNeededSpaceRectItemsObj_default.TitleSpaceRect = {
      x_coordinate: chartPadding,
      y_coordinate: chartPadding,
      width: temp_TitleOrSubTitleFontWidth,
      height: solvedTitleTextSize.fontHeight,
    };
    mayNeededSpaceRectItemsObj_default.SubTitleSpaceRect = {
      x_coordinate: chartPadding,
      y_coordinate:
        chartPadding + mayNeededSpaceRectItemsObj_default.TitleSpaceRect.height,
      width: temp_TitleOrSubTitleFontWidth,
      height: solvedSubTitleTextSize.fontHeight,
    };

    //Third process. Judging the BarChartType.
    //Init textItems.
    //Notice: The default text.message = "undefined".
    //Notice: The right y_coordinateLabel is not for serve at present.
    const coordinateLabelTextItem = new Chart_Text_2D(
      ctx,
      coordinateLabel_configOptions.message,
      coordinateLabel_configOptions.fontConfigOptions
    );
    const temp_titleAndSubTitleSpaceHeight =
      solvedSubTitleTextSize.fontHeight + solvedTitleTextSize.fontHeight;
    mayNeededSpaceRectItemsObj_default.Y_coordinateLabelSpaceRect = {
      x_coordinate: chartPadding,
      y_coordinate: temp_titleAndSubTitleSpaceHeight,
      width: coordinateLabelTextItem.getFontSize().fontWidth,
      height:
        this.canvasSizeInfo.height -
        temp_titleAndSubTitleSpaceHeight -
        coordinateLabelTextItem.getFontSize().fontHeight,
    };
    mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect = {
      x_coordinate:
        chartPadding +
        mayNeededSpaceRectItemsObj_default.Y_coordinateLabelSpaceRect.width,
      y_coordinate:
        mayNeededSpaceRectItemsObj_default.Y_coordinateLabelSpaceRect
          .y_coordinate,
      width:
        this.canvasSizeInfo.width -
        2 * chartPadding -
        mayNeededSpaceRectItemsObj_default.Y_coordinateLabelSpaceRect.width,
      height:
        mayNeededSpaceRectItemsObj_default.Y_coordinateLabelSpaceRect.height,
    };
    mayNeededSpaceRectItemsObj_default.X_coordinateLabelSpaceRect = {
      x_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.x_coordinate,
      y_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.y_coordinate +
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.height,
      height: coordinateLabelTextItem.getFontSize().fontHeight,
      width: mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.width,
    };

    //CanvasPointsObj
    mayNeededCanvasPointsObj_default.coordinate_leftUpperPoint = {
      x_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.x_coordinate,
      y_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.y_coordinate,
    };
    mayNeededCanvasPointsObj_default.coordinate_leftBottomPoint = {
      x_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.x_coordinate,
      y_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.y_coordinate +
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.height,
    };
    mayNeededCanvasPointsObj_default.coordinate_middleUpperPoint = {
      x_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.x_coordinate +
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.width / 2,
      y_coordinate:
        mayNeededSpaceRectItemsObj_default.ChartContentSpaceRect.y_coordinate,
    };
    mayNeededCanvasPointsObj_default.coordinate_middleBottomPoint = {
      x_coordinate:
        mayNeededCanvasPointsObj_default.coordinate_middleUpperPoint
          .x_coordinate,
      y_coordinate:
        mayNeededCanvasPointsObj_default.coordinate_leftBottomPoint
          .y_coordinate,
    };

    return {
      mayNeededSpaceRectItemsObj_default,
      mayNeededCanvasPointsObj_default,
    };
  }

  private _AggregateOfLayoutEngineNeededObj() {
    const mayNeededSpaceRectNameArr_default = [
      "TitleSpaceRect",
      "SubTitleSpaceRect",
      "ToolTipsSpaceRect",
      "ActualChartSpaceRect",
      "X_coordinateLabelSpaceRect",
      "Y_coordinateLabelSpaceRect",
      "ChartContentSpaceRect",
      "LeftBottomIdleSpaceRect",
      "RightBottomIdleSpaceRect",
    ] as const;
    const mayNeededPointsNameArr_default = [
      "coordinate_leftBottomPoint",
      "coordinate_leftUpperPoint",
      "coordinate_middleUpperPoint",
      "coordinate_middleBottomPoint",
    ] as const;
    const defaultFontConfigOptions: FontConfigOptions = {
      font_family: "Arial",
      fillText_color: "#fff",
      font_size: 10,
    };
    const default_title_fontConfigOptions: CustomizableTextType = {
      message: "undefined",
      fontConfigOptions: {
        font_size: 18,
        font_weight: "bold",
        font_family: "Arial",
        fillText_color: "#fff",
      },
    };
    const default_subTitle_fontConfigOptions: CustomizableTextType = {
      message: "undefined",
      fontConfigOptions: defaultFontConfigOptions,
    };
    const default_toolTips_fontConfigOptions: CustomizableTextType = {
      message: "undefined",
      fontConfigOptions: defaultFontConfigOptions,
    };
    const default_coordinateLabel_fontConfigOptions: StaticTextType = {
      message: "undefined",
      fontConfigOptions: defaultFontConfigOptions,
    };
    const default_tipsLabel_fontConfigOptions: StaticTextType = {
      message: "undefined",
      fontConfigOptions: defaultFontConfigOptions,
    };
    //Some RectItems is redundant, could be impr afterwards.
    const mayNeededSpaceRectItemsObj_default = this.createCanvasItemRect(
      mayNeededSpaceRectNameArr_default
    );
    //Init default point position.
    const mayNeededCanvasPointsObj_default = this.createCanvasPointPositionType(
      mayNeededPointsNameArr_default
    );
    const default_ChartPadding = 0;
    return {
      defaultFontConfigOptions,
      default_title_fontConfigOptions,
      default_subTitle_fontConfigOptions,
      default_toolTips_fontConfigOptions,
      default_coordinateLabel_fontConfigOptions,
      default_tipsLabel_fontConfigOptions,
      mayNeededSpaceRectItemsObj_default,
      mayNeededCanvasPointsObj_default,
      default_ChartPadding,
      mayNeededSpaceRectNameArr_default_public:
        mayNeededSpaceRectNameArr_default,
      mayNeededPointsNameArr_default_public: mayNeededPointsNameArr_default,
    };
  }
}
