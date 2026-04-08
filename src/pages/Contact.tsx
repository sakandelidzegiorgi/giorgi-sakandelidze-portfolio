// src/pages/Contact.tsx
import Section from '../components/Section';
import Button from '../components/Button';

export default function Contact() {
  return (
    <Section title="დამიკავშირდით">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">სახელი</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="თქვენი სახელი"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ელ-ფოსტა</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="example@mail.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">შეტყობინება</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              placeholder="მოკლედ აღწერეთ თქვენი იდეა ან შეკითხვა..."
            ></textarea>
          </div>
          
          <Button variant="primary" className="w-full" type="button">
            გაგზავნა
          </Button>
        </form>
      </div>
    </Section>
  );
}