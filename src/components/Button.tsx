// src/components/Button.tsx
import type { ReactNode, ButtonHTMLAttributes } from 'react';

// ვიყენებთ ButtonHTMLAttributes-ს, რომ <button>-ის სტანდარტული თვისებებიც (მაგ. onClick) მივიღოთ
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

// დავამატეთ className პროფსებში, რათა გარედან მოწოდებული კლასები (მაგ: w-full) არ დაიკარგოს
export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {

  // 1. საბაზისო კლასები: აბის ფორმა (rounded-full) და ოდნავ გაზრდილი შიდა სივრცე (px-6 py-2.5)
  const baseClasses = "px-6 py-2.5 rounded-full font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center tracking-wide";

  // 2. ვარიანტები მორგებული მუქ და თანამედროვე დიზაინზე
  const variants = {
    // Primary: ლურჯი ფონი მანათობელი ჩრდილით (Glow)
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30",

    // Secondary: ნაცრისფერი/slate ფონი
    secondary: "bg-slate-700 text-white hover:bg-slate-600",

    // Outline: მინის ეფექტი (Glassmorphism), თხელი ჩარჩო და ჰოვერზე ლურჯად განათება
    outline: "border border-slate-600 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 backdrop-blur-sm"
  };

  return (
    // აქ ვაერთიანებთ საბაზისო კლასებს, ვარიანტის ფერებს და გარედან მოწოდებულ className-ს
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}