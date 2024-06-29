import React, { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { FaTree } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";
import { MdCardTravel } from "react-icons/md";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { GiLion } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { InsertPicForm } from "./InsertPicForm";

const Header = ({ setFilter,setAllImages,filter}) => {
const [showFrom, setShowForm]=useState(false);
  const handleOnClickPic=()=>{
      setShowForm(true);
  }
  return (
    <header className="text-center relative">

      {showFrom && <InsertPicForm setShowForm={setShowForm} setAllImages={setAllImages}/>}
      <h1 className="relative flex items-center sm:justify-center sm:text-3xl mb-4 h-[88px] bg-gray-800  text-white font-semibold px-5">
        <span>My Picture Album</span>
        <button className="absolute right-10 text-sm flex gap-2 items-center justify-center" onClick={handleOnClickPic}><MdOutlineAddPhotoAlternate/> <span className="hidden sm:block">Add Pictures</span></button>
      </h1>
      <div className="flex items-center justify-center gap-8 mt-5 text-center flex-wrap px-4">
        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="All"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("All")}
        ><GrGallery className="text-xl"/> All
        </button>

        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="Food"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("Food")}
        ><IoFastFoodSharp className="text-xl"/> Food
        </button>

        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="Nature"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("Nature")}
        ><FaTree className="text-xl" /> Nature
        </button>

        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="Sport"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("Sport")}
        ><MdSportsCricket className="text-xl"/> Sports
        </button>

        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="Travel"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("Travel")}
        ><MdCardTravel className="text-xl"/> Travel
        </button>

        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="People"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("People")}
        ><FaArrowsDownToPeople className="text-xl"/> People
        </button>


        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="Animal"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("Animal")}
        ><GiLion className="text-xl"/> Animal
        </button>


        <button
          className={`flex flex-col gap-1 text-center items-center justify-center  ${filter==="Technology"?'text-black font-bold':'text-gray-800'}`}
          onClick={() => setFilter("Technology")}
        ><GrTechnology className="text-xl"/> Technology
        </button>
      </div>
    </header>
  );
};

export default Header;
