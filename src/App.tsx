import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import './App.css';
import MainLayout from './components/layout/mainLayout';
import { useState } from 'react';
import Modal from './components/common/modal';
function MyApp() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MainLayout>
      <h1
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Hello World!!
      </h1>
      {modalOpen && (
        <Modal title={'test'} setOpenModal={setModalOpen}>
          <Modal.Body>
            <h1>Hello from modal's body</h1>
            <h1>Hello from modal's body again</h1>
          </Modal.Body>
          <Modal.Footer>
            <h1>Hello from modal's footer</h1>
          </Modal.Footer>
        </Modal>
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
