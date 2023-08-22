import { Algorithm, BarElemet } from '../constants/types';

import bubbleSort from './bubbleSort';
export default async function sortValuesByAlgorithm(
  values: BarElemet[],
  algorithm: Algorithm,
  speed: number,
  updateValues: (arr: BarElemet[]) => void,
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
