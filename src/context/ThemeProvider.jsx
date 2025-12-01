"use client";
import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   // Lazy initialization - only runs once on mount
   const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
         return localStorage.getItem("theme") || "light";
      }
      return "light";
   });

   // Apply theme changes to DOM
   useLayoutEffect(() => {
      const root = document.documentElement;
      localStorage.setItem("theme", theme);
      
      console.log("Applying theme:", theme, "to document element");
      
      if (theme === "dark") {
         root.classList.add("dark");
         console.log("Added 'dark' class to html element");
      } else {
         root.classList.remove("dark");
         console.log("Removed 'dark' class from html element");
      }
      
      console.log("Current html classes:", root.className);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useTheme = () => useContext(ThemeContext);
