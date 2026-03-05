import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-6 text-white">
      <h1 className="text-xl font-bold">NoteMind AI</h1>

      <div className="space-x-8 text-gray-300">
        <a href="#">Docs</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </div>

      <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
        Login
      </button>
    </nav>
  );
}