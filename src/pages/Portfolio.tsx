// src/pages/Portfolio.tsx
import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { projects } from '../data/index';
// შემოგვაქვს ჩვენი ახალი კომპონენტი
import GithubRepos from '../components/GithubRepos'; 

export default function Portfolio() {
  useEffect(() => {
    document.title = 'პორტფოლიო | გიორგის პორტფოლიო';
  }, []);

  const [filter, setFilter] = useState<string>('all');
  
  // კატეგორიების სია ფილტრის ღილაკებისთვის - დავამატეთ მეტი კატეგორია
  const categories = ['all', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'D3.js'];

  // ვფილტრავთ პროექტებს სტეიტის მიხედვით
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <>
      <Section title="ჩემი ნამუშევრები" darkBg={true}>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          აქ მოცემულია ჩემი ბოლო დროის პროექტები. შეგიძლიათ გაფილტროთ ტექნოლოგიების მიხედვით, რათა იხილოთ ჩემი გამოცდილება კონკრეტულ სფეროებში.
        </p>
        
        {/* ფილტრის ღილაკები - უკეთესი სტილით და დალაგებით */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-100 pb-10">
          {categories.map((category) => (
            <Button 
              key={category}
              // თუ მიმდინარე ღილაკი აქტიურია, ვრთავთ primary სტილს, თუ არა - outline-ს
              variant={filter === category ? 'primary' : 'outline'}
              // დაკლიკებისას ვცვლით state-ს
              onClick={() => setFilter(category)}
              className="px-6 py-2.5 text-sm uppercase tracking-wider font-semibold"
            >
              {category === 'all' ? 'ყველა' : category}
            </Button>
          ))}
        </div>
        
        {/* გაფილტრული პროექტების გამოჩენა - 3-სვეტიანი ბადე უკეთესი Spacing-ით */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.imageUrl}
                techStack={project.techStack}
                liveUrl={project.liveUrl}
              />
            ))
          ) : (
            <p className="text-center col-span-1 md:col-span-2 lg:col-span-3 text-gray-500 py-20 text-xl border border-dashed border-gray-200 rounded-xl">ამ ტექნოლოგიით პროექტები არ მოიძებნა.</p>
          )}
        </div>
      </Section>

      {/* გამოვიძახეთ API-დან წამოღებული GitHub-ის სექცია */}
      <GithubRepos />
    </>
  );
}