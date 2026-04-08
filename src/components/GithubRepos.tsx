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
    <Section title="ჩემი GitHub რეპოზიტორიები" darkBg={false}>
      
      {/* 1. Loading სტეიტი */}
      {loading && (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600 font-medium">იტვირთება მონაცემები GitHub-დან...</p>
        </div>
      )}

      {/* 2. Error სტეიტი */}
      {error && (
        <div className="text-center py-8 text-red-600 bg-red-50 rounded-lg max-w-2xl mx-auto border border-red-200">
          <p>⚠️ {error}</p>
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
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-800 truncate">
                {repo.name}
              </h5>
              <p className="mb-4 text-sm font-normal text-gray-600 line-clamp-2 min-h-[40px]">
                {repo.description || 'აღწერა არ არის მითითებული.'}
              </p>
              {/* თუ ენა მითითებულია (მაგ. TypeScript), გამოვაჩენთ ლეიბლს */}
              {repo.language && (
                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded border border-gray-200">
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