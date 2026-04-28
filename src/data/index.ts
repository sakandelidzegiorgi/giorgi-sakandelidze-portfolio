// src/data/index.ts

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
    imageUrl: 'src/assets/1.jpg',
    description: 'სრულფასოვანი ელექტრონული კომერციის ვებ-საიტი მომხმარებლის ავტორიზაციით, კალათით და გადახდის სისტემით.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js'],
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'სოციალური მედიის დაშბორდი',
    imageUrl: 'src/assets/2.jpg',
    description: 'ინტერაქტიული პანელი სოციალური ქსელების ანალიტიკისა და მართვისთვის რეალურ დროში.',
    techStack: ['React', 'D3.js', 'Firebase', 'Next.js'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'უძრავი ქონების პორტალი',
    imageUrl: 'src/assets/3.jpg',
    description: 'ვებ-აპლიკაცია უძრავი ქონების ძიებისა და ფილტრაციისთვის რუკაზე ინტეგრაციით.',
    techStack: ['React', 'TypeScript', 'Google Maps API', 'Tailwind CSS'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'დავალებების მართვის სისტემა',
    imageUrl: 'src/assets/4.jpg',
    description: 'Drag-and-drop ტიპის Kanban დაფა გუნდური პროექტებისა და დავალებების ორგანიზებისთვის.',
    techStack: ['React', 'Beautiful DnD', 'Chakra UI', 'TypeScript'],
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'კრიპტოვალუტის თრექერი',
    imageUrl: 'src/assets/5.jpeg',
    description: 'რეალურ დროში კრიპტოვალუტების ფასების, ტრენდებისა და გრაფიკების მონიტორინგის აპლიკაცია.',
    techStack: ['React', 'WebSocket', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'ბლოგინგის პლატფორმა',
    imageUrl: 'src/assets/6.webp',
    description: 'პერსონალური ბლოგის საიტი Markdown-ის მხარდაჭერით და სუფთა, კითხვაზე ორიენტირებული დიზაინით.',
    techStack: ['React', 'Gatsby', 'MDX', 'Tailwind CSS'],
    liveUrl: '#',
  },
  {
    id: 7,
    title: 'საგანმანათლებლო პლატფორმა',
    imageUrl: 'src/assets/7.jpg',
    description: 'ონლაინ კურსებისა და ვიდეო გაკვეთილების პორტალი პროგრესის თრექინგის სისტემით.',
    techStack: ['React', 'GraphQL', 'Stripe', 'TypeScript', 'Next.js'],
    liveUrl: '#',
  },
  {
    id: 8,
    title: 'ამინდის პროგნოზის აპი',
    imageUrl: 'src/assets/8.avif',
    description: 'ადგილმდებარეობისა და ძიების საფუძველზე ამინდის დეტალური პროგნოზის აპლიკაცია ვიზუალური იკონკებით.',
    techStack: ['React', 'OpenWeatherMap API', 'Tailwind CSS'],
    liveUrl: '#',
  },
];