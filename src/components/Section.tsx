// src/components/Section.tsx
import type { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
  darkBg?: boolean;
}

export default function Section({ title, children, darkBg = false }: SectionProps) {
  // აქ ვქმნით კონტრასტს მუქი თემისთვის: 
  // ერთი სექცია იქნება მუქი slate-900, მეორე კი კიდევ უფრო მუქი slate-950
  const bgClass = darkBg ? 'bg-slate-950' : 'bg-slate-900';
  
  return (
    // გავზარდეთ padding (py-20 lg:py-28) უფრო "სუნთქვადი" და პროფესიონალური დიზაინისთვის
    <section className={`py-20 lg:py-28 ${bgClass} transition-colors duration-300 relative`}>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* სათაური: თეთრი ფერი, უფრო დიდი ზომა და font-extrabold */}
        {title && (
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-tight">
            {title}
          </h2>
        )}
        
        {children}
      </div>
    </section>
  );
}