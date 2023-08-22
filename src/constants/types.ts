export type ContextType = {
  algorithm: Algorithm;
  updateAlgorithmSettings: (a: Algorithm) => void;
  speed: AnimationSpeed;
  updateAnimationSettings: (n: AnimationSpeed) => void;
  settingslModalVisibility: boolean;
  toggleModalVisibility: () => void;
  notificationList: ToastType[];
  pushNotification: (toastMsg: string) => void;
  values: BarElement[];
  updateValues: (arr: BarElement[]) => void;
};

export type Settings = {
  algorithm: Algorithm;
  speed: AnimationSpeed;
};

export type Algorithm =
  | 'Bubble Sort'
  | 'Insertion Sort'
  | 'Selection Sort'
  | 'Quick Sort';

export type AnimationSpeed = 50 | 200 | 500 | 1000;

export type ToastType = {
  id: number;
  message: string;
};

export type BarElement = {
  value: number;
  className: string;
  id: string;
  isAnimate: boolean;
};
