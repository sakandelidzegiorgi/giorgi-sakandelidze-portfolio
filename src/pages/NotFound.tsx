// src/pages/NotFound.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';

export default function NotFound() {
  // აქაც ვინარჩუნებთ ჩვენს პროფესიონალურ სტანდარტს სათაურისთვის
  useEffect(() => {
    document.title = '404 - გვერდი არ მოიძებნა | გიორგის პორტფოლიო';
  }, []);

  return (
    <Section>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ოპს! გვერდი არ მოიძებნა
        </h2>
        <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
          ბოდიშს გიხდით, მაგრამ გვერდი, რომელსაც ეძებთ, არ არსებობს ან წაშლილია.
        </p>
        <Link to="/">
          <Button variant="primary" className="px-8 py-3 text-lg">
            მთავარ გვერდზე დაბრუნება
          </Button>
        </Link>
      </div>
    </Section>
  );
}