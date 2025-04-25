import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function AIHighlightCard() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-cyan-700 to-gray-800 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border border-cyan-400 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-cyan-400 p-4 rounded-full shadow-lg"
        >
          <FaRobot className="text-3xl text-black" />
        </motion.div>
      </div>
      <h4 className="text-xl font-semibold mt-10 mb-2 text-cyan-300">
        AI Chat Assistant
      </h4>
      <p className="text-gray-200">
        Ask anything about your finances and get intelligent, real-time insights
        powered by Gemini AI.
      </p>
    </motion.div>
  );
}
