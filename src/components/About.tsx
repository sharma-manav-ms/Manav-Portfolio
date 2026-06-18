export default function About() {
  const githubRepoLink = "https://github.com/sharma-manav-ms/Manav-Portfolio.git";

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>

        <div className="bg-white rounded-xl border-2 border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm an aspiring Data Analyst with a strong foundation in data visualization, predictive modeling, and business intelligence. Currently pursuing a Bachelor's degree in Computer Science Engineering (AI & ML) at Chandigarh University.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I have successfully built end-to-end analytics solutions, from designing an HR Attrition Dashboard in Power BI to developing a Customer Churn Prediction model deployed on Streamlit. My recent internship at Uniko provided hands-on experience across the complete data pipeline—data cleaning, analysis, and reporting.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            I'm passionate about leveraging data to solve complex business problems and am actively seeking opportunities to contribute to organizations where analytical thinking and problem-solving mindset drive growth. I thrive in fast-moving environments and love collaborating with cross-functional teams.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg bg-blue-50 p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">3+</div>
              <p className="text-slate-700 font-medium">Projects Completed</p>
            </a>
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg bg-blue-50 p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">5+</div>
              <p className="text-slate-700 font-medium">Certifications</p>
            </a>
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg bg-blue-50 p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">20+</div>
              <p className="text-slate-700 font-medium">Tools Mastered</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
