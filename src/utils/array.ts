import { MIN_VALUE, MAX_VALUE } from '../constants/constants';
import { BarElement } from '../constants/types';

export const getWindowDimensions = () =>
  Math.min(document.documentElement.clientWidth, 1440);

export const barsCalculator = (n: number) => {
  if (n >= 1440) {
    return Math.floor((n * 0.8) / 32);
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
};

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const arrayGenerator = (
  width: number,
  min: number = MIN_VALUE,
  max: number = MAX_VALUE,
) => {
  const array = [];
  const barsCount = barsCalculator(width);

  for (let index = 0; index < barsCount; index++) {
    array.push({
      value: getRandomInt(min, max),
      id: 'barelem_' + index,
      className: 'bar',
      isAnimate: false,
    });
  }
  return array;
};

export const shuffle = (array: BarElement[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return [...array];
};
