import React from "react";
import image1 from "../../assets/CE/ce1.jpg";
import image2 from "../../assets/CE/ce2.jpg";
import image3 from "../../assets/CE/ce3.jpg";
import CElogo from "../../assets/CE/computer-engineering-logo.png";
import { SimpleCarousel } from "../common/SimpleCarousel";
import fac1 from "../../assets/CE/chirag_thaker.jpg";
import fac2 from "../../assets/CE/tushar_raval.jpg";
import fac3 from "../../assets/CE/rajyalakshmi_jaiswal.jpg";
import fac4 from "../../assets/CE/hetal_joshiyara.jpg";

export const CSE = () => {
  const CEimages = [image1, image2, image3];
  return (
    <div>
      <div className="bg-gray-50 w-full">
        <h2 className="w-10/12 text-2xl font-semibold p-3 mx-auto text-[#555]">
          Information & Technology Department
        </h2>
      </div>
      <div className="w-10/12 mx-auto">
        <SimpleCarousel images={CEimages} />
      </div>
      <div className="container w-10/12 mx-auto text-[#555] mt-10 flex space-x-4 mb-5">
        <img src={CElogo} alt="CElogo" className="w-[150px] h-[150px] sm:hidden md:block" />
        <div>
          <p>
          Computer engineering is the fastest developing discipline in the world. It integrates several fields of electrical engineering and computer science required to develop computer hardware and software. Computer engineers embed computers in other machines and systems, build networks to transfer data and develop ways to make computers, faster, smaller and more capable. The major technical areas of Computer Engineering are : Cybersecurity, Networking, Database Handling, Artificial Intelligence, Design Automation, Computer software, Embedded Systems.
          </p>
          <p className="mt-5">
          Computer Engineers venture into various fields such as web-development, Computer Support Specialist, Computer Systems Analyst ,Computer Systems Designer, Database Administrator, Network Administrator and much more. Future opportunities in this field are beyond boundaries. Computer Engineering Department in L.D.C.E covers a wide spectrum of topics in data communication, computer networking, operating systems, microprocessor programming and applications, parallel processing, compiler design, system programming, software engineering, simulation and modeling, distributed systems, graphics and image processing, various packages and softwares like ORACLE, JAVA, VC++ etc
          </p>
        </div>
        
      </div>

      <div className="w-10/12 mx-auto mt-5 border border-[#00008B] p-1">
        <h2 className="text-2xl p-2 bg-[#00008B] text-white">UG/PG Course</h2>
        <div className="grid grid-cols-5">
          {/* Header row */}
          <div className="bg-gray-200 p-2 font-bold">Name of Course</div>
          <div className="bg-gray-200 p-2 font-bold">Type</div>
          <div className="bg-gray-200 p-2 font-bold">Period (Years)</div>
          <div className="bg-gray-200 p-2 font-bold">Intake</div>
          <div className="bg-gray-200 p-2 font-bold">Year of Starting</div>

          {/* Data rows */}
          <div className="bg-gray-100 p-2">Computer Engineering</div>
          <div className="bg-gray-100 p-2">UG</div>
          <div className="bg-gray-100 p-2">4</div>
          <div className="bg-gray-100 p-2">120</div>
          <div className="bg-gray-100 p-2">1983</div>

          <div className="bg-gray-100 p-2">Computer Engineering (Software Engineering)</div>
          <div className="bg-gray-100 p-2">PG</div>
          <div className="bg-gray-100 p-2">2</div>
          <div className="bg-gray-100 p-2">18</div>
          <div className="bg-gray-100 p-2">2009</div>

        </div>
      </div>

      <div className="w-10/12 mx-auto mt-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Faculties
        </h2>
        <div className="grid grid-cols-2 gap-5 p-5">
          <div className="flex gap-2">
            <img src={fac1} alt="hodmam" className="h-[200px] w-[200px] object-cover"/>
            <div className="flex flex-col  justify-center gap-2 text-[#555]">
              <p>Dr. Hiteishi Diwanji</p>
              <p>Head of Department</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={fac2} alt="bakulsir" className="h-[200px] w-[200px] object-cover"/>
            <div className="flex flex-col  justify-center gap-2 text-[#555]">
              <p>BAKULBHAI PANCHAL</p>
              <p>Assistant Professor</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={fac3} alt="mehulsir" className="h-[200px] w-[200px] object-cover" />
            <div className="flex flex-col  justify-center gap-2 text-[#555]">
              <p>Mehul Parikh</p>
              <p>Associate Professor</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={fac4} alt="nirjarimam" className="h-[200px] w-[200px] object-cover"/>
            <div className="flex flex-col  justify-center gap-2 text-[#555]">
              <p>Nirjari Desai</p>
              <p>Assistant Professor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
