import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa"; // Importing an icon similar to the image
import { CiYoutube } from "react-icons/ci";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";

const MentorshipCard = () => {
  const data=[
    {
      icon:FaChalkboardTeacher,
      title:"Mentored by the industry's top 1%",
      content:"Learn exclusive insights on things you didn't learn in school",
    },
    {
      icon:CiYoutube,
      title:"Learn in live classes",
      content:"Solve real-life problems, learn how to hack it with the experts!"

    },
    {
      icon:RiContactsBook2Line,
      title:"Level up your resume",
      content:"Shines out your resume in a sea of candidates. Ace the interview!"
    },
    {
      icon:FaRegBuilding ,
      title:"Secure a job in a dream company",
      content:"We'll help you get shortlisted by top recruiters, effortlessly!"
    }

  ]
  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-30">
    {data.map((item,index)=>(
      <div className="max-w-lg bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
      {/* Icon */}
      <div className="flex justify-center mb-4 text-blue-800 text-3xl p-4 ">
        <item.icon size={80} />
      </div>

      {/* Heading */}
      <h3 className="text-2xl mt-5 font-bold text-gray-900">
        {item.title}
      </h3>

      {/* Description */}
      <p className="font-medium text-lg text-gray-600 mt-8">
        {item.content}
      </p>
    </div>
    ))}
    

    </div>
  );
};

export default MentorshipCard;
