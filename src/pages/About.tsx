import { useEffect } from 'react';
import Section from '../components/Section';
import giorgiImg from '../assets/giorgi.jpg';

export default function About() {
  useEffect(() => {
    document.title = 'ჩემ შესახებ | გიორგის პორტფოლიო';
  }, []);

  return (
    <Section title="ჩემ შესახებ" darkBg={false}>
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        
        {/* ფოტოს სექცია - დავამატეთ Glow ეფექტი */}
        <div className="w-full md:w-1/3 flex justify-center relative group">
          {/* ნათების ეფექტი ფოტოს უკან */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
          <img 
            // აუცილებლად გადაიტანეთ ფოტო public ფოლდერში და დაარქვით giorgi.jpg
            src={giorgiImg}
            alt="გიორგი საკანდელიძის პროფილის ფოტო" 
            // ჩარჩო გავამუქეთ (border-slate-700)
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-slate-700 relative z-10 group-hover:border-blue-500/50 transition-colors duration-300"
          />
        </div>
        
        {/* ტექსტის სექცია - ჩავსვით Glassmorphism ყუთში */}
        <div className="w-full md:w-2/3 text-center md:text-left bg-slate-800/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-xl">
          {/* სათაური თეთრი ფერის */}
          <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">გიორგი საკანდელიძე</h3>
          
          {/* ტექსტი ღია ნაცრისფერი, ადვილად წასაკითხი */}
          <p className="text-slate-300 mb-5 leading-relaxed text-lg">
            გამარჯობა! მე ვარ პროფესიონალი ვებ-დეველოპერი, რომელიც ორიენტირებულია თანამედროვე 
            და მომხმარებელზე მორგებული ვებ-აპლიკაციების შექმნაზე. ჩემი მთავარი 
            ინსტრუმენტებია <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">TypeScript</span> და <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg">
            ყოველდღიურად ვსწავლობ ახალ ტექნოლოგიებს და ვცდილობ, ჩემი კოდი იყოს 
            მაქსიმალურად სუფთა და ოპტიმიზებული. ყოველთვის მზად ვარ ახალი, საინტერესო გამოწვევებისთვის!
          </p>
        </div>

      </div>
    </Section>
  );
}