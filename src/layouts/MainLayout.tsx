// src/layouts/MainLayout.tsx
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../data'; // შემოგვაქვს მონაცემები

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    // min-h-screen უზრუნველყოფს, რომ Footer ყოველთვის ბოლოში იყოს
    <div className="flex flex-col min-h-screen">
      <Header links={navLinks} />
      
      {/* მთავარი კონტენტი ჩაჯდება აქ */}
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}