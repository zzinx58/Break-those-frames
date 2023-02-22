export type NativeEvents = keyof WindowEventMap;
export type CustomDefaultEvents =
  | keyof {
      mousewheel: WheelEvent;
    }
  | "tap"
  | "longpress";
export type TargetEvents = NativeEvents | CustomDefaultEvents;
function delegateEvents(scene) {
  const targetEvents: Array<TargetEvents> = [
    "mousedown",
    "mouseup",
    "mousemove",
    "wheel",
    "touchstart",
    "touchend",
    "touchmove",
    "touchcancel",
    "click",
    "dblclick",
    "mousewheel",
    "contextmenu",
  ];
}
