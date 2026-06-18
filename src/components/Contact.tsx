import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to discuss how I can contribute data-driven solutions to your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Contact Card 1 */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-8 hover:shadow-lg transition-all animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail size={20} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900">Email</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-600 mb-1">Primary</p>
                <a href="mailto:sharmamanav4363@gmail.com" className="text-blue-600 font-semibold hover:underline">
                  sharmamanav4363@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-8 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone size={20} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900">Phone</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-600 mb-1">Contact Number</p>
                <a href="tel:+917668491601" className="text-blue-600 font-semibold hover:underline">
                  +91 7668491601
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-white rounded-xl border-2 border-slate-200 p-8 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900">Location</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-600 mb-1">Based In</p>
                <p className="text-blue-600 font-semibold">Chandigarh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Links */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-8 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Professional Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/sharma-manav-ms/?isSelfProfile=false"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Linkedin size={24} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-bold text-slate-900">LinkedIn</p>
                <p className="text-sm text-slate-600">Connect with me</p>
              </div>
            </a>
            <a
              href="https://github.com/sharma-manav-ms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                <Github size={24} className="text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-bold text-slate-900">GitHub</p>
                <p className="text-sm text-slate-600">View my code</p>
              </div>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I'm excited to bring my analytical skills and fresh perspective to help drive data-driven decision making in your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:sharmamanav4363@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
