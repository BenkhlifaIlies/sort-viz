import { createContext } from 'react';
import { Algorithm, AnimationSpeed, ContextType } from '../constants/types';

const initialState = {
  settingslModalVisibility: false,
  toggleModalVisibility: () => {},
  algorithm: 'Bubble Sort' as Algorithm,
  updateAlgorithmSettings: () => {},
  speed: 200 as AnimationSpeed,
  updateAnimationSettings: () => {},
  values: [],
  notificationList: [],
  pushNotification: () => {},
};

export const AppContext = createContext<ContextType>(initialState);
