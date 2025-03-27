import React from 'react';
import Netflix from "../assets/Netflix_2015_logo.svg 1.png";
import Amazon from "../assets/Amazon-Logo 1.png";

export default function StreamFlowCard() {
    const data=[
        {
            logo:Netflix,
            buttonContent:"Fullstack",
            title:"StreamFlow ",
            content:"Build StreamFlow, a sleek UI clone of Netflix. Utilize external APIs to populate home and movie landing pages, focusing on enhancing your front-end development, API integration, and user interface design skills."
        },

        {
            logo:Amazon,
            buttonContent:"Backend",
            title:"Cart Keeper ",
            content:"Craft an advanced backend system for online shopping carts and checkout, ensuring a seamless journey. Learn cart consistency and smooth checkout, echoing top e-commerce platforms' functionality, for a flawless user experience."
        },
    ]
    return (
        <div className="flex flex-row gap-20">

<div className="w-lg p-8 border rounded-lg shadow-lg border-gray-200 bg-blue-100 text-center">
        <h2 className="text-8xl font-bold text-blue-700 my-20">50+</h2>
        <p className="mt-1 text-gray-700 font-medium">Industry grade projects</p>
        <div className="mt-4">
          <span className="px-4 py-2 text-blue-700 bg-white rounded-lg shadow text-sm font-semibold">
            Experience to work on best projects
          </span>
        </div>
      </div>

        {data.map((item,index)=>(
            <div className="max-w-lg p-4 border rounded-lg shadow-lg bg-blue-100 border-gray-300" key={index}>
        <div className="flex justify-center p-4 border border-blue-900 rounded-md bg-white">
          
          <img src={item.logo}/>
        </div>
        <div className="mt-8 mb-8">
          <span className="px-3 py-3  text-white bg-blue-700 rounded-md text-md">{item.buttonContent}</span>
        </div>
        <h2 className="mt-2 text-xl font-bold text-blue-500">{item.title}</h2>
        <p className="mt-4 text-black text-lg">
          {item.content}
        </p>
      </div>
        ))}

     
      </div>
    );
  }
  


      
    

  