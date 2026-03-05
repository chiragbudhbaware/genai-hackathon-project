
import './landing.css'
import LearnMore from './LearnMore';
import { useNavigate } from "react-router-dom";

const handleLearnMore = () => {
  document.getElementById("learn-more")?.scrollIntoView({
    behavior: "smooth",
  });
};
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">AI-POWERED PDF SUMMARIZER</h2>
        <button onClick={() => navigate("/login")} className="login-btn">Login</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Summarize Your PDFs with the Power of AI</h1>
        <p>
          Upload any PDF and instantly get a clear and concise summary using
          advanced Large Language Models. Save time by extracting the most
          important insights from long documents in seconds.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => navigate("/login")}>Get Started</button>
          <button className="secondary-btn" onClick={handleLearnMore}>Learn More</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3> AI-Powered Summarization</h3>
          <p>Get accurate and comprehensive summaries of your PDFs.</p>
        </div>

        <div className="feature-card">
          <h3> Fast & Simple</h3>
          <p >Summarize your PDFs in seconds with our intuitive interface.</p>
        </div>

        <div className="feature-card">
          <h3> Responsive</h3>
          <p>Works smoothly on desktop and mobile devices.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        <p>© {new Date().getFullYear()} AI-POWERED PDF SUMMARIZER. All rights reserved.</p>


      </footer>
    </div>
    <LearnMore />
  </> 
  );
};

     

export default LandingPage;