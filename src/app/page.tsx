"use client";

import { useEffect, useState } from "react";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Topbar from "@/components/sections/Topbar";
import Work from "@/components/sections/Work";

const Home = () => {
   const [headerActive, setHeaderActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setHeaderActive(window.scrollY > 200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div className="overflow-hidden">
         <Topbar />
         <div className="relative z-10">
            <Header />
         </div>
         <div
            className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${
               headerActive ? "translate-y-0" : "-translate-y-full"
            }`}
         >
            <Header />
         </div>
         <Hero />
         <About />
         <Stats />
         <Services />
         <Work />
         <Testimonials />
         <Faq />
         <Contact />
         <Footer />
      </div>
   );
};

export default Home;
