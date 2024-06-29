import React from "react";
import image1 from "../../assets/IT/information-technology-TjBKNWuPe3.jpg";
import image2 from "../../assets/IT/information-technology-t4TYxQFtBD.jpg";
import image3 from "../../assets/IT/information-technology-R3Br8mPZrn.jpg";
import ITlogo from "../../assets/IT/information-technology-logo.png";
import { SimpleCarousel } from "../common/SimpleCarousel";
import fac1 from "../../assets/IT/hod_mam.jpg";
import fac2 from "../../assets/IT/bakul_sir.jpg";
import fac3 from "../../assets/IT/mehul_sir.jpg";
import fac4 from "../../assets/IT/nirjari_mam.jpg";

export const IT = () => {
  const ITimages = [image1, image2, image3];
  return (
    <div>
      <div className="bg-gray-50 w-full">
        <h2 className="w-10/12 text-2xl font-semibold p-3 mx-auto text-[#555]">
          Information & Technology Department
        </h2>
      </div>
      <div className="w-10/12 mx-auto">
        <SimpleCarousel images={ITimages} />
      </div>
      <div className=" container w-10/12 mx-auto text-[#555] mt-10 flex  space-x-4 mb-5">
        <img src={ITlogo} alt="ITlogo" className="w-[150px] h-[150px] sm:hidden md:block" />
        <div>
          <p>
            Vision : To shape the young minds of aspiring Information Technology
            engineers to become the front runner in the sustainable
            technological growth of our country, conserving its rich cultural
            heritage and catering to its socioeconomic needs.
          </p>
          <p className="mt-5">
            Mission 1. Bringing innovative approach in teaching-learning process
            to produce competent Information Technology engineers. 2. Provide
            opportunities and necessary exposure to the young engineers to
            develop themselves into responsible professionals. 3. Infusing
            lifelong learning ability in the aspiring minds with the view of
            making them sensible towards their social responsibilities.
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
          <div className="bg-gray-100 p-2">Master of Computer Application</div>
          <div className="bg-gray-100 p-2">PG</div>
          <div className="bg-gray-100 p-2">3</div>
          <div className="bg-gray-100 p-2">30</div>
          <div className="bg-gray-100 p-2">1987</div>

          <div className="bg-gray-100 p-2">Information Technology</div>
          <div className="bg-gray-100 p-2">UG</div>
          <div className="bg-gray-100 p-2">4</div>
          <div className="bg-gray-100 p-2">120</div>
          <div className="bg-gray-100 p-2">2000</div>

          <div className="bg-gray-100 p-2">Information Technology</div>
          <div className="bg-gray-100 p-2">PG</div>
          <div className="bg-gray-100 p-2">2</div>
          <div className="bg-gray-100 p-2">18</div>
          <div className="bg-gray-100 p-2">2010</div>
        </div>
      </div>

      <div className="w-10/12 mx-auto mt-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Faculties
        </h2>
        <div className="grid grid-cols-2 gap-5 p-5">
          <div className="flex md:flex-row sm:flex-col  gap-2">
            <img src={fac1} alt="hodmam" className="h-[200px] w-[200px] object-cover"/>
            <div className="flex flex-col  justify-center gap-2 text-[#555]">
              <p>Dr. Hiteishi Diwanji</p>
              <p>Head of Department</p>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col gap-2">
            <img src={fac2} alt="bakulsir" className="h-[200px] w-[200px] object-cover"/>
            <div className="flex flex-col  justify-center gap-2 text-[#555]">
              <p>BAKULBHAI PANCHAL</p>
              <p>Assistant Professor</p>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col gap-2">
            <img src={fac3} alt="mehulsir" className="h-[200px] w-[200px] object-cover" />
            <div className="flex flex-col  justify-center gap-2 text-[#555]">
              <p>Mehul Parikh</p>
              <p>Associate Professor</p>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col gap-2">
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
