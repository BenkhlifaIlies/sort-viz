const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function barsCalculator(n: number) {
  if (n >= 1440) {
    return Math.floor((n * 0.9) / 32);
  } else if (n >= 1024) {
    return 24;
  } else if (n >= 768) {
    return 18;
  } else if (n >= 640) {
    return 12;
  } else if (n >= 400) {
    return 10;
  } else if (n > 320) {
    return 8;
  } else {
    return 6;
  }
}

const arrayGenerator = (
  MIN_VALUE: number,
  MAX_VALUE: number,
  width: number,
) => {
  const array = [];
  const barsCount = barsCalculator(width);

  for (let index = 0; index < barsCount; index++) {
    array.push(getRandomInt(MIN_VALUE, MAX_VALUE));
    // array.push({
    //   className: '',
    //   value: getRandomInt(MIN_VALUE, MAX_VALUE),
    // });
  }
  return array;
};

export { getRandomInt, barsCalculator, arrayGenerator };
