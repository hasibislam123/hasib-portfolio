// pages/index.js
import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Contact from "@/Components/Contact";
import Skill from "@/Components/Skill";
import Works from "@/Components/Works";
import Image from "next/image";

export default function Home() {
   return (

      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans overflow-hidden dark:bg-[#001d3d]">


         {/* Orb 1: Blue/Purple Tone */}
         <div
            className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:bg-purple-600/50"
         ></div>

         {/* Orb 2: Lighter Tone */}
         <div
            className="absolute top-1/4 right-[-150px] w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:bg-blue-600/50"
         ></div>

         {/* Orb 3: Bottom Left Tone */}
         <div
            className="absolute bottom-[-100px] left-1/4 w-[300px] h-[300px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 dark:bg-pink-600/50"
         ></div>

         <div className="relative z-10">
            <section id="home">
               <Banner />
            </section>
            <section id="about">
               <About />
            </section>
            <section id="skills">
               <Skill/>
            </section>
            <section id="works">
               <Works/>
            </section>
            <section id="contact">
               <Contact/>
            </section>
         </div>


      </div>
   );
}