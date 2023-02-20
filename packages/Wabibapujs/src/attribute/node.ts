import { compareValue } from "../utils/aboutAttributeValue";
import { BaseNodeAttributes, BlockOptions, LabelOptions } from "./types";

const nodeDefaultConst: BaseNodeAttributes = {
  id: "",
  name: "",
  className: "",
  originalX: 0,
  originalY: 0,
  transformOrigin: [0, 0],
  transformM: [1, 0, 0, 1, 0, 0],
  transformS: "",
  translate: [0, 0],
  rotate: 0,
  scale: [1, 1],
  skew: [0, 0],
  opacity: 1,
  pointerEvents: "visible",
  filter: "none",
  display: "",
};

function setTransform<
  T extends { rotate: number; scale: [x_HScal: number, y_VScal: number] }
>(attri: T, type: "scale", value: UserInputAttri<T, "scale">): void;
function setTransform<
  T extends { rotate: number; scale: [x_HScal: number, y_VScal: number] }
>(attri: T, type: "rotate", value: UserInputAttri<T, "rotate">): void;
function setTransform<
  T extends { rotate: number; scale: [x_HScal: number, y_VScal: number] }
>(attri: T, type: any, value: any): void {
  if (type === "rotate") value = (Math.PI * value) / 180;
  console.log(value);
}

export type NodeAttris = Partial<
  BaseNodeAttributes & BlockOptions & LabelOptions
  // & AnyAttris
>;

export type NodeReadOnlyProperty = "attributes";

export type NodeSubjectType = {
  onPropertyChange: <
    Key extends keyof NodeAttris,
    Value extends NodeAttris[Key]
  >(
    key: Key,
    newValue: Value,
    oldValue: Value
  ) => void;
};

export type ValueOf<T, Key extends keyof T> = T[Key];
export type UserInputAttri<T, Key extends keyof T> = NonNullable<T[Key]>;

export default class Node {
  private _subject: NodeSubjectType | null;
  private _attri: NodeAttris;
  private _defaultAttri: NodeAttris;
  constructor() {
    this._subject = null;
    this._attri = {};
    this._defaultAttri = {};
    this.setDefault(nodeDefaultConst);
  }

  //Handle the circular reference problem.?
  public setSubject(subject: NodeSubjectType) {
    this._subject = subject;
  }

  protected setDefault(attris: NodeAttris) {
    Object.assign(this._defaultAttri, attris);
    Object.assign(this._attri, attris);
  }

  //Provide for Node type class use.
  public PSetAttributes<
    Key extends keyof NodeAttris,
    Value extends NodeAttris[Key]
  >(key: Key, value: Value): Boolean {
    return this.setAttributes(key, value);
  }

  protected setAttributes<
    Key extends keyof NodeAttris,
    Value extends NodeAttris[Key]
  >(key: Key, value: Value): Boolean {
    const oldValue = this._attri[key];
    if (value == null) value = this._defaultAttri[key] as Value;
    if (!compareValue(oldValue, value)) {
      this._attri[key] = value;
      this._subject && this._subject.onPropertyChange(key, value, oldValue);
      return true;
    }
    return false;
  }

  protected getAttributes<
    Key extends keyof NodeAttris,
    Value extends NodeAttris[Key]
  >(key: Key) {
    //Return the intersection of Value & NodeAttris on key, so it will be the exactly type defined on NodeAttris except of undefined(Partial).
    //If you state the return type at the end of function signature, it will be wrong, cause you are saying that the function returns a value that could be any type associated with the 'key' parameter in the 'NodeAttris' object.
    return this._attri[key] as Value;
  }

  get attributes() {
    const result = Object.assign({}, this._attri);
    return result;
  }

  get id() {
    return this.getAttributes("id");
  }

  set id(value: UserInputAttri<BaseNodeAttributes, "id">) {
    this.setAttributes("id", value);
  }

  get name() {
    return this.getAttributes("name");
  }

  set name(value: UserInputAttri<BaseNodeAttributes, "name">) {
    this.setAttributes("name", value);
  }

  get className() {
    return this.getAttributes("className");
  }

  set className(value: UserInputAttri<BaseNodeAttributes, "name">) {
    this.setAttributes("className", value);
  }

  get originalX() {
    return this.getAttributes("originalX");
  }

  set originalX(value: UserInputAttri<BaseNodeAttributes, "originalX">) {
    this.setAttributes("originalX", value);
  }

  get originalY() {
    return this.getAttributes("originalY");
  }

  set originalY(value: UserInputAttri<BaseNodeAttributes, "originalY">) {
    this.setAttributes("originalY", value);
  }

  get originalPosition() {
    return [this.originalX, this.originalY];
  }

  set originalPosition(value: [number, number]) {
    this.originalX = value[0];
    this.originalY = value[1];
  }

  get rotate() {
    return this.getAttributes("rotate");
  }

  set rotate(value: UserInputAttri<BaseNodeAttributes, "rotate">) {}

  get translate() {
    return this.getAttributes("translate");
  }

  set translate(value: UserInputAttri<BaseNodeAttributes, "translate">) {}

  get scale() {
    return this.getAttributes("scale");
  }

  set scale(value: UserInputAttri<BaseNodeAttributes, "scale">) {}

  get skew() {
    return this.getAttributes("skew");
  }

  set skew(value: UserInputAttri<BaseNodeAttributes, "skew">) {}

  get opacity() {
    return this.getAttributes("opacity");
  }

  set opacity(value: UserInputAttri<BaseNodeAttributes, "opacity">) {
    this.setAttributes("opacity", value);
  }

  get pointerEvents() {
    return this.getAttributes("pointerEvents");
  }

  set pointerEvents(
    value: UserInputAttri<BaseNodeAttributes, "pointerEvents">
  ) {
    this.setAttributes("pointerEvents", value);
  }

  get filter() {
    return this.getAttributes("filter");
  }

  set filter(value: UserInputAttri<BaseNodeAttributes, "filter">) {
    this.setAttributes("filter", value);
  }

  get display() {
    return this.getAttributes("display");
  }

  set display(value: UserInputAttri<BaseNodeAttributes, "display">) {
    this.setAttributes("display", value);
  }
}

// console.log(new Node({ onPropertyChange(key, newValue, oldValue) {} }));
// console.log(new Node({ onPropertyChange(key, newValue, oldValue) {} })["skew"]);
// console.log(
//   new Node({ onPropertyChange(key, newValue, oldValue) {} }).attributes
// );
