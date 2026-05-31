export default function Experience() {
  const experiences = [
    {
      title: 'Data Science & Analytics Trainee Intern',
      company: 'Uniko',
      period: 'Jan 2026 - Apr 2026',
      icon: '💼',
      description: 'Completed training and internship in Data Science and Analytics across the full data pipeline.',
      achievements: [
        'Worked with Python, SQL, Excel, and Power BI for data analysis and visualization',
        'Performed data cleaning, preprocessing, and exploratory data analysis (EDA)',
        'Developed dashboards and reports to communicate key insights',
        'Gained hands-on experience with end-to-end analytics workflows'
      ]
    },
    {
      title: 'NSS Volunteer',
      company: 'National Service Scheme',
      period: '2023 - Present',
      icon: '🤝',
      description: 'Active volunteer coordinating social initiatives and community engagement.',
      achievements: [
        'Coordinated volunteer activities involving 50+ participants',
        'Organized social awareness and environmental campaigns',
        'Developed teamwork, communication, and leadership skills',
        'Managed events and community outreach programs'
      ]
    },
    {
      title: 'Active Member',
      company: 'Department of Art & Cultural Affairs',
      period: '2023 - Present',
      icon: '🎭',
      description: 'Contributing to cultural and artistic initiatives at the university.',
      achievements: [
        'Assisted in planning and organizing cultural events and college festivals',
        'Collaborated with cross-functional teams to ensure smooth event execution',
        'Developed teamwork, communication, and event management skills',
        'Coordinated with various departments for successful event delivery'
      ]
    }
  ];

  const educations = [
    {
      degree: "Bachelor's in Computer Science Engineering (AI & ML)",
      institution: 'Chandigarh University, Mohali',
      period: 'Session: 2023 - 2027',
      details: 'Specialized in Artificial Intelligence and Machine Learning with strong focus on data science and analytics'
    },
    {
      degree: 'Senior Secondary (CBSE)',
      institution: 'Milton Public School, Agra',
      period: 'Session: 2021 - 2022',
      details: 'Completed secondary education with focus on science stream'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Experience & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-300 animate-fade-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{exp.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900">{exp.title}</h4>
                      <p className="text-blue-600 font-semibold text-sm mb-1">{exp.company}</p>
                      <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                      <p className="text-slate-600 text-sm mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-blue-500 font-bold mt-1 flex-shrink-0">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Education</h3>
            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${(experiences.length + idx) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">🎓</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-blue-600 font-semibold text-sm mb-1">{edu.institution}</p>
                      <p className="text-slate-500 text-sm mb-3">{edu.period}</p>
                      <p className="text-slate-700 text-sm">{edu.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
