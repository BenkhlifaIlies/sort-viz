import { BarElement } from '../constants/types';

export default async function bubbleSort(
  arr: BarElement[],
  speed: number,
  updateValues: (array: BarElement[]) => void,
) {
  const sorter = await bubbleSorter();
  sorter(arr, speed, updateValues);
}

async function bubbleSorter() {
  async function swap(
    arr: BarElement[],
    i: number,
    j: number,
    updateValues: (array: BarElement[]) => void,
    speed: number,
  ) {
    [arr[j], arr[i]] = [arr[i], arr[j]];

    await sleep(speed);
    updateValues([...arr]);
  }

  return async function (
    arr: BarElement[],
    speed: number,
    updateValues: (array: BarElement[]) => void,
  ) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        arr[j].className = 'bar orange';
        arr[j + 1].className = 'bar orange';
        updateValues([...arr]);
        await sleep(speed);

        if (arr[j].value > arr[j + 1].value) {
          swap(arr, j, j + 1, updateValues, speed);
        }

        updateValues([...arr]);
        arr[j].className = 'bar';
        updateValues([...arr]);

        await sleep(speed);
      }
      arr[n - i - 1].className = 'bar green';
      updateValues([...arr]);
    }
    return arr;
  };
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
