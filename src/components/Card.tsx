// src/components/Card.tsx
import { memo } from 'react'; // 1. შემოგვაქვს memo
import Badge from './Badge';
import Button from './Button';

interface CardProps {
  title: string;
  image: string;
  description: string;
  techStack?: string[];
  liveUrl?: string;
}

// 2. ფუნქცია გადავაკეთეთ ცვლადად, რომ memo-ში გავახვიოთ
const Card = ({ title, image, description, techStack, liveUrl }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      
      {/* 3. დავამატეთ loading="lazy" */}
      <img src={image} alt={title} loading="lazy" className="w-full h-48 object-cover" />
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <Badge key={index} text={tech} />
            ))}
          </div>
        )}
        
        {liveUrl && (
          <div className="mt-4">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">ნახე ლაივში</Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. memo უზრუნველყოფს, რომ ბარათი თავიდან არ დახატოს ბრაუზერმა, თუ მისი მონაცემები არ შეცვლილა
export default memo(Card);