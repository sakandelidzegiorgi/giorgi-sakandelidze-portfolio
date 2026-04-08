// შემოგვაქვს ჩვენი ტიპები (Interfaces) types ფაილიდან
import type { Project, NavLink } from '../types/index';

// ნავიგაციის მონაცემები
export const navLinks: NavLink[] = [
  { label: 'მთავარი', path: '/' },
  { label: 'ჩემ შესახებ', path: '/about' },
  { label: 'პორტფოლიო', path: '/portfolio' },
  { label: 'კონტაქტი', path: '/contact' },
];

// პროექტების (პორტფოლიოს) მონაცემები
export const projects: Project[] = [
  {
    id: 1,
    title: 'ონლაინ მაღაზია',
    description: 'თანამედროვე ონლაინ მაღაზია პროდუქტების კატალოგითა და კალათით.',
    imageUrl: 'https://via.placeholder.com/400x250',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'ამინდის აპლიკაცია',
    description: 'რეალურ დროში ამინდის პროგნოზი, სადაც მონაცემები მოდის გარე API-დან.',
    imageUrl: 'https://via.placeholder.com/400x250',
    techStack: ['React', 'API Fetch', 'Tailwind CSS'],
    // აქ liveUrl არ გვაქვს, რაც ნებადართულია, რადგან ტიპებში liveUrl?: string გვიწერია
  }
];