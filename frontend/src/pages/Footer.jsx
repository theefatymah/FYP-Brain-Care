import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, Clock, Brain, ExternalLink, ChevronRight, Shield
} from 'lucide-react';
import {
  FaTwitter, FaFacebook, FaLinkedin, FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Virtual Care', href: '/virtual-care' },
    { name: 'About Us', href: '/about' }
  ];

  const services = [
    'Emotion Detection', 'Therapist Support', 'Voice Analytics'
  ];

  return (
    <motion.footer
      className="bg-gradient-to-b from-sky-50 via-white to-slate-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Brain className="text-sky-600" size={28} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
                BrainCare
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">
              Empowering mental wellness through innovative AI solutions and real-time emotional support.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FaTwitter, FaFacebook, FaLinkedin, FaInstagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 bg-sky-100 rounded-xl hover:bg-sky-200"
                >
                  <Icon className="text-sky-700" size={20} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-800 flex items-center gap-2">
              <ExternalLink size={22} className="text-sky-600" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-600 hover:text-sky-700 text-base flex items-center gap-2 group"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={18} className="text-sky-400 group-hover:translate-x-1" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-800 flex items-center gap-2">
              <Shield size={22} className="text-sky-600" />
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="/services"
                    className="text-slate-600 hover:text-sky-700 text-base flex items-center gap-2 group"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={18} className="text-sky-400 group-hover:translate-x-1" />
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-800 flex items-center gap-2">
              <Mail size={22} className="text-sky-600" />
              Contact Us
            </h3>
            <div className="space-y-4">
              {[
                { Icon: Phone, text: '+92 300 1234567' },
                { Icon: Mail, text: 'contact@braincare.ai' },
                { Icon: Clock, text: '24/7 Support' }
              ].map(({ Icon, text }, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-2.5 bg-sky-100 rounded-xl group-hover:bg-sky-200 transition-colors">
                    <Icon className="text-sky-700" size={20} />
                  </div>
                  <span className="text-slate-600 text-base">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sky-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 text-sm flex items-center gap-2">
              <Shield size={16} className="text-sky-600" />
              © 2025 BrainCare. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-slate-600 hover:text-sky-700 text-sm flex items-center gap-2 hover:underline underline-offset-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {policy}
                  <ExternalLink size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
