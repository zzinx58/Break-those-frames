// RGB to hexadecimal color representation
export function rgbToHex(r: number, g: number, b: number): string {
  const partToHex = (part: number) => {
    const hexStr = part.toString(16);
    return hexStr.length === 1 ? "0" + hexStr : hexStr;
  };
  const result = `
  #
    ${partToHex(r)}
    ${partToHex(g)}
    ${partToHex(b)}
    `;
  return result;
}

// Hex to RGB
export function hexToRgb(hex: string): [r: number, g: number, b: number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

//Relative luminance of an RGB color string
export function getRelativeLuminance(
  valueArr: [r: number, g: number, b: number]
) {
  const [rLinear, gLinear, bLinear] = valueArr.map((item) => {
    const sRGB = item / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  // Relative luminance formula.
  // Before using this formula, the red, green, and blue values should be normalized to a range of 0 to 1   before using this formula.
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

// W3C Color contrast formula
export function getColorContrastRatio(color1: string, color2: string) {
  //   const [r1, g1, b1] = hexToRgb(color1);
  //   const [r2, g2, b2] = hexToRgb(color2);
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const l1 = getRelativeLuminance(rgb1);
  const l2 = getRelativeLuminance(rgb2);

  const contrastRatio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  return Math.round(contrastRatio * 100) / 100;
}
