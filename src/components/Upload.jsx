import React from "react";

export default function Upload() {
  return (
    <div className="flex justify-center mt-24">

      <div className="border border-purple-600 rounded-xl p-12 text-center w-[500px] bg-black/30 backdrop-blur-lg">

        <h2 className="text-white text-2xl font-semibold mb-6">
          Upload Your Handwritten PDF
        </h2>

        <input type="file" className="text-white mb-6" />

        <button className="bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-700">
          Upload
        </button>

      </div>

    </div>
  );
}