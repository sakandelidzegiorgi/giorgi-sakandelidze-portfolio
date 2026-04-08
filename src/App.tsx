// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Card from './components/Card';
import Button from './components/Button';
// შემოგვაქვს ერთი ტესტური პროექტი ჩვენი მონაცემებიდან
import { projects } from './data'; 

function App() {
  const testProject = projects[0];

  return (
    <BrowserRouter>
      <MainLayout>
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-8">კომპონენტების ტესტი</h1>
          
          {/* ღილაკების ტესტი */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>

          {/* ბარათის ტესტი (ვიყენებთ გრიდს რომ შუაში დაპატარავდეს) */}
          <div className="max-w-sm mx-auto">
            <Card 
              title={testProject.title}
              description={testProject.description}
              image={testProject.imageUrl}
              techStack={testProject.techStack}
              liveUrl={testProject.liveUrl}
            />
          </div>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;