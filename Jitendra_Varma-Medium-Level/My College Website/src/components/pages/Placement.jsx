import React from "react";
import { LiaHandPointRightSolid } from "react-icons/lia";

export const Placement = () => {
  return (
    <div>
      <div className="bg-gray-50 w-full">
        <h2 className="w-10/12 text-2xl font-semibold p-3 mx-auto text-[#555]">
          Placement Cell
        </h2>
      </div>
      <div className="w-10/12 mx-auto flex flex-col gap-1 mt-5">
        <div className="flex gap-2 items-center">
          <LiaHandPointRightSolid className="text-[#00008B] text-xl" />
          <a
            href="https://ldce.ac.in/upload/pdf/placement-cell/LDCE_TPO_BROUCHUR.pdf"
            className="text-[#555]"
          >
            Placement Cell Brochure
          </a>
        </div>

        <div className="flex gap-2 items-center">
          <LiaHandPointRightSolid className="text-[#00008B] text-xl" />
          <a
            href="https://ldce.ac.in/upload/pdf/placement-cell/placement_activities.pdf"
            className=" text-[#555]"
          >
            Placement Cell Activities
          </a>
        </div>
      </div>

      <div className="w-10/12 mx-auto mb-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Statistics
        </h2>
        <div className="border border-[#00008B] p-2 mt-5">
          <h3 className="bg-[#00008B] p-2 font-semibold text-xl text-white w-full mb-3">
            Placement Cell Statistics
          </h3>
          <div class="grid grid-cols-8 bg-gray-100 border border-gray-200 text-black font-semibold gap-y-1">
            <div class="col-span-2 text-gray-700 font-medium bg-[#00008B] p-3">
              {" "}
            </div>
            <div class="col-span-1 text-center text-white  font-medium bg-[#00008B] p-3">
              Year 2024
            </div>
            <div class="col-span-1 text-center text-white font-medium bg-[#00008B] p-3">
              Year 2023
            </div>
            <div class="col-span-1 text-center text-white font-medium bg-[#00008B] p-3">
              Year 2022
            </div>
            <div class="col-span-1 text-center text-white font-medium bg-[#00008B] p-3">
              Year 2021
            </div>
            <div class="col-span-1 text-center text-white font-medium bg-[#00008B] p-3">
              Year 2020
            </div>
            <div class="col-span-1 text-center text-white font-medium bg-[#00008B] p-3">
              Total
            </div>

            <div class="col-span-2 text-black font-medium p-3">
              Total Students Selected
            </div>
            <div class="col-span-1 text-center p-3">873</div>
            <div class="col-span-1 text-center p-3">970</div>
            <div class="col-span-1 text-center p-3">805</div>
            <div class="col-span-1 text-center p-3">629</div>
            <div class="col-span-1 text-center p-3">621</div>
            <div class="col-span-1 text-center p-3">3898</div>

            <div class="col-span-2 text-black font-medium">
              Total Number Of Companies Visited
            </div>
            <div class="col-span-1 text-center p-3">123</div>
            <div class="col-span-1 text-center p-3">145</div>
            <div class="col-span-1 text-center p-3">105</div>
            <div class="col-span-1 text-center p-3">113</div>
            <div class="col-span-1 text-center p-3">79</div>
            <div class="col-span-1 text-center p-3">566</div>

            <div class="col-span-2 text-white font-medium p-3 bg-[#00008B]">
              Total Offer given to Student
            </div>
            <div class="col-span-6 text-white font-medium p-3 text-center bg-[#00008B]">
              3898
            </div>

            <div class="col-span-2 text-white font-medium p-3 bg-[#00008B]">
              Total Number Of Companies
            </div>
            <div class="col-span-6 text-white font-medium p-3 text-center bg-[#00008B] ">
              566
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto mb-5">
        <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
          Contact
        </h2>
        <div className="text-[#555]">
          <strong>Prof. Vinodkumar P. Patel</strong> <br />
          ( M.Tech, IIT, Roorkee) <br />
          Associate Professor <br />
          Training & Placement Officer <br />
          L. D. College of Engineering, <br />
          Ahmedabad -380015 India <br />
          <a href="mailto:placement@ldce.ac.in">
            <strong>Email: placement@ldce.ac.in</strong>
          </a>
        </div>
      </div>
    </div>
  );
};
