import { BarElement } from '../constants/types';

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const swap = async (
  arr: BarElement[],
  i: number,
  j: number,
  updateValues: (array: BarElement[]) => void,
  speed: number,
) => {
  [arr[j], arr[i]] = [arr[i], arr[j]];

  await sleep(speed);
  updateValues([...arr]);
};

export const changeClassName = (
  array: BarElement[],
  index: number,
  className: string,
) => {
  array[index].className = className;
};
