// src/components/Hero.tsx
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Hero() {
  return (
    // მთავარი სექცია: მუქი ლურჯი/ნაცრისფერი ფონი და მეტი spacing (py-32)
    <section className="relative bg-slate-900 text-white overflow-hidden py-32 lg:py-40">
      
      {/* ფონის ნათების ეფექტი (Glow) - ქმნის სიღრმეს */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        {/* სტატუსის მანიშნებელი (Badge) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          ღია ვარ ახალი შემოთავაზებებისთვის
        </div>

        {/* მთავარი სათაური ტექსტური გრადიენტით */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          გამარჯობა, მე ვარ <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            გიორგი
          </span>
        </h1>
        
        {/* აღწერა - ნაცრისფერი ტექსტი აქცენტირებული საკვანძო სიტყვებით */}
        <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Frontend დეველოპერი. ვქმნი თანამედროვე, სწრაფ და ინტუიციურ ვებ-აპლიკაციებს 
          <span className="text-white font-semibold"> React</span>-ისა და 
          <span className="text-white font-semibold"> TypeScript</span>-ის გამოყენებით.
        </p>
        
        {/* ღილაკები - მობილურზე სრულ სიგანეზე, დესკტოპზე გვერდიგვერდ */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
          <Link 
            to="/portfolio" 
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 px-8 py-4 text-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            ჩემი ნამუშევრები
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            დამიკავშირდი
          </Link>
        </div>

      </div>
    </section>
  );
}