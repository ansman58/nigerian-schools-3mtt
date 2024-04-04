import { List, X } from "@phosphor-icons/react";
import clsx from "clsx";
import React from "react";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Explore",
      link: "/explore",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      {/* Desktop menu */}
      <header className="items-center justify-between hidden px-8 py-4 text-white md:flex bg-primary">
        <p>NIgerianSchools</p>

        <ul className="items-center hidden gap-8 md:flex">
          {menus.map((menu, index) => (
            <li key={index} className="cursor-pointer hover:text-amber-400">
              {menu.name}
            </li>
          ))}
        </ul>
      </header>

      {/* Mobile Menu */}
      <header className="px-2 py-4 text-white md:hidden bg-primary">
        <div className="flex items-center justify-between">
          <p>NIgerianSchools</p>
          {menuIsOpen ? (
            <X
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="text-2xl font-bold"
            />
          ) : (
            <List
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="text-2xl font-bold"
            />
          )}
        </div>

        {menuIsOpen && (
          <ul
            className={clsx(
              "flex flex-col gap-4 mt-4 transition-transform duration-600",
              {
                "translate-x-0": menuIsOpen,
                "-translate-x-full": !menuIsOpen,
              }
            )}
          >
            {menus.map((menu, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:text-amber-400 hover:border hover:border-slate-50"
              >
                {menu.name}
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
