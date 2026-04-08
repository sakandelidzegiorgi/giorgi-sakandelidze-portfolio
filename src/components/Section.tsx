// src/components/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  title?: string; // სათაური არასავალდებულოა
  children: ReactNode;
  darkBg?: boolean; // თუ გვინდა, რომ ფონი ოდნავ ნაცრისფერი იყოს (სექციების გამოსაყოფად)
}

export default function Section({ title, children, darkBg = false }: SectionProps) {
  return (
    <section className={`py-16 ${darkBg ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        {/* თუ სათაური გადავეცით, გამოვაჩენთ */}
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            {title}
          </h2>
        )}
        
        {/* აქ ჩაჯდება სექციის მთავარი შიგთავსი */}
        {children}
      </div>
    </section>
  );
}