import { Algorithm, BarElement } from '../constants/types';

import bubbleSort from './bubbleSort';
export default async function sortValuesByAlgorithm(
  values: BarElement[],
  algorithm: Algorithm,
  speed: number,
  updateValues: (arr: BarElement[]) => void,
) {
  switch (algorithm) {
    case 'Bubble Sort':
      await bubbleSort(values, speed, updateValues);
      break;
    default:
      break;
  }

  return;
}
