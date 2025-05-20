"use client";

import { ReactElement, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
   PiWallFill,
   PiPaintRollerFill,
   PiWrenchFill,
   PiUserGearFill,
} from "react-icons/pi";
import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";

interface Thumb {
   url: string;
}

interface ServiceDataProps {
   name: string;
   icon: ReactElement;
   title: string;
   description: string;
   serviceList: string[];
   thumbs: Thumb[];
}

const serviceDataMock: ServiceDataProps[] = [
   {
      name: "construction",
      icon: <PiWallFill />,
      title: "Construction Services",
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceList: [
         "Residential Builds",
         "Structural Design",
         "Site Prep",
         "Concrete Work",
         "Framing & Roofing",
         "Interior Finish",
      ],
      thumbs: [
         { url: "/assets/img/services/thumb-1.jpg" },
         { url: "/assets/img/services/thumb-2.jpg" },
      ],
   },
   {
      name: "renovation",
      icon: <PiPaintRollerFill />,
      title: "Renovation Services",
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceList: [
         "Kitchen Remodel",
         "Basement Finish",
         "Flooring",
         "Energy Upgrades",
         "Carpentry",
         "Painting",
      ],
      thumbs: [
         { url: "/assets/img/services/thumb-3.jpg" },
         { url: "/assets/img/services/thumb-4.jpg" },
      ],
   },
   {
      name: "restoration",
      icon: <PiWrenchFill />,
      title: "Restoration Services",
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceList: [
         "Historic Restore",
         "Water Damage",
         "Fire Repair",
         "Structural Fix",
         "Mold Removal",
         "Roof Restore",
      ],
      thumbs: [
         { url: "/assets/img/services/thumb-4.jpg" },
         { url: "/assets/img/services/thumb-5.jpg" },
      ],
   },
   {
      name: "consulting",
      icon: <PiUserGearFill />,
      title: "Consulting Services",
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceList: [
         "Project Plans",
         "Costing",
         "Site Management",
         "Permits",
         "Sustainability",
         "Safety",
      ],
      thumbs: [
         { url: "/assets/img/services/thumb-1.jpg" },
         { url: "/assets/img/services/thumb-3.jpg" },
      ],
   },
];

const Services = () => {
   const [activeTab, setActiveTab] = useState("construction");
   return (
      <section id="services" className="pt-16 pb-16 xl:pt-32">
         <div className="container mx-auto">
            <div className="text-center max-w-[540px] mx-auto mb-20">
               <Pretitle text="Our Services" center={true} />
               <h2 className="h2 mb-3">Solutions We Provide</h2>
               <p className="mb-11 max-w-[480px] mx-auto">
                  Offering tailored construction solutions, from planning to
                  completion, with a focus on quality and innovation.
               </p>
            </div>
            <Tabs
               defaultValue="construction"
               onValueChange={(value) => setActiveTab(value)}
               className="flex flex-col xl:flex-row w-full gap-[30px]"
            >
               <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full rounded-none p-0 bg-transparent xl:w-[345px]">
                  {serviceDataMock.map((item) => {
                     return (
                        <TabsTrigger
                           key={item.name}
                           value={item.name}
                           className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
                        >
                           <div
                              className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                                 activeTab === item.name
                                    ? "bg-primary text-white"
                                    : "bg-accent text-primary"
                              }`}
                           >
                              <div className="text-4xl">{item.icon}</div>
                           </div>
                           <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                              {item.name}
                           </div>
                        </TabsTrigger>
                     );
                  })}
               </TabsList>
               <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
                  {serviceDataMock.map((item) => (
                     <TabsContent
                        key={item.name}
                        value={item.name}
                        className="m-0"
                     >
                        <div className="flex flex-col md:flex-row gap-[30px]">
                           <div className="flex md:flex-col gap-5 xl:gap-[30px] ">
                              {item.thumbs.map((thumb, index) => (
                                 <div
                                    key={index}
                                    className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                                 >
                                    <Image src={thumb.url} fill alt="" />
                                 </div>
                              ))}
                           </div>
                           <div>
                              <div>
                                 <h3 className="h3 mb-6">{item.title}</h3>
                                 <p className="mb-10">{item.description}</p>
                                 <ul className="grid grid-cols-2 gap-4 mb-12">
                                    {item.serviceList.map((service, index) => {
                                       return (
                                          <li
                                             key={index}
                                             className="flex items-center gap-4"
                                          >
                                             <div className="w-[6px] h-[6px] bg-accent"></div>
                                             <div className="capitalize font-medium text-primary">
                                                {service}
                                             </div>
                                          </li>
                                       );
                                    })}
                                 </ul>
                                 <div className="xl:pt-7">
                                    <Button>Read More</Button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </TabsContent>
                  ))}
               </div>
            </Tabs>
         </div>
      </section>
   );
};

export default Services;
