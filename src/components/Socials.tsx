import Link from "next/link";
import { JSX } from "react";
import {
   RiFacebookFill,
   RiYoutubeFill,
   RiTwitterXFill,
   RiInstagramFill,
} from "react-icons/ri";

interface SocialsProps {
   containerStyles?: string;
   iconStyles?: string;
}

interface IconProps {
   icon: JSX.Element;
   path: string;
}

const socials: IconProps[] = [
   {
      icon: <RiFacebookFill />,
      path: "",
   },
   {
      icon: <RiYoutubeFill />,
      path: "",
   },
   {
      icon: <RiTwitterXFill />,
      path: "",
   },
   {
      icon: <RiInstagramFill />,
      path: "",
   },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
   return (
      <div className={`${containerStyles}`}>
         {socials.map((item, index) => {
            return (
               <Link href={item.path} key={index} className={`${iconStyles}`}>
                  {item.icon}
               </Link>
            );
         })}
      </div>
   );
};

export default Socials;
