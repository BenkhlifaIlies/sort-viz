import { BarElement } from '../constants/types';
import { changeClassName, sleep, swap } from '../utils/animation';

const bubbleSort = async (
  arr: BarElement[],
  speed: number,
  updateValues: (array: BarElement[]) => void,
) => {
  const sorter = await bubbleSorter();
  sorter(arr, speed, updateValues);
};

async function bubbleSorter() {
  return async function (
    arr: BarElement[],
    speed: number,
    updateValues: (array: BarElement[]) => void,
  ) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        changeClassName(arr, j, 'bar orange');
        changeClassName(arr, j + 1, 'bar orange');
        updateValues([...arr]);
        await sleep(speed);

        if (arr[j].value > arr[j + 1].value) {
          swap(arr, j, j + 1, updateValues, speed);
          updateValues([...arr]);
        }

        changeClassName(arr, j, 'bar');
        updateValues([...arr]);

        await sleep(speed);
      }

      changeClassName(arr, n - i - 1, 'bar green');
      updateValues([...arr]);
    }
    return arr;
  };
}

export default bubbleSort;
