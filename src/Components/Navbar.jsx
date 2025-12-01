"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menu items with section IDs
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About me", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Works", id: "works" },
    { label: "Contact", id: "contact" },
  ];

  // Function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 100; // Approximate navbar height
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className="w-full fixed px-5 bg-white/90 dark:bg-[#001d3d]/95 backdrop-blur-lg shadow-lg border border-white/20 dark:border-gray-700/20 rounded-2xl flex items-center justify-between z-50">

      {/* LOGO + NAME */}
      <div className="flex items-center cursor-pointer">
        <div className="flex items-center justify-center">
          <img className="h-20 w-20" src={"./logo1.png"} alt="" />
        </div>

        <p className="text-lg sm:text-xl font-semibold tracking-wide text-gray-800 dark:text-gray-100">
          Hasib Islam
        </p>
      </div>

      {/* Desktop Menu & Theme Toggle */}
      <div className="hidden md:flex items-center gap-6">

        {/* Menu Items */}
        <div className="flex items-center bg-[#E0F7FA] dark:bg-[#002a52] border border-[#e0aaff] dark:border-gray-600 rounded-full p-1 shadow-inner">
          {menuItems.map((item) => (
            <p
              key={item.label}
              className={`text-sm font-medium px-4 py-1.5 rounded-full cursor-pointer transition-colors
                ${item.label === "Home"
                  ? "text-gray-700 dark:text-gray-200"
                  : "dark:text-gray-300 hover:bg-[#e0aaff] dark:hover:bg-gray-700"
                }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </p>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="cursor-pointer text-2xl text-yellow-600 hover:text-yellow-700 transition-colors">
          <ThemeToggle />
        </div>

        {/* Contacts Button */}
        <div>
          <button
            className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-[#c77dff] transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]"
            onClick={() => scrollToSection("contact")}
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
              className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-black"
            >
              Contacts
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-4">
        <div className="cursor-pointer text-2xl text-yellow-600 hover:text-yellow-700 transition-colors">
          <ThemeToggle />
        </div>
        <div
          className="cursor-pointer text-3xl text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-full mt-2 right-5 w-48 bg-white/90 dark:bg-[#001d3d]/95 backdrop-blur-sm shadow-xl border border-white/20 dark:border-gray-700/20 rounded-lg flex flex-col items-start gap-1 py-2 px-3 md:hidden">
          {menuItems.map((item) => (
            <p
              key={item.label}
              className="text-lg font-medium w-full p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
}
