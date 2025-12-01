import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";


// You might consider installing react-icons (npm install react-icons)
// and replacing these inline SVGs for cleaner code.
const LinkedInIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 fill-current text-white transition-colors duration-300 hover:text-yellow-600"
      viewBox="0 0 24 24"
   >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.136-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.793 7 2.476v6.759z" />
   </svg>
);

const FacebookIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 fill-current text-white transition-colors duration-300 hover:text-yellow-600"
      viewBox="0 0 24 24"
   >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.134-1.333h2.866v-3h-4.482c-2.859 0-4.518 1.893-4.518 4.584v2.416z" />
   </svg>
);

export default function Footer  () {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-[#212121] text-white py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Portfolio Title & Subtitle */}
            <div className="text-center mb-8">
               <h1 className="text-4xl font-bold tracking-tight">
                  <span className="text-white">Portf</span>
                  <span className="text-blue-200">olio.</span>
               </h1>
               <p className="text-sm mt-1 text-blue-400 font-medium">Hasib Islam Rabby</p>
            </div>

            <div className='flex justify-between'>


               {/* Copyright */}
               <div className="text-center pt-8 ">
                  <p className="text-sm text-gray-400">
                     Copyright ©{currentYear} - All right reserved
                  </p>
               </div>
               {/* Social Icons */}
               <div className="flex justify-center space-x-4 mb-10">
                  <a
                     href="https://www.linkedin.com/in/hasib-islam123"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="relative w-[45px] h-[45px] flex items-center justify-center rounded-[7px] cursor-pointer transition-all duration-300 group"
                  >
                     {/* Gradient Background */}
                     <span className="absolute inset-0 rounded-[9px] bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom pointer-events-none"></span>

                     {/* Blur / Foreground Container */}
                     <span className="flex items-center justify-center w-full h-full bg-transparent backdrop-blur-[4px] border border-[rgba(156,156,156,0.466)] rounded-[10px] transition-all duration-300 group-hover:bg-[rgba(156,156,156,0.466)]">
                        <RxLinkedinLogo className="w-5 h-5 text-white" />
                     </span>
                  </a>
                  <a
                     href="https://www.facebook.com/hasib.islam.892114" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="relative w-[45px] h-[45px] flex items-center justify-center rounded-[7px] cursor-pointer transition-all duration-300 group"
                  >
                     {/* Gradient Background */}
                     <span className="absolute inset-0 rounded-[9px] bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom pointer-events-none"></span>

                     {/* Blur / Foreground Container */}
                     <span className="flex items-center justify-center w-full h-full bg-transparent backdrop-blur-[4px] border border-[rgba(156,156,156,0.466)] rounded-[10px] transition-all duration-300 group-hover:bg-[rgba(156,156,156,0.466)]">
                        <FaFacebook className="w-5 h-5 text-white" />
                     </span>
                  </a>
                  <a
                     href="https://github.com/hasibislam123" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="relative w-[45px] h-[45px] flex items-center justify-center rounded-[7px] cursor-pointer transition-all duration-300 group"
                  >
                     {/* Gradient Background */}
                     <span className="absolute inset-0 rounded-[9px] bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom pointer-events-none"></span>

                     {/* Blur / Foreground Container */}
                     <span className="flex items-center justify-center w-full h-full bg-transparent backdrop-blur-[4px] border border-[rgba(156,156,156,0.466)] rounded-[10px] transition-all duration-300 group-hover:bg-[rgba(156,156,156,0.466)]">
                        <FaGithub className="w-5 h-5 text-white" />
                     </span>
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

