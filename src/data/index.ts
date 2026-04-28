// src/data/index.ts
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.avif';
export const navLinks = [
  { path: '/', label: 'მთავარი' },
  { path: '/about', label: 'ჩემ შესახებ' },
  { path: '/portfolio', label: 'პორტფოლიო' },
  { path: '/contact', label: 'კონტაქტი' },
];

export const projects = [
  {
    id: 1,
    title: 'ონლაინ მაღაზიის პლატფორმა',
    imageUrl: img1,
    description: 'სრულფასოვანი ელექტრონული კომერციის ვებ-საიტი მომხმარებლის ავტორიზაციით, კალათით და გადახდის სისტემით.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js'],
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'სოციალური მედიის დაშბორდი',
    imageUrl: img2,
    description: 'ინტერაქტიული პანელი სოციალური ქსელების ანალიტიკისა და მართვისთვის რეალურ დროში.',
    techStack: ['React', 'D3.js', 'Firebase', 'Next.js'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'უძრავი ქონების პორტალი',
    imageUrl: img3,
    description: 'ვებ-აპლიკაცია უძრავი ქონების ძიებისა და ფილტრაციისთვის რუკაზე ინტეგრაციით.',
    techStack: ['React', 'TypeScript', 'Google Maps API', 'Tailwind CSS'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'დავალებების მართვის სისტემა',
    imageUrl: img4,
    description: 'Drag-and-drop ტიპის Kanban დაფა გუნდური პროექტებისა და დავალებების ორგანიზებისთვის.',
    techStack: ['React', 'Beautiful DnD', 'Chakra UI', 'TypeScript'],
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'კრიპტოვალუტის თრექერი',
    imageUrl: img5,
    description: 'რეალურ დროში კრიპტოვალუტების ფასების, ტრენდებისა და გრაფიკების მონიტორინგის აპლიკაცია.',
    techStack: ['React', 'WebSocket', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'ბლოგინგის პლატფორმა',
    imageUrl: img6,
    description: 'პერსონალური ბლოგის საიტი Markdown-ის მხარდაჭერით და სუფთა, კითხვაზე ორიენტირებული დიზაინით.',
    techStack: ['React', 'Gatsby', 'MDX', 'Tailwind CSS'],
    liveUrl: '#',
  },
  {
    id: 7,
    title: 'საგანმანათლებლო პლატფორმა',
    imageUrl: img7,
    description: 'ონლაინ კურსებისა და ვიდეო გაკვეთილების პორტალი პროგრესის თრექინგის სისტემით.',
    techStack: ['React', 'GraphQL', 'Stripe', 'TypeScript', 'Next.js'],
    liveUrl: '#',
  },
  {
    id: 8,
    title: 'ამინდის პროგნოზის აპი',
    imageUrl: img8,
    description: 'ადგილმდებარეობისა და ძიების საფუძველზე ამინდის დეტალური პროგნოზის აპლიკაცია ვიზუალური იკონკებით.',
    techStack: ['React', 'OpenWeatherMap API', 'Tailwind CSS'],
    liveUrl: '#',
  },
];