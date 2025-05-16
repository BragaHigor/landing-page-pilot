"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

interface StatsDataProps {
   endCountNum: number;
   endCountText: string;
   text: string;
}

const createStats = (
   endCountNum: number,
   endCountText: string,
   text: string
): StatsDataProps => ({ endCountNum, endCountText, text });

const statsData: StatsDataProps[] = [
   createStats(99, "%", "Client Satisfaction"),
   createStats(800, "+", "Successful Projects"),
   createStats(32, "k", "Happy Clients"),
   createStats(26, "+", "Years of Experience"),
];

const Stats = () => {
   const ref = useRef(null);
   const inView = useInView(ref, { threshold: 0.2 });
   return (
      <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
         <div className="container mx-auto h-full">
            <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
               {statsData.map((item, index) => {
                  return (
                     <div className="w-full" key={index}>
                        <div className="text-5xl font-semibold">
                           {inView && (
                              <CountUp
                                 start={0}
                                 end={item.endCountNum}
                                 delay={0.5}
                                 duration={3}
                              />
                           )}
                           <span>{item.endCountText}</span>
                        </div>
                        <p>{item.text}</p>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Stats;
