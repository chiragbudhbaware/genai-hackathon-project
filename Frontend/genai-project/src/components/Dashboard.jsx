import React, { useState } from "react";
import "./dashboard.css";

function Dashboard() {

  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const generateSummary = () => {
    if (!file) {
      alert("Please upload a PDF first");
      return;
    }

    // Temporary dummy summary
    setSummary(
      "This is an AI generated summary of the uploaded document. " +
      "Your backend LLM will analyze the PDF content and generate important insights here."
    );
  };

  return (
    <div className="dashboard-container">

      {/* Navbar */}
      <nav className="dashboard-navbar">
        <h2>SigmaGPT Dashboard</h2>
        <button className="logout-btn">Logout</button>
      </nav>

      {/* Upload Section */}
      <div className="upload-section">

        <h1>Upload Your PDF</h1>
        <p>Upload handwritten notes or documents to generate AI summary.</p>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
        />

        {file && (
          <p className="file-name">
            Uploaded File: {file.name}
          </p>
        )}

        <button
          className="summary-btn"
          onClick={generateSummary}
        >
          Generate Summary
        </button>

      </div>

      {/* Summary Section */}
      {summary && (
        <div className="summary-box">
          <h2>AI Generated Summary</h2>
          <p>{summary}</p>
        </div>
      )}
      <footer className="footer">

        <p>© {new Date().getFullYear()} AI-Powered Pdf Summarizer. All rights reserved.</p>


      </footer>

    </div>
  );
}

export default Dashboard;