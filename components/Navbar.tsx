// components/NewNavbar.tsx
import React from 'react';
import Link from 'next/link'; // Next.js ke liye

const NewNavbar: React.FC = () => {
  return (
    <nav className="bg-green-700 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-green-300">
            World Peas
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-green-300">Home</Link>
          </li>
          <li>
            <Link href="/who-we-are" className="hover:text-green-300">Who We Are</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NewNavbar;
