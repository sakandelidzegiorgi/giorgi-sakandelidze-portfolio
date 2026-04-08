import { useEffect } from 'react';
import Section from '../components/Section';

export default function About() {
  useEffect(() => {
    document.title = 'ჩემ შესახებ | გიორგის პორტფოლიო';
  }, []);

  return (
    <Section title="ჩემ შესახებ">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src="https://via.placeholder.com/300" 
            alt="პროფილის ფოტო" 
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-50"
          />
        </div>
        
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">გიორგი საკანდელიძე</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            გამარჯობა! მე ვარ პროფესიონალი ვებ-დეველოპერი, რომელიც ორიენტირებულია თანამედროვე 
            და მომხმარებელზე მორგებული ვებ-აპლიკაციების შექმნაზე. ჩემი მთავარი 
            ინსტრუმენტებია React, TypeScript და Tailwind CSS.
          </p>
          <p className="text-gray-600 leading-relaxed">
            ყოველდღიურად ვსწავლობ ახალ ტექნოლოგიებს და ვცდილობ, ჩემი კოდი იყოს 
            მაქსიმალურად სუფთა და ოპტიმიზებული.
          </p>
        </div>
      </div>
    </Section>
  );
}