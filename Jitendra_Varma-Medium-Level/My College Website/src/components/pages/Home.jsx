import React from "react";
import image1 from "../../assets/ldgate images.jpg";
import image2 from "../../assets/event.jpg";
import image3 from "../../assets/groupimg.jpg";
import { SimpleCarousel } from "../common/SimpleCarousel";
import { LiaHandPointRightSolid } from "react-icons/lia";
import achivement1 from "../../assets/achivement1.jpeg";
import achivement2 from "../../assets/achivement2.png";
import achivement3 from "../../assets/achivement3.jpeg";

import ford from "../../assets/companies/fonrd.png";
import accenture from "../../assets/companies/accenture.png";
import cybage from "../../assets/companies/cybage.png";
import GFSC from "../../assets/companies/GSFC.png";
import ibm from "../../assets/companies/ibm.png";
import kiwitech from "../../assets/companies/kiwitech.png";
import mahindra from "../../assets/companies/mahindra.png";
import searce from "../../assets/companies/searce.png";
import thomson from "../../assets/companies/thomson.png";
import welspun from "../../assets/companies/welspun.png";
import wipro from "../../assets/companies/wipro.png";
import newsthumb from "../../assets/news-thumb.png";

export const Home = () => {
  const images = [image1, image2, image3];

  return (
    <>
      <div className="">
        <SimpleCarousel images={images} />
      </div>
      {/* WElcome to LDCE */}
      <div className="w-10/12 flex flex-col justify-center  mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Welcome to LDCE
        </h2>

        <div className="bg-gray-100 border-l-2 border-[#00008B] mt-6 p-2">
          L. D. College of Engineering endearingly known as L.D.C.E is
          Ahmedabad’s premier engineering college situated at the city’s heart
          and surrounded by elite organization like PRL, ATIRA, ISRO, IIM and
          CEPT. Starting in 1948 to impart quality higher education in various
          fields of engineering, it has seen unprecedented growth.
          <p className="mt-4">
            It is affiliated with Gujarat Technological University &
            administrated by Department of Technical Education, Government of
            Gujarat.
          </p>
        </div>
      </div>

      {/* vision */}
      <div className="w-10/12 flex flex-col justify-center  mx-auto mt-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Vision
        </h2>
        <div className="flex gap-x-2">
          <LiaHandPointRightSolid className="text-[#00008B] text-3xl" />
          <p>
            To contribute for sustainable development of nation through
            achieving excellence in technical education and research while
            facilitating transformation of students into responsible citizens
            and competent professionals.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="w-10/12 flex flex-col justify-center  mx-auto mt-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Mission
        </h2>
        <div className="flex flex-col gap-2">
          <p className="flex gap-x-2">
            <LiaHandPointRightSolid className="text-[#00008B] text-2xl" />
            To impart affordable and quality education in order to meet the
            needs of industries and achieve excellence in teaching-learning
            process.
          </p>

          <p className="flex gap-x-2">
            <LiaHandPointRightSolid className="text-[#00008B] text-2xl" />
            To create a conducive research ambience that drives innovation and
            nurtures research-oriented scholars and outstanding professionals.
          </p>

          <p className="flex gap-x-2">
            <LiaHandPointRightSolid className="text-[#00008B] text-2xl" />
            To collaborate with other academic & research institutes as well as
            industries in order to strengthen education and multidisciplinary.
            research.
          </p>

          <p className="flex gap-x-2">
            <LiaHandPointRightSolid className="text-[#00008B] text-2xl" />
            To promote equitable and harmonious growth of students,
            academicians, staff, society and industries, thereby becoming a
            center of excellence in technical education.
          </p>

          <p className="flex gap-x-2">
            <LiaHandPointRightSolid className="text-[#00008B] text-2xl" />
            To practise and encourage high standards of professional ethics,
            transparency and accountability.
          </p>
        </div>
      </div>

      {/* News And Updates */}
      <div className="w-10/12 flex flex-col justify-center  mx-auto mt-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          News & Updates
        </h2>
        <a href="https://ldce.ac.in/upload/pdf/news/2024/schedule-of-be-semester-1-orientation-program-2024-LbCCvF.pdf" target="_blank">
        <div className="mt-5 flex gap-2">
          <img src={newsthumb} alt="newsthumb" className="h-16 w-16" />
          <div>
            {" "}
            <p>Schedule of B.E. Semester-1 Orientation Program-2024</p>
            <p>26 Jun, 2024</p>
          </div>
        </div></a>
        <a href="https://ldce.ac.in/upload/pdf/news/2024/instructions-for-newly-admitted-students-of-be-academic-year-2024-25-xsLHhb.pdf" target="_blank"><div className="mt-5 flex gap-2">
          <img src={newsthumb} alt="newsthumb" className="h-16 w-16" />
          <div>
            <p>
              Instructions for Newly admitted students of B.E. Academic Year
              2024 -25
            </p>
            <p>26 Jun, 2024</p>
          </div>
        </div></a>

      </div>
      {/* Achievement */}
      <div className=" w-10/12 mx-auto mt-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Achievement
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-4">
          <div className="flex flex-col gap-y-2">
            <img
              src={achivement1}
              alt="achivement1"
              className="w-[345px] h-[200px] object-cover"
            />
            <p className="text-[#00008B] text-xl">
              LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as
              Best Program Officer of GTU for the year 2021-22.
            </p>
            <p className="text-[#555]">By LDCE / 18 May, 2024</p>
            <p className="text-[#555]">
              LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as
              Best Program Officer of GTU for the year 2021-22.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <img
              src={achivement2}
              alt="achivement1"
              className="w-[345px] h-[200px] object-cover"
            />
            <p className="text-[#00008B] text-xl">
              LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as
              Best Program Officer of GTU for the year 2021-22.
            </p>
            <p className="text-[#555]">By LDCE / 18 May, 2024</p>
            <p className="text-[#555]">
              LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as
              Best Program Officer of GTU for the year 2021-22.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <img
              src={achivement3}
              alt="achivement1"
              className="w-[345px] h-[200px] object-cover"
            />
            <p className="text-[#00008B] text-xl">
              LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as
              Best Program Officer of GTU for the year 2021-22.
            </p>
            <p className="text-[#555]">By LDCE / 18 May, 2024</p>
            <p className="text-[#555]">
              LDCE NSS Unit awarded as Best NSS Unit and Prof. C. S. Sanghvi as
              Best Program Officer of GTU for the year 2021-22.
            </p>
          </div>
        </div>
      </div>

      {/*Placement Companies */}
      <div className=" w-10/12 mx-auto mt-5 overflow-hidden hidden md:block">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Placement Companies
        </h2>
        <div className="flex gap-x-5">
          <ul class="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll w-full">
            <li>
              <img src={ford} alt="ford" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img
                src={accenture}
                alt="accenture"
                class="w-[100px] h-[100px]"
              />
            </li>
            <li>
              <img src={ibm} alt="ibm" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={kiwitech} alt="kiwitech" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={mahindra} alt="mahindra" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={cybage} alt="cybage" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={searce} alt="searce" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={thomson} alt="thomson" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={GFSC} alt="gfsc" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={wipro} alt="wipro" class="w-[100px] h-[100px]" />
            </li>
            <li>
              <img src={welspun} alt="welspun" class="w-[100px]" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
