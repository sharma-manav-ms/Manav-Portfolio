import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Open to Data Analytics Opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Manav <span className="text-blue-600">Sharma</span>
            </h1>

            <p className="text-2xl text-slate-600 font-semibold mb-4">
              Data Analyst & BI Developer
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Transforming complex data into actionable insights. Specialized in dashboards, predictive modeling, and business intelligence. Interned at Uniko working across the full data pipeline.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="mailto:sharmamanav4363@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Get In Touch
                <Mail size={18} />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:sharmamanav4363@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="animate-slide-right relative">
            <div className="relative w-80 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-200 overflow-hidden shadow-2xl">
                <img
                  src="/Image.jpeg"
                  alt="Manav Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-lg opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
