// src/layouts/MainLayout.tsx
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../data/index';
// 1. შემოგვაქვს ჩვენი Custom Hook-ი
import { useScrollTop } from '../hooks/useScrollTop'; 

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  // 2. უბრალოდ ვიძახებთ მას, ერთ ხაზზე!
  useScrollTop(); 

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