import React from "react";
import profileImage from "../assets/Mask group.png"; // Update the path accordingly
import { FaMapMarkerAlt, FaBriefcase, FaUsers } from "react-icons/fa";
import { MdPrint } from "react-icons/md";

const ProfileCard = () => {
  return (
    <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
      {/* Outer Circle */}
      <div className="absolute w-72 h-72 rounded-full border-2 border-gray-200 flex items-center justify-center">
        {/* Inner Circle */}
        <div className="w-56 h-56 rounded-full bg-orange-500 flex items-center justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-5 left-10 bg-white shadow-lg p-2 rounded-full flex items-center justify-center border border-gray-200">
        <FaMapMarkerAlt className="text-orange-500 text-xl" />
      </div>

      <div className="absolute top-16 right-5 bg-white shadow-lg p-2 rounded-full flex items-center justify-center border border-gray-200">
        <MdPrint className="text-orange-500 text-xl" />
      </div>

      <div className="absolute bottom-10 left-5 bg-white shadow-lg p-2 rounded-full flex items-center justify-center border border-gray-200">
        <FaUsers className="text-orange-500 text-xl" />
      </div>

      <div className="absolute bottom-5 right-10 bg-white shadow-lg p-2 rounded-full flex items-center justify-center border border-gray-200">
        <FaBriefcase className="text-orange-500 text-xl" />
      </div>
    </div>
  );
};

export default ProfileCard;
