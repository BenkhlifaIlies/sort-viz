import { useState } from 'react';
import { BarElement } from '../constants/types';

const useAsyncState = (initialState: BarElement[]) => {
  const [state, setState] = useState<BarElement[]>(initialState);

  const asyncSetState = (value: BarElement[]) => {
    return new Promise(resolve => {
      setState(value);
      setState((current: BarElement[]) => {
        resolve(current);
        return current;
      });
    });
  };

  return [state, asyncSetState] as const;
};

export default useAsyncState;
