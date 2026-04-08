// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        {/* აქ ვწერთ ჩვენს მარშრუტებს */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* სამომავლოდ აქ დაემატება სხვა გვერდებიც (მაგ. /about, /portfolio) */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;