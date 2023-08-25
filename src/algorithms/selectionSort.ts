import { BarElement } from '../constants/types';
import { changeClassName, sleep, swap } from '../utils/animation';

export default async function selectionSort(
  arr: BarElement[],
  speed: number,
  updateValues: (arr: BarElement[]) => void,
) {
  const n: number = arr.length;

  for (let i = 0; i < n - 1; i++) {
    changeClassName(arr, i, 'bar red');
    updateValues([...arr]);
    await sleep(speed);
    let min = i;
    for (let j = i + 1; j < n; j++) {
      changeClassName(arr, j, 'bar orange');
      updateValues([...arr]);
      await sleep(speed);
      if (arr[j].value < arr[min].value) {
        if (min !== i) {
          changeClassName(arr, min, 'bar ');
          updateValues([...arr]);
          await sleep(speed);
        }
        min = j;
        changeClassName(arr, min, 'bar red');
        updateValues([...arr]);
        await sleep(speed);
      } else {
        changeClassName(arr, j, 'bar');
        updateValues([...arr]);
        await sleep(speed);
      }
    }

    if (min !== i) {
      await swap(arr, i, min, updateValues, speed);
      changeClassName(arr, min, 'bar');
      changeClassName(arr, i, 'bar green');
      updateValues([...arr]);
      await sleep(speed);
    } else {
      changeClassName(arr, min, 'bar green');
      updateValues([...arr]);
      await sleep(speed);
    }
  }
  changeClassName(arr, n - 1, 'bar green');
  updateValues([...arr]);
  await sleep(speed);

  return arr;
}
