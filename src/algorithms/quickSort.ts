import { BarElement } from '../constants/types';
import { changeClassName, swap, sleep } from '../utils/animation';

async function partition(
  arr: BarElement[],
  left: number,
  right: number,
  updateValues: (arr: BarElement[]) => void,
  speed: number,
) {
  const pivotIndex = Math.floor((right + left) / 2);
  const pivot = arr[pivotIndex].value;
  changeClassName(arr, pivotIndex, 'bar red');
  updateValues([...arr]);
  await sleep(speed);
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i].value < pivot) {
      i++;
    }
    while (arr[j].value > pivot) {
      j--;
    }
    if (i <= j) {
      changeClassName(arr, i, 'bar orange');
      changeClassName(arr, j, 'bar orange');
      updateValues([...arr]);
      await sleep(speed);
      await swap(arr, i, j, updateValues, speed);
      updateValues([...arr]);
      changeClassName(arr, i, 'bar');
      changeClassName(arr, j, 'bar');
      updateValues([...arr]);
      await sleep(speed);
      i++;
      j--;
    }
  }
  changeClassName(arr, i, 'bar green');
  updateValues([...arr]);
  await sleep(speed);
  return i;
}

export default async function quickSort(
  arr: BarElement[],
  speed: number,
  updateValues: (arr: BarElement[]) => void,
  left: number = 0,
  right: number = arr.length - 1,
) {
  let index;
  if (arr.length > 1) {
    index = await partition(arr, left, right, updateValues, speed);
    if (left < index - 1) {
      await quickSort(arr, speed, updateValues, left, index - 1);
    }
    if (index < right) {
      await quickSort(arr, speed, updateValues, index, right);
    }
    changeClassName(arr, index, 'bar green');
    await sleep(speed);
  }
  changeClassName(arr, 0, 'bar green');
  return arr
}
