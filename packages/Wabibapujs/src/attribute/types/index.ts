export type BaseNodeAttributes = {
  id: string;
  name: string;
  className: string;
  /* class */
  originalX: number;
  originalY: number;
  /* start position */
  transformOrigin: [number, number];
  transformS: string;
  //Horizontal Scaling\Skewing | Vertical Scaling|Skewing;
  transformM: [
    x_HScal: number,
    y_VSkew: number,
    x_HSkew: number,
    y_VScal: number,
    dx: number,
    dy: number
  ];
  rotate: number;
  translate: [dx: number, dy: number];
  scale: [x_HScal: number, y_VScal: number];
  skew: [x_HSkew: number, y_VSkew: number];
  /* transform options */
  pointerEvents: "none" | "visible" | "visibleFill" | "visibleStroke" | "all";
  filter: string;
  opacity: number;
  display: string;
  /* functionality */
};

export type BlockOptions = {
  anchorX: number;
  anchorY: number;
  /* anchor */
  width: number;
  height: number;
  /* size */
  borderWidth: number;
  borderColor: string;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  /* border & borderRadius */
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  /* padding */
  boxSizing: "content-box" | "border-box";
  bgColor: string;
  clipPath: string | undefined;
  /* functionality */
};

export type LabelOptions = {
  text: string;
  fontSize: number;
  fontFamily: string;
  fontStyle: string;
  fontVariant: string;
  fontWeight: string;
  fontStretch: string;
  lineHeight: string;
  /* font */
  strokeColor: string | undefined;
  strokeWidth: number;
  fillColor: string | undefined;
  /* present style */
  textAlign: "start" | "end" | "center";
  textBaseLine:
    | "top"
    | "hanging"
    | "middle"
    | "alphabetic"
    | "ideographic"
    | "bottom";
};

export type BasePathAttributes = {
  pathD: string;
  fillColor: string;
  strokeColor: string;
  lineWidth: number;
};

export type RectOptions = {
  size: [number, number];
  width: number;
  height: number;
  /* size */
};

export type AnyAttris = { [key: string]: any };
export type BlockAttributes = BaseNodeAttributes & BlockOptions;
export type LabelAttributes = BaseNodeAttributes & BlockOptions & LabelOptions;
export type RectAttributes = BasePathAttributes & RectOptions;
