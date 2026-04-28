// src/components/Footer.tsx
export default function Footer() {
  return (
    // ფონი შევცვალეთ slate-950-ით და დავუმატეთ ძალიან თხელი, ნახევრად გამჭვირვალე ზედა ჩარჩო
    <footer className="bg-slate-950 border-t border-slate-800/50 py-10 mt-auto">
      <div className="container mx-auto px-4 text-center">
        
        {/* ტექსტი გავხადეთ slate-400, რომ არ იყოს ზედმეტად მკვეთრი თეთრი */}
        <p className="mb-6 text-slate-400 text-sm tracking-wide">
          © {new Date().getFullYear()} გიორგის პორტფოლიო. ყველა უფლება დაცულია.
        </p>
        
        {/* სოციალური ქსელების ლინკები */}
        <div className="flex justify-center space-x-6">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            // დავამატეთ hover ანიმაცია (ოდნავ ზემოთ აწევა და გალურჯება)
            className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 font-medium"
          >
            Facebook
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 font-medium"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/GiorgiSakandelidze" // აქ შეგიძლია შენი რეალური ლინკი ჩასვა
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 font-medium"
          >
            GitHub
          </a>
        </div>
        
      </div>
    </footer>
  );
}