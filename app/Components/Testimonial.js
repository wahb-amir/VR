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
    <div id="testimonial">
      <h1 className="text-6xl mt-5 mb-6 font-bold font-serif">
        What people are saying
      </h1>
    </div>
  );
};

export default Testimonial;
