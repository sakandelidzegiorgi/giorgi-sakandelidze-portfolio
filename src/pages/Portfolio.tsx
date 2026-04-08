// src/pages/Portfolio.tsx
import Section from '../components/Section';
import Card from '../components/Card';
import { projects } from '../data/index';

export default function Portfolio() {
  return (
    <Section title="ჩემი ნამუშევრები" darkBg={true}>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        აქ მოცემულია ჩემი ბოლო დროის პროექტები. თითოეული მათგანი აწყობილია 
        თანამედროვე ტექნოლოგიებით და პასუხობს რეალურ გამოწვევებს.
      </p>
      
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
  );
}