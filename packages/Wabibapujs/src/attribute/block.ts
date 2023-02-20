import { BlockOptions } from "./types/index";
import Node, { NodeSubjectType, UserInputAttri } from "./node";

const blockDefaultConst: BlockOptions = {
  anchorX: 0,
  anchorY: 0,
  width: 0,
  height: 0,
  borderWidth: 0,
  borderColor: "rgba(0,0,0,1)",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  boxSizing: "content-box",
  bgColor: "rgba(0,0,0,0)",
  clipPath: undefined,
};

export default class Block extends Node {
  constructor() {
    super();
    this.setDefault(blockDefaultConst);
  }

  set anchorX(value: UserInputAttri<BlockOptions, "anchorX">) {
    this.setAttributes("anchorX", value);
  }

  get anchorX() {
    return this.getAttributes("anchorX");
  }

  set anchorY(value: UserInputAttri<BlockOptions, "anchorY">) {
    this.setAttributes("anchorY", value);
  }

  get anchorY() {
    return this.getAttributes("anchorY");
  }

  set anchor(value: [anchorX: number, anchorY: number]) {
    this.anchorX = value[0];
    this.anchorY = value[1];
  }

  get anchor() {
    return [this.anchorX, this.anchorY];
  }

  set width(value: UserInputAttri<BlockOptions, "width">) {
    this.setAttributes("width", value);
  }

  get width() {
    return this.getAttributes("width");
  }

  set height(value: UserInputAttri<BlockOptions, "height">) {
    this.setAttributes("height", value);
  }

  get height() {
    return this.getAttributes("height");
  }

  set size(value: [width: number, height: number]) {
    this.width = value[0];
    this.height = value[1];
  }

  get size() {
    return [this.width, this.height];
  }

  set borderWidth(value: UserInputAttri<BlockOptions, "borderWidth">) {
    this.setAttributes("borderWidth", value);
  }

  get borderWidth() {
    return this.getAttributes("borderWidth");
  }

  set borderColor(value: UserInputAttri<BlockOptions, "borderColor">) {
    this.setAttributes("borderColor", value);
  }

  get borderColor() {
    return this.getAttributes("borderColor");
  }

  set borderTopLeftRadius(
    value: UserInputAttri<BlockOptions, "borderTopLeftRadius">
  ) {
    this.setAttributes("borderTopLeftRadius", value);
  }

  get borderTopLeftRadius() {
    return this.getAttributes("borderTopLeftRadius");
  }

  set borderTopRightRadius(
    value: UserInputAttri<BlockOptions, "borderTopRightRadius">
  ) {
    this.setAttributes("borderTopRightRadius", value);
  }

  get borderTopRightRadius() {
    return this.getAttributes("borderTopRightRadius");
  }

  set borderBottomLeftRadius(
    value: UserInputAttri<BlockOptions, "borderBottomLeftRadius">
  ) {
    this.setAttributes("borderBottomLeftRadius", value);
  }

  get borderBottomLeftRadius() {
    return this.getAttributes("borderBottomLeftRadius");
  }

  set borderBottomRightRadius(
    value: UserInputAttri<BlockOptions, "borderBottomRightRadius">
  ) {
    this.setAttributes("borderBottomRightRadius", value);
  }

  get borderBottomRightRadius() {
    return this.getAttributes("borderBottomRightRadius");
  }

  set borderRadius(
    value:
      | [all_corners: number]
      | [topLeft_And_bottomRight: number, topRight_And_bottomLeft: number]
      | [topLeft: number, topRight_And_bottomLeft: number, bottomRight: number]
      | [
          topLeft: number,
          topRight: number,
          bottomLeft: number,
          bottomRight: number
        ]
  ) {
    const waitForHandleInOrder = [
      this.borderTopLeftRadius,
      this.borderTopRightRadius,
      this.borderBottomLeftRadius,
      this.borderBottomRightRadius,
    ];
    switch (value.length) {
      case 1:
        waitForHandleInOrder.forEach((item) => (item = value[0]));
        break;
      case 2:
        waitForHandleInOrder[0] = waitForHandleInOrder[3] = value[0];
        waitForHandleInOrder[1] = waitForHandleInOrder[2] = value[1];
        break;
      case 3:
        waitForHandleInOrder[0] = value[0];
        waitForHandleInOrder[1] = waitForHandleInOrder[2] = value[1];
        waitForHandleInOrder[3] = value[2];
        break;
      case 4:
        waitForHandleInOrder.forEach((item, index) => (item = value[index]));
        break;
    }
  }

  get borderRadius() {
    return [
      this.borderTopLeftRadius,
      this.borderTopRightRadius,
      this.borderBottomLeftRadius,
      this.borderBottomRightRadius,
    ];
  }

  set paddingTop(value: UserInputAttri<BlockOptions, "paddingTop">) {
    this.setAttributes("paddingTop", value);
  }

  get paddingTop() {
    return this.getAttributes("paddingTop");
  }

  set paddingRight(value: UserInputAttri<BlockOptions, "paddingRight">) {
    this.setAttributes("paddingRight", value);
  }

  get paddingRight() {
    return this.getAttributes("paddingRight");
  }

  set paddingBottom(value: UserInputAttri<BlockOptions, "paddingBottom">) {
    this.setAttributes("paddingBottom", value);
  }

  get paddingBottom() {
    return this.getAttributes("paddingBottom");
  }

  set paddingLeft(value: UserInputAttri<BlockOptions, "paddingLeft">) {
    this.setAttributes("paddingLeft", value);
  }

  get paddingLeft() {
    return this.getAttributes("paddingLeft");
  }

  set padding(
    value: [pTop: number, pRight: number, pBottom: number, pLeft: number]
  ) {
    const waitForHandleInOrder = [
      this.paddingTop,
      this.paddingRight,
      this.paddingBottom,
      this.paddingLeft,
    ];
    waitForHandleInOrder.forEach((item, index) => {
      item = value[index];
    });
  }

  get padding() {
    return [
      this.paddingTop,
      this.paddingRight,
      this.paddingBottom,
      this.paddingLeft,
    ];
  }

  set boxSizing(value: UserInputAttri<BlockOptions, "boxSizing">) {
    this.setAttributes("boxSizing", value);
  }

  get boxSizing() {
    return this.getAttributes("boxSizing");
  }

  set bgColor(value: UserInputAttri<BlockOptions, "bgColor">) {
    this.setAttributes("bgColor", value);
  }

  get bgColor() {
    return this.bgColor;
  }

  set clipPath(value: UserInputAttri<BlockOptions, "clipPath">) {
    this.setAttributes("clipPath", value);
  }

  get clipPath() {
    return this.getAttributes("clipPath");
  }
}

// console.log(new Block({ onPropertyChange(key, newValue, oldValue) {} }));
