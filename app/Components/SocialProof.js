import React from "react";

const SocialProof = () => {
  const caseStudies = [
    {
      metric: "22%",
      title: "Test Score Increase at Northwood High",
      description:
        "A pilot program with 150, 10th graders showed a 22% improvement in biology test scores for students using EduVerse VR compared to control groups.",
      location: "Northwood High",
      link: "#",
    },
    {
      metric: "78%",
      title: "District-Wide Engagement Up by 78%",
      description:
        "After adopting History Voyager, Oak Valley District teachers reported a 78% increase in student participation and active engagement during lessons.",
      location: "Oak Valley District",
      link: "#",
    },
    {
      metric: "35%",
      title: "Lesson Completion Time Reduced by 35%",
      description:
        "At Riverdale Middle, students using 'Math World VR' completed geometry modules 35% faster, allowing teachers to cover more advanced topics.",
      location: "Riverdale Middle",
      link: "#",
    },
  ];

  const accentClasses = [
    "from-blue-500 to-blue-300",
    "from-emerald-500 to-teal-400",
    "from-violet-500 to-pink-400",
  ];

  return (
    <section className="relative py-24 px-6" id="impact">
      

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight font-serif">
            Proven Impact in the Classroom
          </h2>
          <p className="md:text-lg text-md text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. See the results educators are achieving with EduVerse VR.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="h-1 w-28 rounded-full bg-white/5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const accent = accentClasses[index % accentClasses.length];

            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-white/4 backdrop-blur-sm border border-white/6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                <div
                  className={`absolute -top-4 left-6 w-20 h-2 rounded-full bg-gradient-to-r ${accent} opacity-95`}
                  aria-hidden
                />

                <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-white font-extrabold text-2xl mb-6 bg-gradient-to-br ${accent} shadow-md`}>
                  {study.metric}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                  {study.title}
                </h3>

                <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                  {study.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-slate-400">{study.location}</div>

                  <a
                    href={study.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-white/6 hover:bg-white/10 text-white transition-colors"
                  >
                    Read Case Study
                    
                  </a>
                </div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 rounded-full opacity-5 bg-gradient-to-br" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 40%)' }} />
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default SocialProof;
