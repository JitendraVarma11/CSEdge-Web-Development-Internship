import React from "react";
import image1 from "../../assets/Campus/library1.jpg";
import image2 from "../../assets/Campus/library2.jpg";
import image3 from "../../assets/Campus/library3.jpg";
import map from "../../assets/Campus/mapldce.png";
import club1 from "../../assets/Campus/advanature_club.jpg";
import club2 from "../../assets/Campus/coders-club.jpg";
import club3 from "../../assets/Campus/innovator-club.png";
import { SimpleCarousel } from "../common/SimpleCarousel";
import canteen1 from "../../assets/Campus/canteen1.jpg";
import canteen2 from "../../assets/Campus/canteen2.jpg";
import canteen3 from "../../assets/Campus/nescafe.jpg";


export const Campus = () => {
  const images = [image1, image2, image3];
  const CanteenImages = [canteen1,canteen2,canteen3];

  return (
    <div>
      <div className="bg-gray-50 w-full">
        <h2 className="w-10/12 text-2xl font-semibold p-3 mx-auto text-[#555]">
          LDCE Campus
        </h2>
      </div>

      {/* campus map */}
      <div className="w-10/12 mx-auto">
        <img src={map} alt="ldcemap" className="w-full md:h-[600px] mt-3" />
      </div>

      {/* clubs */}
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          LDCE Clubs
        </h2>

        <div className="bg-gray-50 border-l-2 border-[#00008B] p-2 flex md:flex-row flex-col gap-5 items-center mt-3">
          <img
            src={club1}
            alt="advanture-club"
            className="w-[150px] h-[150px] object-cover"
          />
          <p>
            Advanature Club is an initiative of Invincible, an NGO run by
            students of different colleges. It aims to inform people about
            adventures and the needs of young India. Advanature focuses on
            Environment Awareness, Heritage and Culture Conservation, Nature
            Education, and Adventure. The club organizes nature education and
            adventure camps, attracting students from various colleges. It
            promotes activities that benefit students in studies and
            co-curricular activities. Advanature is run by youth, for youth,
            encouraging involvement in activities beneficial across life stages.
          </p>
        </div>

        <div className="bg-gray-50 border-l-2 border-[#00008B] p-2 flex md:flex-row flex-col gap-5 items-center mt-3">
          <img
            src={club2}
            alt="coder-club"
            className="w-[150px] h-[150px] object-cover"
          />
          <p>
            Advanature Club is an initiative of Invincible, an NGO run by
            students of different colleges. It aims to inform people about
            adventures and the needs of young India. Advanature focuses on
            Environment Awareness, Heritage and Culture Conservation, Nature
            Education, and Adventure. The club organizes nature education and
            adventure camps, attracting students from various colleges. It
            promotes activities that benefit students in studies and
            co-curricular activities. Advanature is run by youth, for youth,
            encouraging involvement in activities beneficial across life stages.
          </p>
        </div>

        <div className="bg-gray-50 border-l-2 border-[#00008B] p-2 flex md:flex-row flex-col gap-5 items-center mt-3">
          <img
            src={club3}
            alt="innovator-club"
            className="w-[150px] h-[150px] object-cover"
          />
          <p>
            Advanature Club is an initiative of Invincible, an NGO run by
            students of different colleges. It aims to inform people about
            adventures and the needs of young India. Advanature focuses on
            Environment Awareness, Heritage and Culture Conservation, Nature
            Education, and Adventure. The club organizes nature education and
            adventure camps, attracting students from various colleges. It
            promotes activities that benefit students in studies and
            co-curricular activities. Advanature is run by youth, for youth,
            encouraging involvement in activities beneficial across life stages.
          </p>
        </div>
      </div>

      {/* library */}
      <div className="w-10/12 mx-auto mt-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B] mb-5">
          LDCE Library
        </h2>
        <SimpleCarousel images={images} />
        <div>
          <p className="text-[#555]">
            The Central Library of the renowned institute of the state, L. D.
            College of Engineering, Ahmedabad is the hub for information
            services in the institute, gathering place for the faculties &
            students of diversified technological areas and also serves as a
            major learning and resource centre. It is a creative and innovative
            partner in supporting the teaching, learning, scholarship and
            research activities of the institute. With the fast growing
            collection, both in digital and print forms using the
            state-of-the-art facilities, the Central library of the institute is
            contributing exponentially to provide a world class academic
            environment with the institute.
          </p>
          <p className="text-[#00008B] mt-5">Library Timings</p>
          <p className="text-[#555]">
            • 10:30 am to 09:00 pm <br />
            • Remains closed on Sunday & Public Holidays
          </p>
        </div>
      </div>

      {/* Canteen */}
      <div className="w-10/12 mx-auto mt-5 mb-10">
        <div>
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Canteen
        </h2>
            <SimpleCarousel images={CanteenImages}/>
            <p className="text-center text-[#00008B]">Canteen facility is available in the campus for the students and staff members. An entrée of delectable cuisines is provided at pocket-friendly prices.</p>
        </div>
      </div>
    </div>
  );
};
