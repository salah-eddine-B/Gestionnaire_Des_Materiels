import './App.css';
import Layout from './Layout/Layout';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import MaterialsPage from './pages/Materials/MaterialsPage';
import FilesPage from './pages/FilesPage/FilesPage';



function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/files" element={<FilesPage />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
