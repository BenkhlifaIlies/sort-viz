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
import Toast, { ToastType } from './components/common/toast';
import SettingsModal from './components/settingsModal';

function MyApp() {
  const [tutorialModalVisibility, setTutorialModalVisibility] =
    useState<boolean>(false);

  const [settingslModalVisibility, setSettingslModalVisibility] =
    useState<boolean>(false);

  const [notif, setNotif] = useState<ToastType[]>([]);

  useLayoutEffect(() => {
    if (window.sessionStorage.getItem('show-tutorial') !== 'false') {
      setTutorialModalVisibility(true);
      window.sessionStorage.setItem('show-tutorial', 'false');
    }
  }, []);

  return (
    <MainLayout>
      <h1
        onClick={() => setSettingslModalVisibility(!settingslModalVisibility)}
      >
        Hello World!!
      </h1>
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
