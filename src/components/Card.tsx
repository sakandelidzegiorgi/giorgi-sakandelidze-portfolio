// src/components/Card.tsx
import Badge from './Badge';
import Button from './Button';

interface CardProps {
  title: string;
  image: string;
  description: string;
  techStack?: string[]; // არასავალდებულო, შეიძლება ზოგ ბარათს არ ჰქონდეს
  liveUrl?: string;     // არასავალდებულო
}

export default function Card({ title, image, description, techStack, liveUrl }: CardProps) {
  return (
    // აქ შევცვალეთ კლასები ინტერაქტიულობისთვის
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* სურათის ნაწილი */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      {/* ტექსტის ნაწილი */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {/* ტექნოლოგიების ტეგები */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <Badge key={index} text={tech} />
            ))}
          </div>
        )}
        
        {/* ღილაკი လაივ ლინკისთვის */}
        {liveUrl && (
          <div className="mt-4">
            {/* ვიყენებთ <a> ტეგს ღილაკის შიგნით, რომ გარე საიტზე გადავიდეს */}
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">ნახე ლაივში</Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}