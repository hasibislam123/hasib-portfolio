"use client";
import { useTheme } from "@/context/ThemeProvider";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      console.log("Current theme:", theme);
      console.log("HTML element classes:", document.documentElement.className);
      console.log("Has dark class:", document.documentElement.classList.contains("dark"));
   }, [theme]);

   const handleToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      console.log("Toggling theme from", theme, "to", newTheme);
      setTheme(newTheme);
   };

   return (
      <button
         onClick={handleToggle}
         className="px-4 py-2 rounded-md  hover:bg-gray-200 dark:bg-[#002a52] dark:hover:bg-[#003a6d] dark:text-white transition-colors   "
         style={{
            backgroundColor: theme === "dark" ? "#002a52" : "#f3f4f6",
            color: theme === "dark" ? "white" : "black"
         }}
         aria-label="Toggle theme"
         title={`Current theme: ${theme}. Click to switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
         <span className="text-xl">
            {theme === "light" ? <FaMoon /> : <FaSun />}
         </span>
      </button>
   );
}
