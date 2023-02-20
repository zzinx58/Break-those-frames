import { LabelOptions } from "./types/index";
import { NodeSubjectType, UserInputAttri } from "./node";
import Block from "./block";

const labelDefaultConst: LabelOptions = {
  text: "",
  fontSize: 16,
  //The browser will try to use the first font in the list that it can find and supports, when the first one is not availabel or not supported, the browser will fall back to the next font in the list.
  fontFamily: "Helvetica,Arial,sans-serif",
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  fontStretch: "normal",
  lineHeight: "",
  textAlign: "start",
  strokeColor: undefined,
  strokeWidth: 1,
  fillColor: undefined,
  textBaseLine: "alphabetic",
};

export class Label extends Block {
  constructor() {
    super();
    this.setDefault(labelDefaultConst);
  }

  set text(value: UserInputAttri<LabelOptions, "text">) {
    this.setAttributes("text", value);
  }

  get text() {
    return this.getAttributes("text");
  }

  set fontSize(value: UserInputAttri<LabelOptions, "fontSize">) {
    this.setAttributes("fontSize", value);
  }

  get fontSize() {
    return this.getAttributes("fontSize");
  }

  set fontFamily(value: UserInputAttri<LabelOptions, "fontFamily">) {
    this.setAttributes("fontFamily", value);
  }

  get fontFamily() {
    return this.getAttributes("fontFamily");
  }

  set fontStyle(value: UserInputAttri<LabelOptions, "fontStyle">) {
    this.setAttributes("fontStyle", value);
  }

  get fontStyle() {
    return this.getAttributes("fontStyle");
  }

  set fontVariant(value: UserInputAttri<LabelOptions, "fontVariant">) {
    this.setAttributes("fontVariant", value);
  }

  get fontVariant() {
    return this.getAttributes("fontVariant");
  }

  set fontWeight(value: UserInputAttri<LabelOptions, "fontWeight">) {
    this.setAttributes("fontWeight", value);
  }

  get fontWeight() {
    return this.getAttributes("fontWeight");
  }

  set fontStretch(value: UserInputAttri<LabelOptions, "fontStretch">) {
    this.setAttributes("fontStretch", value);
  }

  get fontStretch() {
    return this.getAttributes("fontStretch");
  }

  set lineHeight(value: UserInputAttri<LabelOptions, "lineHeight">) {
    this.setAttributes("lineHeight", value);
  }

  get lineHeight() {
    return this.getAttributes("lineHeight");
  }

  set strokeColor(value: UserInputAttri<LabelOptions, "strokeColor">) {
    this.setAttributes("strokeColor", value);
  }

  get strokeColor() {
    return this.getAttributes("strokeColor");
  }

  set strokeWidth(value: UserInputAttri<LabelOptions, "strokeWidth">) {
    this.setAttributes("strokeWidth", value);
  }

  get strokeWidth() {
    return this.getAttributes("strokeWidth");
  }

  set fillColor(value: UserInputAttri<LabelOptions, "fillColor">) {
    this.setAttributes("fillColor", value);
  }

  get fillColor() {
    return this.getAttributes("fillColor");
  }

  set textAlign(value: UserInputAttri<LabelOptions, "textAlign">) {
    this.setAttributes("textAlign", value);
  }

  get textAlign() {
    return this.getAttributes("textAlign");
  }

  set textBaseLine(value: UserInputAttri<LabelOptions, "textBaseLine">) {
    this.setAttributes("textBaseLine", value);
  }

  get textBaseLine() {
    return this.getAttributes("textBaseLine");
  }
}

console.log(new Label());
