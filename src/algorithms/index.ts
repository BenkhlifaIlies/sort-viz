import { Algorithm, BarElement } from '../constants/types';

import bubbleSort from './bubbleSort';
import insertionSort from './insertionSort';

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
    case 'Insertion Sort':
      await insertionSort(values, speed, updateValues);
      break;
    default:
      break;
  }
  return;
}
