import { BarElemet } from '../constants/types';

export default async function bubbleSort(
  arr: BarElemet[],
  speed: number,
  updateValues: (array: BarElemet[]) => void,
) {
  console.log(arr.length, speed);

  // Create a bubble sorter instance
  const sorter = await bubbleSorter();
  sorter(arr, speed, updateValues);
}

// A function that returns a closure that can sort an array using bubble sort
async function bubbleSorter() {
  // A helper function that swaps two elements in an array
  async function swap(
    arr: BarElemet[],
    i: number,
    j: number,
    updateValues: (array: BarElemet[]) => void,
    speed: number,
  ) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    await sleep(speed);
    updateValues([...arr]);
  }

  // A closure that takes an array as an argument and sorts it in place
  return async function (
    arr: BarElemet[],
    speed: number,
    updateValues: (array: BarElemet[]) => void,
  ) {
    const n = arr.length;
    // Loop over the array n times
    for (let i = 0; i < n; i++) {
      // Loop over the array from 0 to n - i - 1
      for (let j = 0; j < n - i - 1; j++) {
        // Compare the current element with the next element
        arr[j].className = 'bar orange';
        arr[j + 1].className = 'bar orange';
        updateValues([...arr]);
        await sleep(speed);
        if (arr[j].value > arr[j + 1].value) {
          // Swap them if they are out of order
          swap(arr, j, j + 1, updateValues, speed);
        }
        updateValues([...arr]);
        arr[j].className = 'bar';
        updateValues([...arr]);
        // arr[i].className = 'bar';
        await sleep(speed);
      }
      arr[n - i - 1].className = 'bar green';
      updateValues([...arr]);
    }
    // Return the sorted array
    return arr;
  };
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
