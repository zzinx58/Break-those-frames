export function compareValue(oldValue: any, newValue: any) {
  if (Array.isArray(oldValue) && Array.isArray(newValue)) {
    if (oldValue.length !== newValue.length) return false;
    for (let i = 0; i < oldValue.length; i++) {
      if (oldValue[i] !== newValue[i]) return false;
    }
    return true;
  }
  return (oldValue == null && newValue == null) || oldValue === newValue;
}

interface ParsedFontResult {
  fontFamily: string;
  fontSize: number;
  lineHeight: number | null;
  fontStyle: string;
  fontWeight: string;
  fontVariant: string;
}

export function parseFont(fontConfigStr: string): ParsedFontResult {
  const match = fontConfigStr.match(
    /^(?:(?<fontStyle>italic|oblique)\s+)?(?:(?<fontWeight>\d{3}|bold|bolder|lighter)\s+)?(?:(?<fontVariant>small-caps)\s+)?(?<fontSize>\d+(?:\.\d+)?)(?:px)?\/?(?:(?<lineHeight>\d+(?:\.\d+)?)(?:px))? (?<fontFamily>.+)$/
  );

  if (!match) {
    throw new Error(`Invalid font string: ${parseFont}`);
  }

  const groups = match.groups;
  if (!groups) {
    throw new Error(
      `No named capture groups found in font string: ${parseFont}`
    );
  }

  const {
    fontStyle = "normal",
    fontWeight = "normal",
    fontVariant = "normal",
    fontSize,
    lineHeight = null,
    fontFamily,
  } = groups;

  return {
    fontFamily,
    fontSize: parseFloat(fontSize),
    lineHeight: lineHeight ? parseFloat(lineHeight) : null,
    fontStyle,
    fontWeight,
    fontVariant,
  };
}
