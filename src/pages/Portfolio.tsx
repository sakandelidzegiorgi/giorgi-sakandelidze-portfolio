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
  const categories = ['all', 'React', 'TypeScript', 'Tailwind CSS'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <>
      <Section title="ჩემი ნამუშევრები" darkBg={true}>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          აქ მოცემულია ჩემი ბოლო დროის პროექტები. შეგიძლიათ გაფილტროთ ტექნოლოგიების მიხედვით.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={filter === category ? 'primary' : 'outline'}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'ყველა' : category}
            </Button>
          ))}
        </div>
        
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

      {/* გამოვიძახეთ API-დან წამოღებული GitHub-ის სექცია */}
      <GithubRepos />
    </>
  );
}