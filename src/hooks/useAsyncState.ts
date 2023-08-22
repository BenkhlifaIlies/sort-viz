import { useState } from 'react';
import { BarElemet } from '../constants/types';

const useAsyncState = (initialState: BarElemet[]) => {
  const [state, setState] = useState<BarElemet[]>(initialState);

  const asyncSetState = (value: BarElemet[]) => {
    return new Promise(resolve => {
      setState(value);
      setState((current: BarElemet[]) => {
        resolve(current);
        return current;
      });
    });
  };

  return [state, asyncSetState];
};

export default useAsyncState;
