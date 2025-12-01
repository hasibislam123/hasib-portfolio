"use client";
import React, { useState } from "react";
import { FaHome, FaUser,FaAlignCenter , FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const sidebarItems = [
   { icon: FaHome, label: "Home", id: "home" },
   { icon: FaUser, label: "About", id: "about" },
   { icon: FaAlignCenter , label: "Skills", id: "skills" },
   { icon: FaProjectDiagram, label: "Works", id: "works" },
   { icon: FaEnvelope, label: "Contact", id: "contact" },
];

export default function Contact() {
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      subject: '',
      message: ''
   });
   const [status, setStatus] = useState('');
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

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
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus('');

      // Web3Forms API - Get your free access key from https://web3forms.com/
      const accessKey = 'YOUR_ACCESS_KEY_HERE'; // Replace with your access key from web3forms.com

      const formDataToSend = {
         access_key: accessKey,
         name: formData.fullName,
         email: formData.email, // This will be the sender's email in your inbox
         subject: `Portfolio Contact: ${formData.subject}`,
         message: formData.message,
         from_name: formData.fullName,
         replyto: formData.email, // Ensures replies go back to the sender
         to: 'hasib64dj@gmail.com' // Your email address
      };

      try {
         const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: JSON.stringify(formDataToSend)
         });

         const result = await response.json();

         if (result.success) {
            setStatus('success');
            setFormData({ fullName: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 5000);
         } else {
            console.error('Form submission failed:', result);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
         }
      } catch (error) {
         console.error('Email send failed:', error);
         setStatus('error');
         setTimeout(() => setStatus(''), 5000);
      } finally {
         setLoading(false);
      }
   };

   return (
      // Outer container with a light background
      <section className="relative h-210 min-h-screen py-24 px-4 sm:px-6 lg:px-8   flex justify-center items-center overflow-hidden">

         <h1
            className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 text-[11vw] font-black text-black/5 dark:text-black/10 pointer-events-none select-none z-0"
            style={{
               letterSpacing: '0.8rem',
               lineHeight: '1.2'
            }}
         >
            CONTACT
         </h1>

         {/* Main Card/Container for the Contact Form */}
         <div className="relative z-10 w-full h-150 max-w-5xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">

               {/* Left Side: Image/Visual Block */}
               <div className="w-full lg:w-2/5 min-h-64 lg:min-h-full relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col  items-end pr-[10px] z-10 text-right">
                     <p className="text-white text-lg font-semibold">hasib64dj@gmail.com</p>
                     <p className="text-white text-lg font-semibold mt-2">+88 01742394552</p>
                  </div>

                  {/* Image */}
                  <img
                     src={"./hasib.png"} // CHANGE THIS PATH
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
                           {/* Hover text */}
                           <span className="absolute left-16 bg-gray-800 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">
                              {item.label}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>


               {/* Right Side: Form Block */}
               <div className="w-full lg:w-3/5 p-8 sm:p-12 md:p-16">
                  <h2 className="text-4xl font-extrabold text-black dark:text-white mb-10 tracking-wider">
                     LETS TALK
                  </h2>

                  {/* Status Messages */}
                  {status === 'success' && (
                     <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg">
                        ✓ Message sent successfully! I&apos;ll get back to you soon.
                     </div>
                  )}
                  {status === 'error' && (
                     <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
                        ✗ Failed to send message. Please try again or email me directly.
                     </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                     {/* Row 1: Full Name and Email */}
                     <div className="flex flex-col sm:flex-row gap-8">
                        {/* Full Name */}
                        <div className="w-full sm:w-1/2">
                           <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                              Full Name*
                           </label>
                           <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Your Name here"
                              required
                              className="w-full p-2 border-b border-gray-400 dark:border-gray-600 focus:border-black dark:focus:border-white focus:outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-500 transition-colors duration-300"
                           />
                        </div>

                        {/* Email */}
                        <div className="w-full sm:w-1/2">
                           <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                              Email*
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email Address"
                              required
                              className="w-full p-2 border-b border-gray-400 dark:border-gray-600 focus:border-black dark:focus:border-white focus:outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-500 transition-colors duration-300"
                           />
                        </div>
                     </div>

                     {/* Row 2: Subject */}
                     <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                           Subject*
                        </label>
                        <input
                           type="text"
                           id="subject"
                           name="subject"
                           value={formData.subject}
                           onChange={handleChange}
                           placeholder="Write Subject line"
                           required
                           className="w-full p-2 border-b border-gray-400 dark:border-gray-600 focus:border-black dark:focus:border-white focus:outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-500 transition-colors duration-300"
                        />
                     </div>

                     {/* Row 3: Message */}
                     <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                           Message*
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           rows="4"
                           required
                           className="w-full p-2 border-b border-gray-400 dark:border-gray-600 focus:border-black dark:focus:border-white focus:outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-500 resize-none transition-colors duration-300"
                        ></textarea>
                     </div>

                     {/* Submit Button */}
                     <div className="pt-4">
                        <button
                           type="submit"
                           disabled={loading}
                           className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                           {loading ? 'Sending...' : 'Send Message'}
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}