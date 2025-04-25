import { motion } from "framer-motion";
import { FaMoneyBillWave, FaChartPie, FaRobot } from "react-icons/fa";
import Hero3D from "../components/Hero3D";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">FinVision</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-cyan-400">
              Features
            </a>
            <a href="#how" className="hover:text-cyan-400">
              How It Works
            </a>
            <a
              href="#cta"
              className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 font-medium transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with 3D */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
        <Hero3D />
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Smarter Money Tracking
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Visualize, control, and optimize your expenses with AI-powered
          insights.
        </motion.p>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <FaMoneyBillWave className="text-cyan-400 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Manual & Smart Input
              </h4>
              <p className="text-gray-300">
                Add transactions or upload statements — we do the rest.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <FaChartPie className="text-cyan-400 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Spending Visualization
              </h4>
              <p className="text-gray-300">
                Track where your money goes with clean and intuitive charts.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <FaRobot className="text-cyan-400 text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">AI Chat Assistant</h4>
              <p className="text-gray-300">
                Ask anything about your finances and get intelligent answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                1. Create Profile
              </h4>
              <p>Sign up, add your income & upload your expense data.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                2. View Insights
              </h4>
              <p>Access charts & summaries powered by real-time AI analysis.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                3. Chat with Gemini
              </h4>
              <p>Ask for trends, suggestions, or budgeting help instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="cta"
        className="py-20 px-6 bg-gradient-to-br from-cyan-500 to-blue-600 text-black text-center"
      >
        <h3 className="text-4xl font-bold mb-6">
          Ready to take control of your money?
        </h3>
        <a
          href="/signup"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Get Started Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center text-gray-400 text-sm">
        © 2025 FinVision. Built for Google Hackathon 🚀
      </footer>
    </div>
  );
}
