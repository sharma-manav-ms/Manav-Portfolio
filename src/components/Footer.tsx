import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
              © {currentYear} Manav Sharma · Data Analyst Portfolio
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Crafted with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex gap-4 text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <span className="text-slate-600">•</span>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
