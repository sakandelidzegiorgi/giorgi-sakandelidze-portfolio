// src/components/Card.tsx
import { memo } from 'react';
import Badge from './Badge';
import Button from './Button';

interface CardProps {
  title: string;
  image: string;
  description: string;
  techStack?: string[];
  liveUrl?: string;
}

const Card = ({ title, image, description, techStack, liveUrl }: CardProps) => {
  return (
    // 1. ფონი შევცვალეთ სუფთა მუქ ფერზე (bg-slate-900), რომ ტექსტი კარგად გამოჩნდეს.
    // დავამატეთ font-sans, რომ აუცილებლად სუფთა შრიფტი გამოიყენოს.
    <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700 overflow-hidden group hover:shadow-2xl hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full font-sans">
      
      <img 
        src={image} 
        alt={title} 
        loading="lazy" 
        className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
      />
      
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        {/* 2. სათაური: სუფთა თეთრი ფერი (text-white) და ნორმალური სისქე (font-bold) */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white leading-snug tracking-normal">
          {title}
        </h3>
        
        {/* 3. აღწერა: ღია ნაცრისფერი (text-slate-300), რომ ფონზე კარგად იკითხებოდეს */}
        <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3 flex-grow font-normal text-sm sm:text-base">
          {description}
        </p>
        
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-slate-700/80">
            {techStack.map((tech, index) => (
              <Badge key={index} text={tech} />
            ))}
          </div>
        )}
        
        {liveUrl && (
          <div className="mt-auto">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              {/* ღილაკი დავუბრუნეთ სტანდარტულ, მკვეთრ დიზაინს */}
              <Button variant="primary" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl">
                ნახე ლაივში
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Card);