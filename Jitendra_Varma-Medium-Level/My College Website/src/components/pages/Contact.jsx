// https://www.google.com/maps/place/L.D.+College+Of+Engineering/@23.0338,72.546584,16z/data=!4m6!3m5!1s0x395e84eaf57ac615:0x5c7498bb96b34c97!8m2!3d23.0338!4d72.546584!16zL20vMGMxd180?hl=en-US&entry=ttu

import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="bg-gray-50 w-full mb-3">
        <h2 className="w-10/12 text-2xl font-semibold p-3 mx-auto text-[#555]">
          Contact Us
        </h2>
      </div>

      <div className="w-10/12 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7268342790085!2d72.54400907376609!3d23.03379997916594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eaf57ac615%3A0x5c7498bb96b34c97!2sL.D.%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1718536474592!5m2!1sen!2sin"
          className="w-full h-[50vh]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
            Address
          </h2>
          <p className="text-[#555] mt-3">
            Opp Gujarat University,
            <br />
            Navrangpura, Ahmedabad - 380015 GJ IN
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
            Working Hours
          </h2>
          <p className="text-[#555] mt-3">
            <strong>Monday-Friday:</strong> 10:30am to 6:10pm <br />
            <strong>Saturday:</strong> 10:30am to 6:10pm (Closed on 2nd and 4th)
            <br />
            <strong>Sunday:</strong> Closed
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#00008B]  py-4 border-b-2 border-[#00008B]">
            Contact Details
          </h2>
          <p className="text-[#555] mt-3">
            Office:{"  "}
            <a href="mailto:adminofficer@ldce.ac.in" className="hover:text-[#00008B] hover:underline">adminofficer@ldce.ac.in</a> <br />
            Admission:{"  "}
            <a href="mailto:admission_info@ldce.ac.in" className="hover:text-[#00008B] hover:underline">
              admission_info@ldce.ac.in
            </a><br />
            Student Section:{"  "}
            <a href="mailto:student_section@ldce.ac.in" className="hover:text-[#00008B] hover:underline">
              student_section@ldce.ac.in
            </a><br />
            Store:{"  "} <a href="mailto:store@ldce.ac.in" className="hover:text-[#00008B] hover:underline">store@ldce.ac.in</a>
          </p>
        </div>
      </div>
    </div>
  );
};
