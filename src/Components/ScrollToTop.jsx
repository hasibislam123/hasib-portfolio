"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
   const [isVisible, setIsVisible] = useState(false);

   // Show button when page is scrolled down
   useEffect(() => {
      const toggleVisibility = () => {
         if (window.pageYOffset > 300) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener("scroll", toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);

   // Scroll to top smoothly
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   };

   return (
      <>
         {isVisible && (
            <button
               onClick={scrollToTop}
               className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
               aria-label="Scroll to top"
            >
               <FaArrowUp className="w-5 h-5" />
            </button>
         )}
      </>
   );
}
