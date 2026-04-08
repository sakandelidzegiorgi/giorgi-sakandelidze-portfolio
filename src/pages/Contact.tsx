// src/pages/Contact.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import type { ContactForm } from '../types/index';

export default function Contact() {
  // 1. useState ფორმის მონაცემებისთვის
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  // 2. ფუნქცია, რომელიც იჭერს ველში ჩაწერილ ტექსტს და ანახლებს state-ს
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // ინახავს ძველ მონაცემებს (...form) და ანახლებს მხოლოდ შეცვლილ ველს
    setForm({ ...form, [id]: value });
  };

  // 3. ფორმის გაგზავნის ფუნქცია
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // არ აძლევს გვერდს დარესტარტების (Refresh) საშუალებას
    console.log('გაგზავნილი მონაცემები კონსოლში:', form);
    alert(`მადლობა ${form.name}, თქვენი შეტყობინება მიღებულია!`);
    
    // გაგზავნის შემდეგ ვასუფთავებთ ველებს
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section title="დამიკავშირდით">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
        {/* onSubmit-ზე ვკიდებთ ჩვენს ფუნქციას */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">სახელი</label>
            <input 
              type="text" 
              id="name" 
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="თქვენი სახელი"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ელ-ფოსტა</label>
            <input 
              type="email" 
              id="email" 
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="example@mail.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">შეტყობინება</label>
            <textarea 
              id="message" 
              rows={4} 
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              placeholder="მოკლედ აღწერეთ თქვენი იდეა ან შეკითხვა..."
            ></textarea>
          </div>
          
          <Button variant="primary" className="w-full" type="submit">
            გაგზავნა
          </Button>
        </form>
      </div>
    </Section>
  );
}