// src/components/Hero.tsx
import { Link } from 'react-router-dom';
import Button from './Button'; // შემოგვაქვს ჩვენი წინა ნაბიჯზე აწყობილი ღილაკი

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          გამარჯობა, მე ვარ გიორგი
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Frontend დეველოპერი. ვქმნი თანამედროვე, სწრაფ და რესპონსიულ ვებ-აპლიკაციებს React-ისა და TypeScript-ის გამოყენებით.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/portfolio">
            <Button variant="primary" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg">
              ჩემი ნამუშევრები
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-3 text-lg">
              დამიკავშირდი
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}