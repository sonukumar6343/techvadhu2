import React from "react";
import projectImage from "../assets/3Dmodelling.png"; // Replace with actual image path
import softwareDevelopment from "../assets/Software development and programming script.png"
import ControllingImage from "../assets/Controlling smart home via app.png"

const ProjectCard = () => {
    const data=[
        {   heading:"Independent Project",
            logo:projectImage,
            title:"Build an OTT platform likeNetflix Engineers",
            content:"Build a highly responsive,seamless video     streaming service.",
            span1:"React JS",
            span2:"Node JS",
            span3:"Reset API",
            span4:"Express JS",
        },
        {   heading:"Guided Project",
            logo:softwareDevelopment,
            title:"Work like Backend Developers Zomato",
            content:"Build a high-scale distributed webbackend for a food ordering app.",
            span1:"MongoDB",
            span2:"Java",
            span3:"Spring Boot",
            span4:"Redis",
        },
        {   heading:"Independent Project",
            logo:ControllingImage,
            title:"Experience building a google news like app",
            content:"Build a fully functional news aggregator like google news.",
            span1:"HTML",
            span2:"CSS",
            span3:"Reset APIs",
            span4:"Flexbox",
        }
    ]
  return (
    <div className="flex flex-col md:flex-row gap-10 mx-auto">
    {data.map((item,index)=>(
        <div className="max-w-md border border-blue-400 rounded-xl shadow-lg p-6 text-center relative bg-white">
      {/* Badge */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-lg font-semibold px-4 py-1 rounded-full">
        {item.heading}
      </div>

      {/* Project Image */}
      <div className="flex justify-center my-4">
        <img src={item.logo} alt="Project" className="h-40 w-auto" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-lg text-gray-600 mt-2">
        {item.content}
      </p>

      {/* Tech Stack Buttons */}
      <div className="flex flex-wrap flex-col gap-10 justify-center  mt-4">
      <div className="flex mx-auto gap-5">
        <span className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-medium">
          {item.span1}
        </span>
        <span className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-medium">
        {item.span2}
        </span>
        </div>

        <div className="flex gap-5 mx-auto">
        <span className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-medium">
        {item.span3}
        </span>
        <span className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm font-medium">
        {item.span4}
        </span>
        </div>
      </div>
    </div>
    ))
    }
    </div>
  );
};

export default ProjectCard;
