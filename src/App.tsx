// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh] text-slate-400">იტვირთება...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Catch-all route 404 გვერდისთვის */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;