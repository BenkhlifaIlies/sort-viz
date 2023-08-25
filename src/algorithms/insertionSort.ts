import { BarElement } from '../constants/types';
import { changeClassName, sleep, swap } from '../utils/animation';

export default async function insertionSorter(
  arr: BarElement[],
  speed: number,
  updateValues: (array: BarElement[]) => void,
) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    changeClassName(arr, i, 'bar red');
    updateValues([...arr]);
    await insert(arr, i, updateValues, speed);
    await sleep(speed);
    changeClassName(arr, i, 'bar green');
    updateValues([...arr]);
    await sleep(speed);
  }
  return arr;
}

async function insert(
  arr: BarElement[],
  i: number,
  updateValues: (array: BarElement[]) => void,
  speed: number,
) {
  const temp = arr[i];
  changeClassName(arr, i, 'bar red');
  updateValues([...arr]);
  await sleep(speed);
  while (i > 0 && arr[i - 1].value > temp.value) {
    changeClassName(arr, i - 1, 'bar orange');
    updateValues([...arr]);
    await sleep(speed);
    swap(arr, i, i - 1, updateValues, speed);
    changeClassName(arr, i - 1, 'bar red');
    changeClassName(arr, i, 'bar green');
    updateValues([...arr]);
    await sleep(speed);

    i--;
  }
  arr[i] = temp;
  changeClassName(arr, i, 'bar green');
  updateValues([...arr]);
  await sleep(speed);
}
