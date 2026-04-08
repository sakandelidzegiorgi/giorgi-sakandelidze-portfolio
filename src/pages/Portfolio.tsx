// src/pages/Portfolio.tsx
import { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { projects } from '../data/index';

export default function Portfolio() {
  // useState ფილტრაციისთვის (საწყისი მნიშვნელობაა 'all')
  const [filter, setFilter] = useState<string>('all');

  // კატეგორიების სია ფილტრის ღილაკებისთვის
  const categories = ['all', 'React', 'TypeScript', 'Tailwind CSS'];

  // ვფილტრავთ პროექტებს სტეიტის მიხედვით
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <Section title="ჩემი ნამუშევრები" darkBg={true}>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        აქ მოცემულია ჩემი ბოლო დროის პროექტები. შეგიძლიათ გაფილტროთ ტექნოლოგიების მიხედვით.
      </p>
      
      {/* ფილტრის ღილაკები */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button 
            key={category}
            // თუ მიმდინარე ღილაკი აქტიურია, ვრთავთ primary სტილს, თუ არა - outline-ს
            variant={filter === category ? 'primary' : 'outline'}
            // დაკლიკებისას ვცვლით state-ს
            onClick={() => setFilter(category)}
          >
            {category === 'all' ? 'ყველა' : category}
          </Button>
        ))}
      </div>
      
      {/* გაფილტრული პროექტების გამოჩენა */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <p className="text-center col-span-3 text-gray-500">ამ ტექნოლოგიით პროექტები არ მოიძებნა.</p>
        )}
      </div>
    </Section>
  );
}