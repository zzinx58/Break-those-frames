export { CanvasContainer };
class CanvasContainer {
  //CanvasContainer's actual bearing element
  private containerDOM: HTMLElement;
  //CanvasContainer's Info realte to the viewport
  private containerInfo_RelateToViewport: DOMRect;
  //CanvasContainer's Content：CanvasElement
  protected canvasElement: HTMLCanvasElement;
  protected canvasSizeInfo: { height: number; width: number };

  constructor(containerDOM: HTMLElement) {
    this.containerDOM = containerDOM;
    this.containerInfo_RelateToViewport =
      this.containerDOM.getBoundingClientRect();
    this.canvasElement = document.createElement("canvas");
    //The template of Vue.js is rendered on the server side, and the style works on the browser side. You cannot directly obtain the final style attribute in the code. You need to obtain the final style of the element through window.getComputedStyle (element).
    //Surprise. The getBoundingRect() could return the computed DOM size!?
    //The getBoundingClientRect() is more lighter than getComputedStyle(), and there is no need to type convert the value.
    this.initCanvas(this.canvasElement, this.containerInfo_RelateToViewport);
    this.containerDOM.appendChild(this.canvasElement);
  }

  //setup canvas
  private initCanvas(
    canvasElement: HTMLCanvasElement,
    containerSizeInfo: DOMRect
  ) {
    const { height, width } = containerSizeInfo;
    const { borderWidth } = window.getComputedStyle(this.containerDOM);
    //If there is any border in containerDOM.
    let canvasSizeInfo = {
      height: height - 2 * +borderWidth.replace("px", ""),
      width: width - 2 * +borderWidth.replace("px", ""),
    };
    canvasElement.width = canvasSizeInfo.width;
    canvasElement.height = canvasSizeInfo.height;
    this.canvasSizeInfo = canvasSizeInfo;
  }

  //TODO:For resize use.
  public render() {}
}

//Dont konw if this method is necessary.
//DOM: DocumentObjectModel
function calcMouseCoordinate_in_DOM(
  containerDOM: HTMLElement,
  e_mouseEvent: MouseEvent
) {
  // MouseEvent.clientX & .clientY provides the horizontal/vertical  coordinate within the application's viewport at which the event occurred
  // Element.getBoundingClientRect() returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  const DOMRect_of_canvasOutsideDiv = containerDOM.getBoundingClientRect();
  return {
    mouseFrom_x: e_mouseEvent.clientX - DOMRect_of_canvasOutsideDiv.left,
    mouseFrom_y: e_mouseEvent.clientY - DOMRect_of_canvasOutsideDiv.top,
  };
}
