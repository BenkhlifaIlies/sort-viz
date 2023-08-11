import { useLayoutEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import MainLayout from './components/layout/mainLayout';
import TutorialModal from './components/tutorialModal';
function MyApp() {
  const [tutorialModalVisibility, setTutorialModalVisibility] =
    useState<boolean>(false);

  useLayoutEffect(() => {
    setTutorialModalVisibility(true);
  }, []);
  return (
    <MainLayout>
      <h1
        onClick={() => {
          setTutorialModalVisibility(true);
        }}
      >
        Hello World!!
      </h1>
      {tutorialModalVisibility && (
        <TutorialModal
          setTutorialModalVisibility={setTutorialModalVisibility}
        />
      )}
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
