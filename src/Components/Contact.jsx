"use client";
import React, { useState } from "react";
import { FaHome, FaUser, FaAlignCenter, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const sidebarItems = [
   { icon: FaHome, label: "Home", id: "home" },
   { icon: FaUser, label: "About", id: "about" },
   { icon: FaAlignCenter, label: "Skills", id: "skills" },
   { icon: FaProjectDiagram, label: "Works", id: "works" },
   { icon: FaEnvelope, label: "Contact", id: "contact" },
];

export default function Contact() {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      subject: "",
      message: "",
   });
   const [status, setStatus] = useState("");
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   // Smooth scroll
   const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
         const navbarHeight = 100;
         const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
         const offsetPosition = elementPosition - navbarHeight;

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
         });
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus("");

      // TODO: Replace with your actual Web3Forms access key
      const accessKey = "YOUR_ACCESS_KEY_HERE";

      // Check if access key is set
      if (accessKey === "YOUR_ACCESS_KEY_HERE") {
         console.error("Web3Forms access key not configured!");
         setStatus("error");
         setLoading(false);
         return;
      }

      const formDataToSend = {
         access_key: accessKey,
         name: formData.fullName,
         email: formData.email,
         subject: `Portfolio Contact: ${formData.subject}`,
         message: formData.message,
         from_name: formData.fullName,
         replyto: formData.email,
         to: "hasib64dj@gmail.com",
      };

      try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",c
            },
            body: JSON.stringify(formDataToSend),
         });

         const result = await response.json();
         console.log("Web3Forms response:", result);

         if (result.success) {
            setStatus("success");
            setFormData({ fullName: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus(""), 5000);
         } else {
            console.error("Web3Forms API error:", result);
            setStatus("error");
            setTimeout(() => setStatus(""), 5000);
         }
      } catch (error) {
         console.error("Network error:", error);
         setStatus("error");
         setTimeout(() => setStatus(""), 5000);
      } finally {
         setLoading(false);
      }
   };

   return (
      <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center overflow-hidden">
         {/* Background Text */}
         <h1
            className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 text-[11vw] font-black text-black/5 dark:text-black/10 pointer-events-none select-none z-0"
            style={{ letterSpacing: "0.8rem", lineHeight: "1.2" }}
         >
            CONTACT
         </h1>

         {/* MAIN CONTAINER */}
         <div className="relative z-10 w-full max-w-5xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden">

            {/* Layout fix: mobile → column-reverse */}
            <div className="flex flex-col-reverse lg:flex-row">

               {/* LEFT SIDE IMAGE */}
               <div className="w-full lg:w-2/5 h-60 sm:h-72 lg:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-end pr-[10px] z-10 text-right">
                     <p className="text-white text-lg font-semibold">hasib64dj@gmail.com</p>
                     <p className="text-white text-lg font-semibold mt-2">+88 01742394552</p>
                  </div>

                  <img
                     src={"./hasib.png"}
                     alt="Contact person visual"
                     className="w-full h-full object-cover"
                     style={{ filter: "contrast(1.2) brightness(0.9)" }}
                  />

                  {/* Sidebar (fixed right) */}
                  <div className="fixed top-1/4 right-0 rounded-4xl w-16 flex flex-col bg-gray-900 shadow-lg z-20">
                     {sidebarItems.map((item, index) => (
                        <div
                           key={index}
                           onClick={() => scrollToSection(item.id)}
                           className="group relative flex justify-center items-center h-10 w-full hover:bg-gray-700 cursor-pointer transition-all"
                        >
                           <item.icon className="text-white w-4 h-4" />
                           <span className="absolute left-16 bg-gray-800 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">
                              {item.label}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* RIGHT SIDE FORM */}
               <div className="w-full lg:w-3/5 p-8 sm:p-12 md:p-16">
                  <h2 className="text-4xl font-extrabold text-black dark:text-white mb-10 tracking-wider">
                     LETS TALK
                  </h2>

                  {status === "success" && (
                     <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg">
                        ✓ Message sent successfully! I&apos;ll get back to you soon.
                     </div>
                  )}
                  {status === "error" && (
                     <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
                        ✗ Failed to send message. Please try again.
                     </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                     {/* Name + Email */}
                     <div className="flex flex-col sm:flex-row gap-8">

                        {/* Full Name */}
                        <div className="w-full sm:w-1/2">
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                              Full Name*
                           </label>
                           <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                              className="w-full p-2 border-b border-gray-400 dark:border-gray-600 
                   bg-transparent outline-none 
                   text-gray-800 dark:text-white 
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:border-black dark:focus:border-white"
                           />
                        </div>

                        {/* Email */}
                        <div className="w-full sm:w-1/2">
                           <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                              Email*
                           </label>
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email Address"
                              required
                              className="w-full p-2 border-b border-gray-400 dark:border-gray-600
                   bg-transparent outline-none
                   text-gray-800 dark:text-white
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:border-black dark:focus:border-white"
                           />
                        </div>
                     </div>

                     {/* Subject */}
                     <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                           Subject*
                        </label>
                        <input
                           type="text"
                           name="subject"
                           value={formData.subject}
                           onChange={handleChange}
                           placeholder="Subject"
                           required
                           className="w-full p-2 border-b border-gray-400 dark:border-gray-600
                 bg-transparent outline-none
                 text-gray-800 dark:text-white
                 placeholder-gray-500 dark:placeholder-gray-400
                 focus:border-black dark:focus:border-white"
                        />
                     </div>

                     {/* Message */}
                     <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                           Message*
                        </label>
                        <textarea
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           rows="4"
                           required
                           className="w-full p-2 border-b border-gray-400 dark:border-gray-600
                 bg-transparent outline-none resize-none
                 text-gray-800 dark:text-white
                 placeholder-gray-500 dark:placeholder-gray-400
                 focus:border-black dark:focus:border-white"
                        ></textarea>
                     </div>

                     {/* Button */}
                     <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-black text-white 
               dark:bg-white dark:text-black 
               rounded-lg hover:opacity-80 disabled:opacity-50"
                     >
                        {loading ? "Sending..." : "Send Message"}
                     </button>
                  </form>

               </div>
            </div>
         </div>
      </section>
   );
}
