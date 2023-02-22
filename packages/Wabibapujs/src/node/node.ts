//This tells the TypeScript compiler to include the DOM typings, which should include WindowEventMap.
/// <reference lib="dom" />
import { UserInputAttri } from "./../attribute/node";
// import Attr from "../attribute/node";
import NodeAttr from "../attribute/node";
// import BlockAttr from "../attribute/block";
// import LabelAttr from "../attribute/label";
// import Block from "./block";
// import Label from "./label"
import { BaseNodeAttributes, NodeAttris } from "../attribute/types";
import { TargetEvents } from "./scene";

type EventOptions = {
  /**
   * capture: boolean
   * A Boolean indicating that events of this type will be dispatched to the registered listener
   * before being dispatched to any EventTarget beneath it in the DOM tree.
   * Defaults to false.
   */
  capture: boolean;
  /**
   * once?: boolean
   * A Boolean indicating that the listener should be invoked at most once after being added.
   * If true, the listener would be automatically removed when invoked.
   * Defaults to false.
   */
  once?: boolean;
};

export type EventListenersManager = {
  [type in TargetEvents]?: Array<{ listener: Function; once?: boolean }>;
};

export default class Node {
  //When setting a class as another class's static property, only the properties with setter/getter in before one will be available.
  static Attr = NodeAttr;
  protected _attributes: NodeAttr;
  // protected _attributes: NodeAttr;
  private _parent:
    | undefined
    | { opacity: number; forceUpdate: Function; layer: any };
  private _eventListeners: EventListenersManager;
  private _captureEventListeners: EventListenersManager;
  constructor(attris?: NodeAttris) {
    if (!attris) attris = {};
    this._eventListeners = {};
    this._captureEventListeners = {};
    //WTF...? What's the differ between this and that?. Seems like no differs.
    // this._attributes = new Attr();
    //Object.assign() will not call the setter method directly, only if the this.attributes object has properties with setters defined in another class, then setting the values of these propertires through Object.assign() will indirectly call the setter functions. Which we did at the following code.
    //Amazing!....
    // this._attributes = new (this.constructor as typeof Node).Attr();
    //@ts-ignore
    this._attributes = new this.constructor.Attr();
    this._attributes.setSubject(this);
    Object.assign(this._attributes, attris);
  }

  attr(): NodeAttris;
  attr<Key extends keyof NodeAttris, Value extends NodeAttris[Key]>(
    key: Key
  ): Value;
  attr<Args extends NodeAttris>(args?: Args): Node;
  attr<Key extends keyof NodeAttris, Value extends NodeAttris[Key]>(
    key: Key,
    value: Value
  ): Node;
  attr<
    Args extends keyof NodeAttris | NodeAttris,
    Value extends NodeAttris[keyof NodeAttris]
  >(args?: Args, value?: Value) {
    if (typeof args === "object") {
      // let keys = Object.keys(args);
      let keys = Object.keys(args) as [keyof NodeAttris];
      let values = Object.values(args);
      /*? what for?
        if(typeof value === 'function') {
        value = value(this.attr(key));
      }*/
      keys.map((key, index) => {
        this.setAttribute(key, values[index]);
      });
      return this;
    }
    if (args && value) {
      this.setAttribute(args, value);
      return this;
    }
    if (args && typeof args === "string") {
      // let result = this.getAttribute(args) as Value;
      return this.getAttribute(args);
    }
    if (!args) return this._attributes.attributes;
  }

  protected getAttribute<Key extends keyof NodeAttris>(key: Key) {
    // protected getAtrributes<Key extends keyof NodeAttris>(key: Key) {
    return this._attributes.attributes[key];
  }

  /*
  I think that This part is not right. I will provide a public setter from Attr class.
  //SetAttribute will have a little different than getAttribute.
  public setAttribute<Key extends keyof NodeAttrVar, Value extends Attr[Key]>(
    // private setAttribute<Key extends keyof Attr, Value extends Attr[Key]>(
    key: Key,
    value: Value
  ) {
    this._attributes[key] = value;
  } */

  protected setAttribute<
    Key extends keyof NodeAttris,
    Value extends NodeAttris[Key]
  >(key: Key, value: Value) {
    this._attributes.PSetAttributes(key, value);
  }

  onPropertyChange<Key extends keyof NodeAttris, Value extends NodeAttris[Key]>(
    key: Key,
    newValue: Value,
    oldValue: Value
  ) {
    if (key !== "id" && key !== "name" && key !== "pointerEvents") {
      this.forceUpdate();
    }
  }

  get id() {
    return this._attributes.id;
  }

  set id(value: UserInputAttri<BaseNodeAttributes, "id">) {
    this._attributes.id = value;
  }

  get name() {
    return this._attributes.name;
  }

  set name(value: UserInputAttri<BaseNodeAttributes, "name">) {
    this._attributes.name = value;
  }

  get opacity() {
    let opacity = this._attributes.opacity;
    if (this._parent && this._parent.opacity != null) {
      opacity *= this._parent.opacity;
    }
    return opacity;
  }

  connect(parent: any) {
    Object.defineProperty(this, "parent", {
      value: parent,
      writable: false,
      configurable: true,
    });
    // this.setResolution
    // this.forceUpdate
    // this.dispathEvent({type: "append", detail: {parent}});
  }

  disconnect() {
    if (this._parent) {
      delete this._parent;
      // this.dispatchEvent({type: "remove", detail: {parent}});
      // parent && this.parent.forceUpdate()
    }
  }

  forceUpdate() {
    this._parent && this._parent.forceUpdate();
  }

  get layer() {
    if (this._parent) {
      return this._parent.layer;
    }
    return null;
  }

  get parentNode() {
    return this._parent;
  }

  addEventListener(
    type: TargetEvents,
    listener: Function,
    capture?: boolean
  ): Node;
  addEventListener(
    type: TargetEvents,
    listener: Function,
    options?: EventOptions
  ): Node;
  addEventListener(
    type: TargetEvents,
    listener: Function,
    options?: boolean | EventOptions
  ) {
    //Compatibility handle.
    if (type === "mousewheel") type = "wheel";
    if (typeof options === "undefined")
      options = { capture: false, once: false };
    if (typeof options === "boolean") options = { capture: options };
    const { capture, once } = options;
    const eventListeners = capture
      ? "_captureEventListeners"
      : "_eventListeners";
    this[eventListeners][type] ??= [];
    this[eventListeners][type]!.push({ listener, once });
    return this;
  }

  removeAllListeners(type: TargetEvents, capture: boolean): Node;
  removeAllListeners(type: TargetEvents, options: boolean | EventOptions) {
    if (typeof options === "boolean") options = { capture: options };
    const capture = options.capture;
    const eventListeners = capture
      ? "_captureEventListeners"
      : "_eventListeners";
    if (this[eventListeners][type]) {
      this[eventListeners][type] = [];
    }
    return this;
  }

  getListeners(type: TargetEvents, capture: boolean) {
    const eventListeners = capture
      ? "_captureEventListeners"
      : "_eventListeners";
    return [...(this[eventListeners][type] || [])];
  }

  dispatchEvent(event: any) {}

  dispatchPointerEvent(event: any) {}
}

// console.log(new Node().attr());
// console.log(new Node().attr("scale"));
// console.log(new Node().attr({ originalX: 90 }));
// console.log(new Node().attr("originalX", 180));
// console.log(new Node());
// const test1 = new Node({ originalX: 270, id: "zzx" });
// test1.setAttribute("");
// console.log(test1);
// console.log(new Node({ originalX: 270, id: "zzx" })._attributes.attributes);
// console.log(new Node({ originalX: 270, id: "zzx" }).getAtrributes("skew"));
// console.log(
//   new Node().addEventListener(
//     "wheel",
//     () => {
//       console.log("123");
//     },
//     true
//   )
// );
// const parent = 123;
// console.log({ parent });
