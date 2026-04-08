// src/pages/Home.tsx
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { projects } from '../data/index';

export default function Home() {
  // გვერდის ჩატვირთვისას იცვლება ბრაუზერის სათაური
  useEffect(() => {
    document.title = 'მთავარი | გიორგის პორტფოლიო';
  }, []); 

  return (
    <>
      <Hero />
      
      <Section title="გამორჩეული პროექტები" darkBg={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
      </Section>
    </>
  );
}