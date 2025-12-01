"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Loader() {
   const [animationData, setAnimationData] = useState(null);

   useEffect(() => {
      // Load the Lottie animation from public folder
      fetch("/andidate.json")
         .then((response) => response.json())
         .then((data) => setAnimationData(data))
         .catch((error) => console.error("Error loading animation:", error));
   }, []);

   if (!animationData) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-50 dark:bg-[#001d3d]">
         <div className="w-64 h-64 md:w-80 md:h-80">
            <Lottie
               animationData={animationData}
               loop={true}
               autoplay={true}
            />
         </div>
      </div>
   );
}
