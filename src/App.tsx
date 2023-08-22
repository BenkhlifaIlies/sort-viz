import { useLayoutEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './assets/styles/App.css';
import MainLayout from './layout/mainLayout';

import TutorialModal from './components/tutorialModal';
import Toast from './components/common/toast';
import SettingsModal from './components/settingsModal';
import BarList from './components/barList';
import { AppContext } from './contexts/context';
import {
  Algorithm,
  AnimationSpeed,
  BarElement,
  ContextType,
  ToastType,
} from './constants/types';
import { algoOptions, animationoptions } from './constants/constants';
import { arrayGenerator, getWindowDimensions } from './utils/array';
import useAsyncState from './hooks/useAsyncState';

function MyApp() {
  const [tutorialModalVisibility, setTutorialModalVisibility] =
    useState<boolean>(false);
  const [settingslModalVisibility, setSettingslModalVisibility] =
    useState<boolean>(false);
  const [notif, setNotif] = useState<ToastType[]>([]);
  const [values, setValues] = useAsyncState(
    arrayGenerator(getWindowDimensions()),
  );
  const [algorithm, setAlgorithm] = useState<Algorithm>(
    algoOptions[0] as Algorithm,
  );
  const [speed, setSpeed] = useState<AnimationSpeed>(
    animationoptions[1] as AnimationSpeed,
  );

  useLayoutEffect(() => {
    if (window.sessionStorage.getItem('show-tutorial') !== 'false') {
      setTutorialModalVisibility(true);
      window.sessionStorage.setItem('show-tutorial', 'false');
    }
  }, []);

  const toggleModalVisibility = () => {
    setSettingslModalVisibility(!settingslModalVisibility);
  };

  const pushNotification = (toast: ToastType) => {
    setNotif([...notif, toast]);
  };

  const updateAlgorithmSettings = (a: Algorithm) => {
    setAlgorithm(a);
  };

  const updateAnimationSettings = (n: AnimationSpeed) => {
    setSpeed(n);
  };

  const updateValues = async (n: BarElement[]) => {
    await setValues(n);
  };

  const initContext: ContextType = {
    settingslModalVisibility,
    toggleModalVisibility,
    algorithm,
    updateAlgorithmSettings,
    speed,
    updateAnimationSettings,
    notificationList: [],
    pushNotification,
    values,
    updateValues,
  };

  return (
    <AppContext.Provider value={initContext}>
      <MainLayout>
        <BarList />
        {tutorialModalVisibility && (
          <TutorialModal
            setTutorialModalVisibility={setTutorialModalVisibility}
          />
        )}
        {settingslModalVisibility && (
          <SettingsModal
            setSettingslModalVisibility={setSettingslModalVisibility}
          />
        )}

        <Toast toastlist={notif} setList={setNotif} />
      </MainLayout>
    </AppContext.Provider>
  );
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
