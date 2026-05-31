import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'HR Analytics Dashboard',
      description: 'Interactive dashboards analyzing employee attrition, workforce trends, and HR performance metrics.',
      technologies: ['Power BI', 'Tableau', 'Excel', 'Power Query', 'DAX'],
      impact: 'Designed visualizations for attrition analysis, employee demographics, and departmental performance',
      highlights: [
        'Analyzed attrition patterns across departments',
        'Built interactive KPI dashboards',
        'Identified key factors affecting employee retention'
      ],
      color: 'blue',
      icon: '📊',
      date: 'May 2026'
    },
    {
      title: 'Insurance Risk & Claim Analysis',
      description: 'Power BI dashboard analyzing insurance claims data to uncover risk patterns and policy performance.',
      technologies: ['Power BI', 'Excel', 'Power Query', 'DAX'],
      impact: 'Uncovered claim trends and risk patterns supporting data-driven decision making',
      highlights: [
        'Analyzed 10,000+ claim records',
        'Identified high-risk customer segments',
        'Created risk assessment visualizations'
      ],
      color: 'red',
      icon: '🛡️',
      date: 'April 2026'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'ML application using XGBoost to identify at-risk customers based on behavioral and transactional data.',
      technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Streamlit', 'SHAP'],
      impact: 'Achieved accurate churn predictions with 94% accuracy on 284k transactions',
      highlights: [
        'Built ML pipeline with feature engineering',
        'Deployed interactive Streamlit application',
        'Identified top churn factors using SHAP'
      ],
      color: 'emerald',
      icon: '🤖',
      date: 'March 2026'
    }
  ];

  const colorClasses = {
    blue: 'border-t-4 border-t-blue-500 hover:shadow-blue-200',
    red: 'border-t-4 border-t-red-500 hover:shadow-red-200',
    emerald: 'border-t-4 border-t-emerald-500 hover:shadow-emerald-200'
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Data-driven solutions demonstrating analytical expertise and measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl border-2 border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 ${
                colorClasses[project.color as keyof typeof colorClasses]
              } animate-fade-up`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.icon}</div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {project.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{project.description}</p>

              <div className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm font-semibold text-blue-900">Key Impact:</p>
                <p className="text-sm text-blue-800">{project.impact}</p>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-600 mb-3 uppercase">Highlights</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-600 mb-3 uppercase">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  <Github size={16} />
                  View
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
