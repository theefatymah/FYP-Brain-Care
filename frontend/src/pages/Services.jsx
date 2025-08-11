import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Cpu, Eye, Activity, Check, ArrowRight, Shield, Clock, BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features, path }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-lg border hover:border-blue-200 transition-all duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-blue-100 p-3 rounded-full">
        <Icon className="text-blue-600 w-6 h-6" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 text-sm text-gray-700">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2">
          <Check className="text-green-500 w-4 h-4" /> {feature}
        </li>
      ))}
    </ul>
    <div className="mt-5 text-right">
      <Link
        to={path}
        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

const FeatureBox = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
      <Icon className="text-blue-600 w-5 h-5" />
    </div>
    <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </motion.div>
);

const BrainServices = () => {
  const services = [
    {
      icon: Cpu,
      title: "Cognitive Load Tracking",
      description: "Monitor brain activity to detect mental fatigue and focus drop.",
      features: [
        "Real-time cognitive stress analysis",
        "Fatigue & overload detection",
        "Neuro-performance alerts",
        "Adaptive session recommendations"
      ],
      path: "/brain/cognitive-load"
    },
    {
      icon: Activity,
      title: "Brainwave Mapping",
      description: "Visualize and decode brainwaves using wearable EEG.",
      features: [
        "Alpha/Beta/Theta/Delta pattern recognition",
        "Meditation & concentration insights",
        "EEG signal interpretation",
        "Neurofeedback tools"
      ],
      path: "/brain/brainwave-mapping"
    },
    {
      icon: Eye,
      title: "Neuro Focus Analytics",
      description: "Measure attention span, distractions, and mental clarity.",
      features: [
        "Eye-movement tracking",
        "Attention heatmaps",
        "Focus retention graphs",
        "Distraction score & suggestions"
      ],
      path: "/brain/focus-analysis"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Brain Insights",
      description: "Trained on top neuro datasets"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "HIPAA & GDPR compliant"
    },
    {
      icon: Clock,
      title: "Real-Time Alerts",
      description: "Instant feedback based on brain patterns"
    },
    {
      icon: BarChart3,
      title: "Progress Reports",
      description: "Track neuro-growth over time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium mb-3">
            Brain Intelligence Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Unlock the Power of Your Brain
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our cutting-edge AI brain platform delivers real-time cognitive tracking, EEG analysis,
            and neurofeedback systems built to enhance your brain performance.
          </p>
        </motion.div>

        {/* Brain Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose BrainCare AI?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            From neural feedback to cognitive intelligence – everything backed by science and driven by technology.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <FeatureBox key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrainServices;

