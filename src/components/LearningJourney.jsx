import React from 'react'
import group79 from "../assets/Group 79.png"
import group80 from "../assets/Group 80.png"
import group82 from "../assets/Group 82(1).png"
import group83 from "../assets/Group 83.png"

const LearningJourney = () => {
    const data=[
        {
            logo:group79,
            title:"Get enrolled in our career track",
            content:"Master the concepts through conceptual videos, reading materials and short quizzes  "
        },

        {
            logo:group80,
            title:"Finish hands on projects and expand your portfolio",
            content:"Solve problems with experts, know the best practices in the industry  "
        },

        {
            logo:group82,
            title:"Build your resume and undergo mock interviews",
            content:"Practice in mock sessions with our experts and ace your interviews with ease "
        },

        {
            logo:group83,
            title:"Land your Dream Job",
            content:"Extensive support from us to get interviews in top companies "
        }
    ]
  return (
    <div className="flex flex-col gap-10">
    
    {data.map((item,index)=>(
        <div
    className="flex flex-row rounded-2xl gap-5 shadow-lg relative border-t-2 border-l-2 border-r-2 border-gray-400" key={index}
    style={{
      borderBottom: "none", // Remove default bottom border
      boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.5)", // White shadow
    }}
  >
    {/* Gradient Border-Bottom */}
    <div
      className="absolute bottom-0 left-0 w-full h-1"
      style={{
        backgroundImage: "linear-gradient(to right, #FFFFFF, #85D6FF)", // Gradient for bottom border
      }}
    ></div>
        <div className="m-4">
        <img src={item.logo}/>
        </div>


        <div className="flex flex-col mt-3 gap-2 ">
        <div className="font-bold text-3xl ">
        {item.title}
        </div>

        <div className="font-medium text-2xl text-gray-400 mb-3 p-2">
        {item.content}
        </div>

        </div>
    </div>

    ))}

    

    
    </div>
  )
}

export default LearningJourney;