import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import ScanHistory from './pages/ScanHistory';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='history' element={<ScanHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
