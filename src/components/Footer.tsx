import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { trainerInfo } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Ahmed<span className="text-emerald-500">HSE</span></span>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional HSE training and safety consulting. Empowering students and companies with practical safety knowledge and international certifications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><MessageSquare className="w-5 h-5" /></a>
              <a href={`mailto:${trainerInfo.email}`} className="hover:text-emerald-500 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Ahmed</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-500 transition-colors">Training Courses</Link></li>
              <li><Link to="/experience" className="hover:text-emerald-500 transition-colors">Field Experience</Link></li>
              <li><Link to="/certifications" className="hover:text-emerald-500 transition-colors">Certifications</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-6">Popular Training</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses" className="hover:text-emerald-500 transition-colors">NEBOSH IGC</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-500 transition-colors">IOSH Managing Safely</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-500 transition-colors">OSHA 30-Hour</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-500 transition-colors">First Aid & BLS</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-500 transition-colors">Fire Protection</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{trainerInfo.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="break-all">{trainerInfo.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Available for Online Training (Google Meet)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} AhmedHSE. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for Professional HSE Training</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
