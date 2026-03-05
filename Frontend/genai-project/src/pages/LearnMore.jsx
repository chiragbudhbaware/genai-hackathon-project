import { motion } from "framer-motion";
import { FileText, Zap, Brain } from "lucide-react";
import "./LearnMore.css";

const features = [
  {
    icon: <FileText size={32} />,
    title: "Smart PDF Analysis",
    desc: "Upload any PDF document and our system automatically analyzes its content using advanced AI models.",
    example: "Example: Upload a research paper and instantly understand the key ideas."
  },
  {
    icon: <Zap size={32} />,
    title: "Instant AI Summaries",
    desc: "Generate concise summaries from long PDF documents within seconds.",
    example: "Example: Convert a 20-page document into a short summary instantly."
  },
  {
    icon: <Brain size={32} />,
    title: "Powered by Large Language Models",
    desc: "Our system uses powerful LLM technology to understand context and extract the most important insights from documents."
  }
];

const LearnMore = () => {
  return (
    <section id="learn-more" className="learn-more">

      {/* Title Section */}
      <motion.div
        className="learnmore-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>How Our AI PDF Summarizer Works</h2>

        <p>
          Our system uses Artificial Intelligence and Large Language Models
          to read PDF documents and generate meaningful summaries,
          helping users quickly understand long content.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="featuress-grid">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card-manage"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >

            <div className="icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p className="description">
              {feature.desc}
            </p>

            {feature.example && (
              <p className="example">
                {feature.example}
              </p>
            )}

          </motion.div>
        ))}

      </div>

      {/* Workflow Section */}
      <motion.div
        className="workflow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >


      </motion.div>

    </section>
  );
};

export default LearnMore;