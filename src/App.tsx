import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import './App.css';
import MainLayout from './components/layout/mainLayout';
function MyApp() {
  return (
    <MainLayout>
      <h1>Hello World!!</h1>
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
