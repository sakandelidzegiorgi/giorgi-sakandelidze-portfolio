// src/components/Button.tsx
import { ReactNode, ButtonHTMLAttributes } from 'react';

// ვიყენებთ ButtonHTMLAttributes-ს, რომ <button>-ის სტანდარტული თვისებებიც (მაგ. onClick) მივიღოთ
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  // საბაზისო კლასები, რაც ყველა ღილაკს აქვს
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200";
  
  // ვარიანტების მიხედვით ფერების განაწილება
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}