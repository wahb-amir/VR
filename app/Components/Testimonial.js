import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
      name: "John Doe",
      company: "Stellar Solutions",
    },
    {
      quote:
        "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
      name: "Jane Smith",
      company: "Blue Horizon Technologies",
    },
    {
      quote:
        "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
      name: "David Johnson",
      company: "Quantum Innovations",
    },
    {
      quote:
        "Working with the team was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
      name: "Ronee Brown",
      company: "Fusion Dynamics",
    },
    {
      quote:
        "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
      name: "Michael Wilson",
      company: "Visionary Creations",
    },
    {
      quote:
        "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
      name: "Emily Davis",
      company: "Synergy Systems",
    },
  ];

  return (
    <section id="testimonial" className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h2 className="md:text-4xl text-2xl font-bold font-serif">
          What people are saying
        </h2>
        <p className="text-sm text-gray-300 mt-2 max-w-2xl mx-auto">
          Real feedback from clients who trusted us — concise, honest, and
          glowing.
        </p>
      </header>

     
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {testimonials.map((review, idx) => (
          <article
            key={`${review.name}-${idx}`}
            className="flex flex-col justify-between p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm h-full"
            aria-label={`Testimonial from ${review.name}`}
          >
            <div className="mb-4">

              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
               <span className="text-orange-500 text-3xl">“</span>
                {review.quote}
                <span className="text-orange-500 text-3xl">”</span>
              </p>
            </div>

            <footer className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-100">
                  {review.name}
                </p>
                <p className="text-xs text-gray-400">{review.company}</p>
              </div>

              <div
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/90 font-medium"
                aria-hidden
              >
                {review.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
            </footer>
          </article>
        ))}
      </main>
    </section>
  );
};

export default Testimonial;
