
// WorkLikeProjectsCard.jsx
import React from 'react';
import logo1 from "../assets/Group 74.png";
import logo2 from "../assets/Group 75.png";
import logo3 from "../assets/Group 78.png";

const WorkLikeProjectsCard = () => {
  const data = [
    {
      logo: logo1,
      content: "6+ work-like projects & 20+ micro skilling exercises Master fullstack & backend development in a",
      spanContent: "real work-like environment.",
    },
    {
      logo: logo2,
      content: "Live chat support & dedicated success managers 12+ hours of daily live technical support to ensure a smooth & effortless learning experience.",
      spanContent: "effortless learning experience.",
    },
    {
      logo: logo3,
      content: "80+ live guided sessions Mentorship by industry experts from top",
      spanContent: "tech companies.",
    }
  ];

  return (
    <div className="flex flex-wrap md:flex-row justify-center gap-10">
      {data.map((item, index) => (
        <div key={index} className="w-lg bg-white rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center mb-10">
            <img src={item.logo} alt="Icon" className="h-30 w-30" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.content}</h3>
          <p className="text-2xl text-gray-700">
            <span className="text-blue-600 font-bold">{item.spanContent}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkLikeProjectsCard;

