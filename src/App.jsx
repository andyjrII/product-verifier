import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import ScanPage from './pages/ScanPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='scan' element={<ScanPage />} />
        <Route path='result' element={<ResultPage />} />
      </Route>
    </Routes>
  );
}

export default App;
