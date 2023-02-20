import { TargetEvents } from "../node/scene";

export default class Event {
  private _originalEvent: { type: TargetEvents; [key: string]: any };
  private _type: any | undefined;
  private _bubbles: boolean;
  private _detail: any;
  private cancelBubble: boolean;
  constructor(originalEvent: TargetEvents, options?: { bubbles?: boolean });
  constructor(
    originalEvent: { type: TargetEvents; [key: string]: any },
    options?: { bubbles?: boolean }
  );
  constructor(
    originalEvent: TargetEvents | { type: TargetEvents; [key: string]: any },
    //The object is destructured with default values, so if the second argument is not provided or does not have a bubbles property, it will default to null.
    options?: { bubbles?: boolean }
  ) {
    options ??= {};
    if (typeof originalEvent === "string") {
      this._type = originalEvent;
      this._bubbles = !!options.bubbles;
    } else {
      this._type = originalEvent.type;
      this._originalEvent = originalEvent;
      // this._bubbles = options.bubbles;
    }
    if (!this._type) throw new TypeError("Invalid event type.");
    this.cancelBubble = false;
  }

  setOriginalEvent(originalEvent: any) {
    this._originalEvent = originalEvent;
  }

  get originalEvent() {
    return this._originalEvent;
  }

  get type() {
    return this._type;
  }

  get bubbles() {
    return this._bubbles;
  }

  get detail() {
    return this._detail;
  }

  stopPropagation() {
    this.cancelBubble = true;
  }
}

// console.log(new Event());
