// src/pages/Home.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { projects } from '../data/index';

export default function Home() {
  // მეორე useEffect: გვერდის ჩატვირთვისას იცვლება ბრაუზერის სათაური
  useEffect(() => {
    document.title = 'მთავარი | გიორგის პორტფოლიო';
  }, []); // ცარიელი კვადრატული ფრჩხილები ნიშნავს, რომ ეს გაეშვება მხოლოდ ერთხელ (გახსნისას)

  // გამოვაჩინოთ პირველი 6 პროექტი "გამორჩეული პროექტების" სექციაში
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      <Hero />
      <Section title="გამორჩეული პროექტები" darkBg={true}>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          გაეცანით ჩემს ბოლო დროის გამორჩეულ ნამუშევრებს. ეს პროექტები კარგად ასახავს ჩემს უნარებსა და გამოცდილებას თანამედროვე ვებ-ტექნოლოგიებში.
        </p>
        
        {/* 3-სვეტიანი ბადე Spacing-ით */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project) => (
            <Card 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.imageUrl}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        
        {/* "ყველა პროექტის ნახვა" ღილაკი */}
        <div className="text-center mt-16">
          <Link 
            to="/portfolio"
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full font-bold transition-all duration-300 active:scale-95 tracking-wide text-lg bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30"
          >
            ყველა პროექტის ნახვა
          </Link>
        </div>
      </Section>
    </>
  );
}