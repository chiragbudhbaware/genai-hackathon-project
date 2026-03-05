import React from "react";
import { FaFilePdf, FaBolt, FaBrain } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">📄 SigmaGPT</h1>

        <button className="bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-16 px-6">

        <h2 className="text-5xl font-bold mb-4">
          Understand Your <br />
          Handwritten Notes Instantly
        </h2>

        <p className="text-lg opacity-90 mb-10">
          Upload your handwritten notes or PDF documents and get
          AI-powered summaries instantly.
        </p>

        {/* Upload Box */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-xl p-10 max-w-md mx-auto">

          <input
            type="file"
            className="mb-6 w-full text-sm text-white"
          />

          <button className="bg-gradient-to-r from-purple-500 to-purple-700 px-6 py-2 rounded-lg hover:scale-105 transition">
            Upload PDF
          </button>

        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 text-black mt-32 py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          How Our AI PDF Summarizer Works
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Our system uses Artificial Intelligence and Large Language Models
          to analyze PDFs and generate meaningful summaries.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">

            <div className="text-purple-600 text-4xl mb-4">
              <FaFilePdf />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Smart PDF Analysis
            </h3>

            <p className="text-gray-600">
              Upload any PDF and our AI automatically analyzes its content
              using advanced machine learning models.
            </p>

          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">

            <div className="text-purple-600 text-4xl mb-4">
              <FaBolt />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Instant AI Summaries
            </h3>

            <p className="text-gray-600">
              Generate concise summaries from long documents instantly
              with high accuracy.
            </p>

          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">

            <div className="text-purple-600 text-4xl mb-4">
              <FaBrain />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Powered by AI Models
            </h3>

            <p className="text-gray-600">
              Our platform uses powerful Large Language Models to
              understand context and extract important insights.
            </p>

          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-900 text-gray-400">
        © 2026 SigmaGPT — AI PDF Summarizer
      </footer>

    </div>
  );
}

export default App;