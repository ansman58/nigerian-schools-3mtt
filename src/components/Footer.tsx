import React from "react";
import { footerItems } from "../data/footer";

const Footer = () => {
  return (
    <footer className="px-2 py-4 text-white md:px-20 bg-primary ">
      <div className="">
        <div className="mb-8 text-xl font-bold sm:text-4xl">
          NigerianSchools
        </div>

        <div className="grid mb-10 grid-cols-2 gap-6 sm:grid-cols-4 basis-[80%]">
          {footerItems.map((item, index) => (
            <div key={index} className="">
              <p className="mb-4 text-xl font-semibold">{item.title}</p>
              <ul className="">
                {item.links.map((link, index) => (
                  <li key={index + "child"} className="mb-2 [&>a]:hover:text-amber-400">
                    <a href={link.href}> {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p>
        Copyright © {new Date().getFullYear()} NigerianSchools Limited All
        Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
