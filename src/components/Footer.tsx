// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© {new Date().getFullYear()} ჩემი პორტფოლიო. ყველა უფლება დაცულია.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}