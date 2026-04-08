// src/pages/Home.tsx
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { projects } from '../data/index';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* გამოვიყენოთ Section კომპონენტი პროექტების გამოსაჩენად */}
      <Section title="გამორჩეული პროექტები" darkBg={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ვციკლავთ პროექტების სიას და ვქმნით Card-ებს */}
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