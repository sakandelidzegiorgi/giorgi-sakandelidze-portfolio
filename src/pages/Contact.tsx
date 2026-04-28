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
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* ფორმის ბლოკი */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">მომწერეთ</h3>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>

            {/* სახელის ველი */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">სახელი</label>
              <input
                type="text"
                id="name"
                {...formik.getFieldProps('name')}
                className={`w-full px-4 py-2 border rounded-md outline-none transition-all focus:ring-2 focus:ring-primary ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="თქვენი სახელი"
              />
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
                className={`w-full px-4 py-2 border rounded-md outline-none transition-all focus:ring-2 focus:ring-primary ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
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
                className={`w-full px-4 py-2 border rounded-md outline-none resize-none transition-all focus:ring-2 focus:ring-primary ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
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

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">საკონტაქტო ინფორმაცია</h3>

          <div className="mb-6 space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">მისამართი</p>
                <p className="text-sm text-gray-600 mt-1">საქართველო, ქუთაისი, შოთა რუსთაველის 120ა/28</p>
              </div>
            </div>
          </div>

          <div className="flex-grow min-h-[300px] overflow-hidden rounded-md border border-gray-200 shadow-sm relative">
            <iframe
              src="https://maps.google.com/maps?q=Kutaisi,%20Georgia&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kutaisi Map"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}