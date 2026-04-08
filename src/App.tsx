// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        {/* ეს არის ის "children", რაც MainLayout-ში გადაეცემა */}
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center">მთავარი კონტენტი</h1>
          <p className="text-center text-gray-500 mt-4">
            Header და Footer უკვე თავის ადგილზეა! სცადეთ ეკრანის დაპატარავება მობილური მენიუს სანახავად.
          </p>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;