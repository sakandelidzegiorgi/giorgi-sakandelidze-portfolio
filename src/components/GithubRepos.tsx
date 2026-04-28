// src/components/GithubRepos.tsx
import { useState, useEffect } from 'react';
import Section from './Section';

// ვქმნით ტიპს იმ მონაცემებისთვის, რასაც GitHub დაგვიბრუნებს
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // შენი GitHub username
  const githubUsername = 'sakandelidzegiorgi'; 

  useEffect(() => {
    // მოგვაქვს ბოლო 6 განახლებული რეპოზიტორია
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`)
      .then(res => {
        if (!res.ok) throw new Error('პროფილი ვერ მოიძებნა');
        return res.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError('მონაცემები ვერ ჩაიტვირთა. გთხოვთ სცადოთ მოგვიანებით.');
        setLoading(false);
      });
  }, []);

  return (
    // Section-ს ვუთხარით, რომ მუქი ფონი (darkBg={true}) გამოიყენოს
    <Section title="ჩემი GitHub რეპოზიტორიები" darkBg={true}>
      
      {/* 1. Loading სტეიტი - განახლებული მუქი თემისთვის */}
      {loading && (
        <div className="text-center py-16">
          {/* Spinner ანიმაცია */}
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-t-2 border-blue-500"></div>
          <p className="mt-6 text-slate-400 font-medium tracking-wide">იტვირთება მონაცემები GitHub-დან...</p>
        </div>
      )}

      {/* 2. Error სტეიტი - შეესაბამება მუქ თემას (red/slate კონტრასტი) */}
      {error && (
        <div className="text-center py-8 px-6 text-red-400 bg-red-900/10 rounded-2xl max-w-2xl mx-auto border border-red-900/30 backdrop-blur-sm">
          <p className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {error}
          </p>
        </div>
      )}

      {/* 3. წარმატებით ჩატვირთული მონაცემები */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              // Glassmorphism და Hover ეფექტები (მსგავსი Card.tsx-ის)
              className="group block p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-start justify-between mb-4">
                {/* სათაური */}
                <h5 className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors truncate pr-4">
                  {repo.name}
                </h5>
                {/* GitHub იკონკა (SVG) - მხოლოდ დეკორაციისთვის */}
                <svg className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>

              {/* აღწერა */}
              <p className="mb-6 text-sm font-normal text-slate-400 line-clamp-2 min-h-[40px] leading-relaxed">
                {repo.description || 'აღწერა არ არის მითითებული.'}
              </p>

              {/* ტექნოლოგიის ლეიბლი (ჩვენი ახალი Badge სტილით) */}
              {repo.language && (
                <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                  {repo.language}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}