// src/pages/Contact.tsx
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../components/Section';
import Button from '../components/Button';

export default function Contact() {
  // ბრაუზერის სათაურის განახლება
  useEffect(() => {
    document.title = 'კონტაქტი | გიორგის პორტფოლიო';
  }, []);

  // Formik-ის ლოგიკა და Yup ვალიდაცია
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    // ვალიდაციის სქემა
    validationSchema: Yup.object({
      name: Yup.string()
        .required('სახელი სავალდებულოა'),
      email: Yup.string()
        .email('არასწორი ელ-ფოსტის ფორმატი')
        .required('ელ-ფოსტა სავალდებულოა'),
      message: Yup.string()
        .min(10, 'შეტყობინება უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს')
        .required('შეტყობინება სავალდებულოა')
    }),
    // გაგზავნის ფუნქცია
    onSubmit: (values, { resetForm }) => {
      console.log('გაგზავნილი მონაცემები Formik-იდან:', values);
      alert(`მადლობა ${values.name}, თქვენი შეტყობინება მიღებულია!`);
      resetForm(); // ველების გასუფთავება
    }
  });

  return (
    <Section title="დამიკავშირდით">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
        
        {/* onSubmit უკვე Formik-ს მიჰყავს */}
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          
          {/* სახელის ველი */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">სახელი</label>
            <input 
              type="text" 
              id="name" 
              // getFieldProps თავისთავად მოიცავს: value, onChange, onBlur
              {...formik.getFieldProps('name')}
              className={`w-full px-4 py-2 border rounded-md outline-none transition-all focus:ring-2 focus:ring-primary ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="თქვენი სახელი"
            />
            {/* ერორის გამოჩენა მხოლოდ მაშინ, თუ ველს შეეხო (touched) და ერორი აქვს */}
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>
          
          {/* ელ-ფოსტის ველი */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ელ-ფოსტა</label>
            <input 
              type="email" 
              id="email" 
              {...formik.getFieldProps('email')}
              className={`w-full px-4 py-2 border rounded-md outline-none transition-all focus:ring-2 focus:ring-primary ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="example@mail.com"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>
          
          {/* შეტყობინების ველი */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">შეტყობინება</label>
            <textarea 
              id="message" 
              rows={4} 
              {...formik.getFieldProps('message')}
              className={`w-full px-4 py-2 border rounded-md outline-none resize-none transition-all focus:ring-2 focus:ring-primary ${
                formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="მოკლედ აღწერეთ თქვენი იდეა ან შეკითხვა..."
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>
            )}
          </div>
          
          <Button variant="primary" className="w-full" type="submit">
            გაგზავნა
          </Button>
        </form>
      </div>
    </Section>
  );
}