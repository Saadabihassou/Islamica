import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] text-gray-800 p-6">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-2xl font-semibold mb-2 text-green-500">Page Not Found!</p>
      <p className="text-center mb-6 text-white my-2">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
