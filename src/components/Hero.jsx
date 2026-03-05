import React from "react";

export default function Hero() {
  return (
    <div className="text-center text-white mt-24 px-6">

      <div className="bg-purple-800/30 inline-block px-4 py-1 rounded-full text-sm">
        AI Study Assistant
      </div>

      <h1 className="text-6xl font-bold mt-6 leading-tight">
        Understand Your
        <br />
        Handwritten Notes Instantly
      </h1>

      <p className="text-gray-400 mt-6 max-w-xl mx-auto">
        Upload handwritten PDFs and ask questions. The AI reads your notes,
        finds the answer, and shows the exact page reference.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Upload Notes
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded-xl">
          Try Demo
        </button>
      </div>
    </div>
  );
}