"use client"; // for useEffect animations

import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function Banner() {
   const myImagePath = "/img1.png";
   const myName = "Hasib Islam";
   const profession = "Full Stack Web Developer";

   // Looping letter-by-letter animation
   const [animatedProfession, setAnimatedProfession] = useState("");
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setAnimatedProfession(profession.slice(0, index + 1));
         setIndex((prev) => (prev + 1) % (profession.length + 1));
      }, 150); // speed in ms
      return () => clearInterval(interval);
   }, [index]);

   return (
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
         <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

            {/* Left Side: Content */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
               <p className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-2">Hi! Im</p>
               <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                  {myName}
               </h1>
               <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  <span className="text-[#c77dff]">{animatedProfession}</span>
                  <span className="blinking-cursor">|</span>
               </h2>

               <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8">
                  I am a passionate fullstack web developer from Chandpur, Bangladesh. Currently learning and building exciting projects to sharpen my skills for future opportunities.
               </p>
               <div className="flex gap-5">

                  {/* btn1 */}
                  <button
                     className="cursor-pointer relative bg-white/10 dark:bg-[#002a52]/80 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-[#c77dff] transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]"
                  >
                     <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                        <div
                           className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                        ></div>
                        <div
                           className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-[#c77dff] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black"
                        >
                           <div
                              className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 16 16"
                                 height="100%"
                                 width="100%"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                                 ></path>
                              </svg>
                           </div>
                        </div>
                     </div>
                     <div
                        className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-black dark:text-white"
                     >
                        Contacts
                     </div>
                  </button>

                  {/* btn2 */}
                  <label className="flex  items-center">
                     <input type="checkbox" checked="" className="peer hidden" />

                     <a
                        href="/Hasib-resume.pdf"
                        download
                        className="group flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-gray-950 dark:border-gray-300 fill-none p-2 px-3 font-extrabold text-gray-950 dark:text-gray-100 transition-all active:scale-90 peer-checked:fill-gray-950 peer-checked:hover:text-white"
                     >
                        <div className="z-10 transition group-hover:translate-x-4">SAVE</div>
                        <svg
                           className="size-6 transition group-hover:-translate-x-6 group-hover:-translate-y-3 group-hover:scale-[750%] duration-500"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                           ></path>
                        </svg>
                     </a>
                  </label>

               </div>

            </div>

            {/* Right Side: Image with Animated Border */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 shrink-0 mt-8 md:mt-0">

               {/* Outer Rotating Circle */}
               <div className="absolute inset-0 border-4 border-dashed border-gray-900 dark:border-gray-300 rounded-full 
                     p-2 animate-spin-slow opacity-80 z-0">
               </div>

               {/* Inner Image Container with Glow */}
               <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10 
                     border-4 border-white/50 dark:border-blue-400/30 bg-gray-200 dark:bg-[#002a52]
                     before:absolute before:inset-0 before:rounded-full
                     before:shadow-[0_0_40px_rgba(59,130,246,0.6)] before:z-[-1]">
                  <img
                     src={myImagePath}
                     className="object-cover w-full h-full"
                     style={{ filter: 'brightness(0.98)' }}
                  />
               </div>

            </div>
         </div>
      </section>
   );
}
