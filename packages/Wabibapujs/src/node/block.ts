import Node from "./node";
// import Attr from "../attribute/block";
import BlockAttr from "../attribute/block";
import { BlockAttris, BlockOptions } from "../attribute/types";

export default class Block extends Node {
  //Will be used by [Node] Node class.
  static Attr = BlockAttr;

  constructor(attris?: BlockAttris) {
    if (!attris) attris = {};
    super(attris);
  }

  //The writer's writing thought is from outside to inside, from top to bottom.
  //Target borderWidth contains two corresponding border?
  //What's the differ between borderSize and offsetSize?
  //Content + Padding + BorderWidth.
  get borderSize() {
    const { borderWidth } = this.attr() as BlockOptions;
    const [clientWidth, clientHeight] = this.clientSize;
    return [clientWidth + borderWidth * 2, clientHeight + borderWidth * 2];
    // return [clientWidth + borderWidth, clientHeight + borderWidth];
  }

  //content + padding.
  get clientSize() {
    const { paddingTop, paddingBottom, paddingLeft, paddingRight } =
      this.attr() as BlockOptions;
    const [width, height] = this.contentSize;
    return [
      paddingLeft + width + paddingRight,
      paddingTop + height + paddingBottom,
    ];
  }

  get contentSize(): [width: number, height: number] {
    let {
      width,
      height,
      boxSizing,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      borderWidth,
    } = this.attr() as BlockOptions;
    if (boxSizing === "border-box") {
      const bw = 2 * borderWidth;
      width -= bw + paddingLeft + paddingRight;
      height -= bw + paddingTop + paddingBottom;
      width = Math.max(0, width);
    }
    return [width, height];
  }

  get hasBorder() {
    const { borderWidth } = this.attr() as BlockOptions;
    return borderWidth > 0;
  }

  get isVisible() {
    const [width, height] = this.borderSize;
    return width > 0 && height > 0;
  }
}

// console.log(new Block({ paddingBottom: 80, id: "zzx" }).attr());
// console.log(new Block({ paddingBottom: 80, id: "zzx" }).contentSize);
// const [width, height] = new Block().contentSize;
// console.log(width, height);
// console.log(new Block({ width: 10, height: 10, borderWidth: 20 }).borderSize);

//@ts-ignore
// console.log(new Block.Attr());
