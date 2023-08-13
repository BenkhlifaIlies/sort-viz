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
import DropDown from './components/common/dropDown';

function MyApp() {
  const [tutorialModalVisibility, setTutorialModalVisibility] =
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
      <h1>Hello World!!</h1>
      <DropDown
        currentOption="bubble sort"
        options={['bubble sort', 'selection sort']}
      />
      {tutorialModalVisibility && (
        <TutorialModal
          setTutorialModalVisibility={setTutorialModalVisibility}
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
