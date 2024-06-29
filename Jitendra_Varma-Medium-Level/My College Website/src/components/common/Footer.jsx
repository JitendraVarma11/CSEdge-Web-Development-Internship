import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
export const Footer = () => {
  return (
    <div className='bg-[#000219]'>
      <div className='w-10/12 flex md:flex-row gap-5 flex-col justify-between items-center mx-auto text-white p-4'>
      <p className='text-sm'>2024 © LDCE. All rights Reserved</p>
      <div className='flex gap-6 text-3xl text-gay-300'>
        <a href="https://www.facebook.com/ldce.ac.in"  target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/ldceofficial/"  target='_blank'><FaInstagram/></a>
        <a href="https://www.linkedin.com/school/l.d-college-of-engineering---ahmedabad/?originalSubdomain=in"  target='_blank'><FaLinkedin/></a>
        <a href="https://www.youtube.com/c/LDCollegeofEngineering/videos"  target='_blank'><TfiYoutube/></a>
      </div>
      </div>
      
    </div>
  )
}
