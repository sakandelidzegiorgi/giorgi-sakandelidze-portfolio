// src/types/index.ts

// პორტფოლიოს პროექტის მონაცემების სტრუქტურა
export interface Project { 
  id: number; 
  title: string; 
  description: string; 
  imageUrl: string; 
  techStack: string[]; 
  liveUrl?: string; // ? ნიშნავს, რომ ეს ველი არასავალდებულოა (შეიძლება პროექტს არ ჰქონდეს ლაივ ლინკი)
}

// ნავიგაციის ლინკების სტრუქტურა
export interface NavLink { 
  label: string; 
  path: string; 
}

// საკონტაქტო ფორმის მონაცემების სტრუქტურა
export interface ContactForm { 
  name: string; 
  email: string; 
  message: string; 
}