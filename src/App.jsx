import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ScanHistory from './modules/history/ScanHistory';
import Dashboard from './modules/scan/Dashboard';

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
