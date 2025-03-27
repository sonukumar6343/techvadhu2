import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data=[
    {
        ques:"Who is eligible for the Tech Vedhu fellowship program in software development?"
    },
    {
        ques:"What is the duration of this program?"
    },
    {
        ques:"Is this an online program?"
    },
    {
        ques:"How does the program work?"
    },
    {
        ques:"Are there any live sessions?"
    }
  ]

  return (
    <div className="flex flex-col gap-5">
    {
        data.map((item,index)=>(
            <div 
      className="border border-blue-300 rounded-full p-4 flex justify-between items-center cursor-pointer w-full md:max-w-4/5" key={index}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="mx-12 text-black font-semibold text-sm md:text-2xl">
       {item.ques}
      </p>
      {isOpen ? (
        <Minus className="text-blue-500" size={20} />
      ) : (
        <Plus className="text-blue-500" size={20} />
      )}
    </div>

        ))
    }
    
    </div>
  );
};

export default FAQItem;
