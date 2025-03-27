import React from 'react'
// import Learner from '../assets/Learners (9) 1.png'
import PlacementGuarantee from '../components/PlacementGuranttess'
import { RiMentalHealthLine } from "react-icons/ri";
import { IoChevronForward } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Group95 from "../assets/Group 95.png"
import { SiTicktick } from "react-icons/si";

import image  from "../assets/image.png"
import Group28 from "../assets/group28.png";
import LearningJourney from "../components/LearningJourney"
import ProfileCircle from "../components/ProfileCircle"
import { IoCreateOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import NetflixCard from "../components/NetflixCard"
import ProjectCard from "../components/ProjectCard"

import WorkLikeProjectsCard from "../components/workLikeProjectCard"
import MentorshipCard from "../components/MentorshipCard"
import FAQ from "../components/Faq"

const Home = () => {
 
  
  return (
    <div className=" m-1">
    <div className="h-20">
      Navbar
    </div>

      
      

            {/* component1 */}
                <div className="m-4 md:m-8 flex flex-col md:flex-row max-w-full gap-5 items-center">

    {/* 1col */}
    <div className="flex flex-col gap-10 md:gap-20 w-full md:w-1/2">
      {/* software development text */}
      <div className="font-extrabold text-3xl md:text-6xl text-black p-3 m-2 leading-tight">
        <span className="mr-2 md:mr-4 mb-2 md:mb-4 block md:inline">Software</span>
        <span className="block md:inline">Development</span>
      </div>

      <div className="font-medium text-lg md:text-2xl text-gray-400 m-3 md:max-w-full">
        Software development is the process of creating, maintaining, and improving computer programs and applications. It involves stages like planning, design, coding, testing, deployment, and maintenance. Learn with Real Work-Ex. Join the best product-based companies with guaranteed placement.
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* 2 buttons */}
        <button className="text-blue-500 border-2 rounded-2xl border-blue-500 p-4 w-full md:w-1/2">
          Download Curriculum
        </button>
        <button className="text-white bg-blue-500 border-2 rounded-2xl p-4 w-full md:w-1/2">
          Apply & Start For Free
        </button>
      </div>
    </div>

    {/* image div */}
    <div className="bg-[url('/Learners.png')] bg-contain bg-no-repeat bg-center w-full md:w-1/2 h-[250px] md:h-[500px] lg:h-[700px] relative">
      {/* Content inside the image */}
      <div className="border-2 rounded-2xl m-5 md:my-32 px-4 absolute top-5 md:top-20 left-5 md:left-10 w-2/3 md:w-1/3 text-center bg-white border-gray-300">
        <div className="p-3 font-medium text-lg md:text-2xl text-black">
          Learners
        </div>
      </div>

      <div className="border-2 rounded-2xl m-2 px-4 absolute bottom-5 md:bottom-20 right-5 md:right-10 w-2/3 md:w-1/3 text-center bg-white border-gray-300">
        <div className="p-3 font-medium text-lg md:text-2xl text-black">
          Packages Upto
        </div>
      </div>
    </div>
    </div>







      {/* component2 */}
      <PlacementGuarantee/>

      {/* component3 */}
      <div className="flex flex-col m-6 p-6">
      <div className="max-w-full flex flex-col gap-7 ">
        <h2 className="font-bold text-3xl text-[#FD8318]">TRACK OVERVIEW</h2>
        <h1 className="font-extrabold text-4xl ">Experience the new way of learning</h1>
        <p className="text-2xl font-medium text-gray-400">Learn in live classes, solve real - life case studies, get mentored by the top 1% experts. Be the talent every recruiter in the industry is looking for!</p>
      </div>


      {/* card component skill covered section4*/}

     

      <div
  className="m-4 p-2 md:mt-20 border-[5px] border-gray-200 rounded-2xl shadow-2xl relative"
  style={{
    boxShadow:
      "inset 0 4px 15px rgba(0, 0, 255, 0.5), inset 0 4px 15px rgba(0, 255, 255, 0.5)",
  }}
>
  <div className="flex flex-row items-center m-3 p-2 gap-3">
    <RiMentalHealthLine size={80} className="text-blue-600" />
    <div className="text-2xl font-bold text-blue-800">Skills Covered</div>
  </div>

  {/* Skills Section */}
  <div className="flex flex-wrap md:flex-nowrap justify-center text-xl md:text-2xl m-6 gap-8">
    {/* Column 1 */}
    <div className="flex flex-col gap-3">
      {["Linux shell scripting", "DSA", "Spring Boot", "React", "CSS"].map(
        (skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoChevronForward className="text-green-800" />
            <span>{skill}</span>
          </div>
        )
      )}
    </div>

    {/* Column 2 */}
    <div className="flex flex-col gap-3">
      {["Java", "Operating System", "Rest API", "Redux", "MongoDB"].map(
        (skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoChevronForward className="text-green-800" />
            <span>{skill}</span>
          </div>
        )
      )}
    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-3">
      {["Git", "Networks", "Design Patterns", "JavaScript", "CSS"].map(
        (skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoChevronForward className="text-green-800" />
            <span>{skill}</span>
          </div>
        )
      )}
    </div>

    {/* Column 4 */}
    <div className="flex flex-col gap-3">
      {["OOPs", "SQL", "System Design", "HTML", "Express.JS"].map(
        (skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoChevronForward className="text-green-800" />
            <span>{skill}</span>
          </div>
        )
      )}
    </div>
  </div>
</div>





      {/* masterclass wala section  section5 */}

      <div className="flex flex-col md:flex-row gap-5 mt-10 px-4 md:px-10">

  {/* leftwala section */}
  <div className="flex md:w-1/2 justify-center relative">
    <div>
      <img src={Group28} alt="Masterclass" className="w-full object-cover rounded-lg" />
    </div>
  </div>

  {/* rightwala section */}
  <div className="md:w-1/2 flex flex-col gap-4">
    <div className="font-bold text-3xl text-[#FD8318] mt-3">
      MASTERCLASS
    </div>

    <div className="font-extrabold text-4xl">
      Level up your skills, learn from the best
    </div>

    {/* experience with masterclass */}
    <div className="mt-4">
      <div className="flex items-center gap-4">
        <GoGraph size={40} className="text-blue-600" />
        <h2 className="text-3xl font-bold">Experience the masterclass</h2>
      </div>
      <p className="text-2xl font-medium text-gray-400 mt-2">
        Learn with the best
      </p>
    </div>

    <div className="flex flex-col gap-5 mt-4">

      <div className="flex items-start gap-4">
        <IoArrowForwardCircleSharp size={40} className="text-blue-800" />
        <div className="mt-2 font-medium">Learn core concepts from experts in masterclass</div>
      </div>

      <div className="flex items-start gap-4">
        <IoArrowForwardCircleSharp size={40} className="text-blue-800" />
        <div className="mt-2 font-medium">Get a headstart and kickoff your career</div>
      </div>

      <div className="flex items-start gap-4">
        <IoArrowForwardCircleSharp size={40} className="text-blue-800" />
        <div className="mt-2 font-medium">Solve a real-life case study, live with the experts</div>
      </div>

      <div className="flex items-start gap-4">
        <IoArrowForwardCircleSharp size={40} className="text-blue-800" />
        <div className="mt-2 font-medium">Interact with mentors, ask your doubts away</div>
      </div>

    </div>

    <div className="flex flex-col md:flex-row gap-5 mt-4">
      <button className="text-blue-500 border-2 rounded-2xl border-blue-500 p-4 w-full md:w-1/2">
        Contact Us
      </button>
      <button className="text-white border-2 rounded-2xl bg-blue-900 border-blue-900 p-4 w-full md:w-1/2">
        Try masterclass
      </button>
    </div>

  </div>

</div>



      {/* section6 Learning journey at Techvadhu */}

      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 p-5 md:p-10">

{/* Leftwala part */}
<div className="flex flex-col md:w-1/2 w-full m-5 p-3 py-8 gap-10">
  <div className="font-bold text-3xl text-[#FD8318]">MASTERCLASS</div>
  <div className="font-bold text-4xl">Learning journey at Tech Vedhu</div>

  <div>
    <LearningJourney />
  </div>

  <div className="flex flex-col md:flex-row gap-5 md:gap-20">
    <button className="text-blue-500 border-2 rounded-2xl border-blue-500 p-4 w-full md:w-1/3">
      Contact Us
    </button>
    <button className="text-white border-2 rounded-2xl bg-blue-900 border-blue-900 p-4 w-full md:w-1/3">
      Try masterclass
    </button>
  </div>
</div>

{/* Rightwala Part */}
<div className="w-full md:flex-1 flex justify-center items-center">
  <ProfileCircle />
</div>

</div>




      {/* section8 Add on section*/}
      <div className="flex flex-col gap-20 p-5">
  {/* Text Section */}
  <div className="flex flex-col gap-3 text-center md:text-left">
    <div className="font-medium text-2xl">Add-ons (Optional)</div>
    <div className="text-2xl text-gray-500">
      Connect with our career counsellors to know more about these
    </div>
  </div>

  {/* Cards Section */}
  <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center">
    {/* Card 1 */}
    <div className="bg-amber-50 md:w-1/3 w-full rounded-2xl">
      <div className="p-3 bg-blue-900 border-t-2 rounded-t-2xl text-white font-bold flex justify-between items-center">
        10X Developer with AI <span className="text-right">1 Week</span>
      </div>
      {/* Card Content */}
      {["Prompt Engineering", "Code Automation", "Code Generation", "Debugging"].map((text, idx) => (
        <div key={idx} className="flex flex-row gap-5 p-3">
          <SiTicktick size={40} className="text-blue-800" />
          <div className="text-2xl">{text}</div>
        </div>
      ))}
    </div>

    {/* Card 2 */}
    <div className="bg-amber-50 md:w-1/3 w-full rounded-2xl">
      <div className="p-3 bg-blue-900 border-t-2 rounded-t-2xl text-white font-bold flex justify-between items-center">
        System Design <span className="text-right">3 Weeks</span>
      </div>
      {/* Card Content */}
      {["Load Balancing", "Caching", "NoSQL Databases", "CAP Theorem"].map((text, idx) => (
        <div key={idx} className="flex flex-row gap-5 p-3">
          <SiTicktick size={40} className="text-blue-800" />
          <div className="text-2xl">{text}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Placement Assistance Card */}
  <div className="flex flex-col border-2 border-gray-200 shadow-md bg-white rounded-2xl md:w-3/5 w-full mx-auto">
    <div className="flex flex-col text-2xl gap-4 p-6 text-center md:text-left">
      <div className="font-bold">Tech Vedhu’s Placement Assistance</div>
      <div>Our career counselors are ready to help you whenever you need them</div>
    </div>

    {/* Assistance Cards */}
    <div className="flex flex-col md:flex-row justify-center gap-5 p-5">
      {[
        {
          icon: <IoCreateOutline size={50} className="text-sky-300" />,
          title: "Create a flawless Profile",
          text: "Build strong resumes and social profiles that stand out",
          borderColor: "border-sky-300",
          textColor: "text-sky-300",
        },
        {
          icon: <RiUserSearchLine size={50} className="text-blue-600" />,
          title: "Interview Preparation",
          text: "Ace interviews with ease, practice with experts in our mock interviews",
          borderColor: "border-blue-600",
          textColor: "text-blue-600",
        },
        {
          icon: <MdOutlineContentPasteSearch size={50} className="text-amber-500" />,
          title: "Get your dream job",
          text: "Ace interviews with ease, practice with experts in our mock interviews",
          borderColor: "border-amber-500",
          textColor: "text-amber-500",
        },
      ].map((item, idx) => (
        <div key={idx} className={`flex flex-col border-2 rounded-2xl p-5 items-center shadow-md ${item.borderColor} w-full md:w-1/3`}>
          <div>{item.icon}</div>
          <div className={`text-2xl font-bold ${item.textColor}`}>{item.title}</div>
          <div className="font-medium text-center">{item.text}</div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* section 9 syllabus project and case studies */}
      <div className="m-3 p-6">
      <div className="flex flex-col gap-8">
        <div className="text-3xl font-bold text-amber-500">SYLLABUS</div>
        <div className="text-5xl font-bold mb-20">Projects and Case Studies</div>
        </div>
        {/* card section */}
        <div>
        <NetflixCard/>

        </div>
      </div>

      {/* section10 work experience based learning */}
      <div className="flex  mx-auto p-20 flex-col gap-10">
      <div className="font-bold text-5xl mb-10">Work Experience-Based Learning Approach<br className="mt-10"/>
      To Master In-Demand Developer Skills</div>
      <WorkLikeProjectsCard/>

      </div>


      {/* section11 card */}
      <div className="bg-gray-200 m-5 shadow-md rounded-md p-20 mx-auto">
      <ProjectCard/>
      

      </div>

      <button className="text-blue-500 border-2 rounded-2xl border-blue-500  mx-auto p-4 mt-6 w-1/4">
      Apply & Start For Free 
      </button>

      {/* section12 personalised placement assistance*/}
      <div className="m-5 mt-10 p-2 ">
      <div>
        <h1 className="font-bold text-4xl leading-15 md:w-1/3">Personalised Placement
        Assistance With Assured Referrals</h1>
        <p className="mt-6 mb-8 text-2xl font-medium md:w-1/2 text-gray-400">Get access to Tech Vedhu Exclusive Career Services that will equip you to use your learnings and skills to land your next job.</p>
      </div>
      <MentorshipCard/>
      <div className="mt-10 flex justify-center items-center md:gap-10  ">
      <button className="text-blue-500 border-2 rounded-2xl border-blue-500 font-bold   p-4 mt-6 w-1/4">
      Learn more
      </button>
      <button className="text-white bg-blue-900 border-2 rounded-2xl font-bold  p-4 mt-6 w-1/4">
      Explore programs 
      </button>
      </div>

      </div>

      {/* section13 program fee and scholarship */}
      <div className="m-5 flex flex-col gap-5">
        <h1 className="md:text-5xl text-3xl mt-8 mb-5 font-bold">Program Fee And Scholarships</h1>
        <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white m-4">
      {/* Left Section (EMI Info) */}
      <div className="bg-orange-500 text-white p-6 md:w-1/3 flex flex-col justify-center ">
        <h3 className="text-lg font-semibold uppercase ">EMI As Low As</h3>
        <p className="text-4xl font-bold mt-2">₹ 7,222 <span className="text-xl font-medium">/month</span></p>
        <p className="text-xl mt-1">(For 36 months)</p>
        <p className="text-xl font-medium mt-2">Before Scholarship</p>
      </div>

      {/* Right Section (Details) */}
      <div className="p-6 md:w-2/3 bg-gray-200">
        {/* Free Trial Session */}
        <div className="flex items-start space-x-3">
          <span className="text-blue-600 font-bold">▶</span>
          <div>
            <h4 className="font-bold text-xl">A Free Trial Session</h4>
            <p className="text-gray-600 text-xl">No Fee Required</p>
          </div>
        </div>

        {/* Assured Scholarships */}
        <div className="flex items-start space-x-3 mt-4 text-xl ">
          <span className="text-blue-600 font-bold">▶</span>
          <div>
            <h4 className="font-bold">Assured Scholarships</h4>
            <p className="text-gray-600 ">After Free Trial</p>
          </div>
        </div>

        {/* Success Fee Info */}
        <p className="mt-4 text-black font-bold text-xl">
          Pay the success fee only if you land a job
          <br />
          <span className="font-bold ">within 6 months of placement eligibility date</span>
        </p>

        {/* Fee Details */}
        <p className="text-gray-700 text-xl mt-2">
          Success fee is Rs. <b>19,999</b> if CTC is less than 20 LPA.
          <br />
          Success fee is Rs. <b>39,999</b> if CTC is greater than 20 LPA.
          <br />
          12-month no-cost EMI and 18, 24 & 36-month low-cost EMI available.
        </p>
      </div>
    </div>
      </div>

      <button className="bg-blue-500 text-white border-2 rounded-2xl border-blue-500  mx-auto font-bold p-4 mt-6 w-1/4">
      Apply & Start For Free 
      </button>

      {/* section14 community section */}
      <div>
      <section className="text-center py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-black">
        Join A Community Of 10000+ Tech Professionals
      </h2>
      <p className="text-gray-600 mt-2 text-sm md:text-base">
        <span className="font-semibold">Meet and grow together</span> with a community of passionate developers who have
        taken their careers to new heights with Tech Vedhu.
      </p>

      {/* Second Section */}
      <div className="bg-gray-100 py-10 mt-8">
        <h3 className="text-lg md:text-xl font-semibold text-black">
          Get more insights on how Tech Vedhu can help you crack a full stack or
          backend role in top tech companies
        </h3>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-blue-500 hover:text-white transition">
            Download career Handbook
          </button>
          <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-blue-500 hover:text-white transition">
            Download Placement Stats
          </button>
        </div>
      </div>
    </section>
      </div>

      {/* section15 FAQ */}
      <div className="flex gap-5 flex-col">
      <h1 className="text-3xl font-bold mt-5 mb-6">FAQs</h1>
      <FAQ/>

      </div>

      




      </div>

    </div>
  )
}

export default Home
