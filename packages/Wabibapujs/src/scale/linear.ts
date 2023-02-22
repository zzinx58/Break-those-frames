type ScaleTypes = "linear" | "time" | "identity";

class Scale {
  scaleLinear(
    domain: [domainMin: number, domainMax: number],
    range: [rangeMin: number, rangeMax: number]
  ) {
    const [domainMin, domainMax] = domain;
    const [rangeMin, rangeMax] = range;
    const propotionalRatio = (rangeMax - rangeMin) / (domainMax - domainMin);
    const intercept = rangeMin - propotionalRatio * domainMin;
    return function (inputValue: number) {
      return { outputValue: propotionalRatio * inputValue + intercept };
    };
  }
}

// const scale = new Scale().scaleLinear([50, 100], [100, 300])(75);
// console.log(scale.outputValue);
