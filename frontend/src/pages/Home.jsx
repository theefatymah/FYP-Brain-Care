import { Link } from 'react-router-dom';
import brainCareImage from '/Brain-Care.jpg?url';
import {
  Brain,
  Sparkles,
  ChevronRight,
  Activity,
  Wand2,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full mx-auto px-6 md:px-12 py-14 bg-gradient-to-br from-sky-50 via-indigo-100 to-blue-100">
      <div className="flex flex-col md:flex-row items-center gap-16">

        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-2"
          >
            <Brain className="text-indigo-800" size={28} />
            <span className="text-sm font-medium bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">
              AI-Powered Wellness
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight text-slate-800"
          >
            <span className="block">Brain</span>
            <span className="block text-sky-600 flex items-center gap-2">
              Care <Sparkles className="text-yellow-400" size={36} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            <span className="font-semibold text-indigo-800">BrainCare</span> is your digital companion for mental health and emotional wellness, driven by artificial intelligence. Access personalized care, expert resources, and insightful guidance — all in one supportive, tech-enabled platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="bg-indigo-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-indigo-800 transition duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
            >
              Explore Services <ChevronRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 flex gap-6 justify-center md:justify-start flex-wrap"
          >
            {[
              { icon: Activity, label: 'Personalized', color: 'text-sky-600' },
              { icon: Wand2, label: 'AI-Enhanced', color: 'text-indigo-600' },
              { icon: Globe, label: 'Global Reach', color: 'text-teal-600' },
              { icon: Lightbulb, label: 'Innovative', color: 'text-yellow-500' },
              { icon: Rocket, label: 'Fast Growth', color: 'text-rose-600' }
            ].map(({ icon: Icon, label, color }, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-300"
              >
                <Icon className={`${color} mb-2`} size={20} />
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full md:w-2/5 relative mt-12 md:mt-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-400 rounded-2xl blur-xl opacity-50" />
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img
              src={brainCareImage}
              alt="BrainCare AI-powered mental health illustration"
              className="w-full h-auto object-fill rounded-md bg-white p-0.5 shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="absolute -bottom-2 -right-14 bg-white p-4 rounded-2xl shadow-lg z-20 hidden md:flex items-center gap-3"
            whileHover={{
              scale: 1.05,
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-indigo-100 p-2 rounded-full">
              <Brain className="text-indigo-800" size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-800">Smart BrainCare</div>
              <div className="text-xs text-gray-600">AI-powered solutions</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;







