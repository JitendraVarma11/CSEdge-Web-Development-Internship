import React from "react";
import lalbhai from "../../assets/Shri_Kasturbhai_Lalbhai_Image.jpg";
import chemical1974 from "../../assets/chemicaldepr1974.jpg";
import canteen from "../../assets/ldcecanteeninearlydays.jpg";
import annexe from "../../assets/annexe-building.jpg"

export const About = () => {
  return (
    <div className="w-10/12 mx-auto mt-5 mb-10">
      <div className="flex md:flex-row flex-col gap-3">
        <div>
          <div className="flex flex-col gap-1">
            <img src={lalbhai} alt="lalbhai" className="sm:h-[300px] md:w-[600px] md:h-[200px]" />
            <p className="text-sm text-center">Lalbhai Dalpatbhai</p>
          </div>
        </div>
        <div>
          <p className="text-[#555]">
            <strong>L. D. College of Engineering (LDCE), Ahmedabad</strong> is a
            premier government engineering institute in Gujarat State set with
            the objectives of imparting higher education, research and training
            in various fields of engineering & technology. The institute is
            affiliated with Gujarat Technological University, Ahmedabad and
            administrated by the Department of Technical Education, Government
            of Gujarat.
          </p>
          <p className="mt-6 text-[#555]">
            The institute was established in June 1948 with a generous donation
            of Rs. 25 lacs and 31.2 Hectres of land by the textile magnate{" "}
            <strong> Sheth Shri Kasturbhai Lalbhai.</strong> Hence College is
            named as{" "}
            <strong> Lalbhai Dalpatbhai College of Engineering(LDCE).</strong>It
            is situated adjacent to Gujarat University campus and is located at
            the nucleus of various national level institutes such as
            <strong> PRL, ATIRA, IIM</strong> etc. The campus is having
            buildings for various departments, offices, hostels, residences for
            Principal, rector and wardens
          </p>
        </div>
      </div>

      {/* Foundation */}
      <div>
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Foundation
        </h2>
        <div className="flex md:flex-row flex-col-reverse gap-5 mt-3">
          <div className="flex flex-col gap-5 text-[#555]">
            <p>
              L.D. College of Engineering (LDCE) was established on 20th June,
              1948 as one of the first few engineering colleges in India. The
              institution owes its foundation to the bold and inspired vision of
              Kasturbhai Lalbhai, who named the college after his father,
              Lalbhai Dalpatbhai.
            </p>
            <p>
              Initially affiliated to Bombay University, L.D. College of
              Engineering (LDCE) came under the Gujarat University after its
              establishment in 1949.
            </p>
            <p>
              The land for the campus was donated by the Lalbhai family, who
              played a major role in decisions pertaining to this institute in
              its initial years. LDCE started its journey by offering three
              undergraduate courses in Mechanical, Civil and Electrical
              Engineering with an intake of 35 students in each field.
            </p>
          </div>
          <div className="flex flex-col gap-1 w-full">
          <img
            src={chemical1974}
            alt="chemical"
            className="h-[270px] w-[360px]"
          />
          <p className="text-sm text-center text-[#555]">Chemical Engineering Department in 1974</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 mt-5">
          <img src={canteen} alt="" className="md:h-[200px] md:w-[250px]" />
          <div className="text-[#555]">
            <p>
              Today it has both undergraduate and post graduate courses in 14
              departments. Today, the total strength of the college stands more
              than 6000. Almuni of LDCE have spread all over the globe and have
              created an image of highly professional and skilful engineers.
              Throughout this wonderful journey, teachers and principals have
              shaped the lives of thousands of engineers.
            </p>
            <p className="mt-5">
              The legacy inherited is rich and full of colors. LDCE has and will
              keep on serving this nation and its countrymen through the light
              of knowledge.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Today
      </h2>
      <img src={annexe} alt="annexe" className="mt-5"/>
      <p className="text-sm text-[#555] text-center">New Born baby of LDCE-Annexe Building</p>
    </div>
  );
};
