"use client";

import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import Button from "./Button";

interface LinksProps {
   name: string;
   path: string;
}

const links: LinksProps[] = [
   {
      name: "home",
      path: "home",
   },
   {
      name: "about",
      path: "about",
   },
   {
      name: "services",
      path: "services",
   },
   {
      name: "projects",
      path: "projects",
   },
   {
      name: "contact",
      path: "contact",
   },
];

const Header = () => {
   return (
      <header className="bg-primary py-4">
         <div className="container mx-auto">
            <div className="flex items-center justify-between">
               <div>
                  <Logo />
               </div>
               <nav className="hidden xl:flex items-center gap-12">
                  <ul className="flex">
                     {links.map((link, index) => {
                        return (
                           <li
                              key={index}
                              className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                           >
                              <ScrollLink
                                 to={link.path}
                                 smooth
                                 spy
                                 className="cursor-pointer"
                                 activeClass="text-accent"
                              >
                                 {link.name}
                              </ScrollLink>
                           </li>
                        );
                     })}
                  </ul>
                  <Button backgroundColor="bg-white">Get a quote</Button>
               </nav>
               <div className="xl:hidden ">
                  <NavMobile />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
