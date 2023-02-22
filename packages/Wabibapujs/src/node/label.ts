import { LabelOptions } from "./../attribute/types/index";
import Block from "./block";
import LabelAttr from "../attribute/label";
import { BlockOptions, NodeAttris } from "../attribute/types";
import { UserInputAttri } from "../attribute/node";

export default class Label extends Block {
  static Attr = LabelAttr;
  constructor(attris?: NodeAttris | string) {
    if (typeof attris === "string") attris = { text: attris };
    super(attris);
  }

  /* overwrite */
  get contentSize(): [width: number, height: number] {
    let [w, h] = super.contentSize;
    const { width, height } = this.attr() as BlockOptions;
    return [w, h];
  }

  get text() {
    const { text } = this.attr() as LabelOptions;
    return text;
  }

  set text(value: UserInputAttri<LabelOptions, "text">) {
    this.setAttribute("text", value);
  }
}
