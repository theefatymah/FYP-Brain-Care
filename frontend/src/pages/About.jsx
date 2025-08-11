

import React, { useState,useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { 
  Brain, 
  BarChart, 
  Shield, 
  Users, 
  Activity, 
  Database,
  Award,
  ScrollText,
  CheckCircle,
  Clock,
  Code,
  Heart,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AboutSection = ({ title, content, icon: Icon }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
  >
    <div className="p-4 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-full mb-4">
      <Icon className="w-8 h-8 text-sky-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <motion.div 
        className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-block p-2 px-4 bg-sky-100 rounded-full text-sky-700 font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enhancing Brain Wellness
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Pioneering 
            <span className="text-sky-600"> Brain Health Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Utilizing cutting-edge AI and neuroscience to unlock insights and optimize cognitive performance for a better brain future.
          </motion.p>
        </motion.div>

        {/* Core Features */}
        <motion.div className="mb-20" variants={staggerContainer}>
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-800"
            variants={fadeInUp}
          >
            Core BrainCare Features
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Our platform is equipped with powerful tools for brain activity analysis, cognitive insights, and personalized improvement plans.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <AboutSection 
              icon={Brain}
              title="Cognitive Analytics"
              content="Analyze brainwave and behavior patterns using AI-powered tools for optimized mental clarity."
            />
            <AboutSection 
              icon={BarChart}
              title="Neuro Insights"
              content="Visual dashboards and reports tailored for brain activity and performance trends."
            />
            <AboutSection 
              icon={Heart}
              title="Brain Wellness"
              content="Strategies and suggestions to improve memory, focus, and emotional balance."
            />
            <AboutSection 
              icon={ScrollText}
              title="Progress Reports"
              content="Detailed tracking of brain improvements and cognitive milestones achieved over time."
            />
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="bg-gradient-to-r from-sky-50 via-indigo-50 to-sky-50 rounded-2xl p-12 text-center shadow-lg"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl font-bold mb-6 text-gray-800"
            variants={fadeInUp}
          >
            Our BrainCare Mission
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed"
            variants={fadeInUp}
          >
            We're committed to redefining brain health monitoring through advanced technology. With a focus on data-driven strategies and neuroscience, BrainCare empowers individuals to better understand, manage, and enhance their brain function every day.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
