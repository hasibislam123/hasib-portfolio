"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function PageWrapper({ children }) {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Show loader for minimum 2 seconds
      const timer = setTimeout(() => {
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         {loading && <Loader />}
         {children}
      </>
   );
}
