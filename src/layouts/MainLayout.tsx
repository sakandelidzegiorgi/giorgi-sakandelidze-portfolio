// src/layouts/MainLayout.tsx
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // 1. შემოგვაქვს მარშრუტის დეტექტორი
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../data/index';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  // ვიღებთ ინფორმაციას მიმდინარე ლინკზე (მაგალითად: '/about')
  const location = useLocation();

  // პირველი useEffect: ყოველ ჯერზე, როცა location იცვლება, აგვაქვს ეკრანი ზემოთ
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // [location.pathname] არის "ტრიგერი", რომელიც ეუბნება, როდის გაეშვას

  return (
    <div className="flex flex-col min-h-screen">
      <Header links={navLinks} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}