export default function Skills() {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: '⚙️',
      skills: ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel', 'Google Colab', 'DAX', 'Power Query'],
      color: 'blue'
    },
    {
      title: 'Data Analysis',
      icon: '📊',
      skills: ['EDA', 'Data Cleaning', 'Statistical Analysis', 'Data Interpretation', 'Trend Identification', 'Report Automation', 'KPI Development', 'Data Storytelling'],
      color: 'emerald'
    },
    {
      title: 'Machine Learning',
      icon: '🤖',
      skills: ['Predictive Modeling', 'XGBoost', 'Scikit-learn', 'Feature Engineering', 'Model Evaluation', 'SHAP', 'Pandas', 'NumPy'],
      color: 'purple'
    },
    {
      title: 'Professional',
      icon: '💼',
      skills: ['Team Collaboration', 'Communication', 'Problem Solving', 'Critical Thinking', 'Conflict Resolution', 'Independent Judgment', 'Adaptability', 'Leadership'],
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700'
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                      colorClasses[category.color as keyof typeof colorClasses]
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border-2 border-blue-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Certified Data Analyst (Uniko)',
              'Data Science Foundations - Level 2 (IBM)',
              'Microsoft Azure Data Fundamentals',
              'The Structured Query Language (Coursera)',
              'Learning Python from Beginner to Expert (LinkedIn)',
              'Google Data Analytics Certificate'
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
