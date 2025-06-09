"use client";
import { type FC, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { RxHamburgerMenu } from "react-icons/rx";
import { PersonalLogo } from "@/icons";

type NavLinkProps = {
  children: React.ReactNode;
  path: string;
};

const NavLink: FC<NavLinkProps> = ({ children, path }) => {
  return (
    <Link
      href={path}
      className="text-white outline-none underline-offset-4 decoration-cyan hover:underline focus:underline"
      aria-label={`Go to ${children} page`}
    >
      {children}
    </Link>
  );
};

const navLinks: NavLinkProps[] = [
  {
    children: "Resume",
    path: "/resume",
  },
  // {
  //     children: "Blog",
  //     path: "/blog"
  // },
  {
    children: "Projects",
    path: "/projects",
  },
  // {
  //     children: "Experiments",
  //     path: "/experiments"
  // },
  // {
  //   children: "Contact",
  //   path: "/contact",
  // },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // return (
  //     <div className="w-full flex justify-between items-center py-5 px-10 bg-anthracite">
  //         <Link href="/">
  //             <PersonalLogo size={60} />
  //         </Link>
  //         <div className="md:flex items-center justify-between gap-x-10 hidden">
  //             <NavLink path="/resume">Resume</NavLink>
  //             {/* <NavLink path="/blog">Blog</NavLink>
  //             <NavLink path="/projects">Projects</NavLink>
  //             <NavLink path="/experiments">Experiments</NavLink> */}
  //             <NavLink path="/contact">Contact</NavLink>
  //         </div>
  //     </div>
  // );
  return (
    <nav className="bg-anthracite">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          aria-label="Home Page"
        >
          <PersonalLogo size={60} />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <RxHamburgerMenu size={45} />
        </button>
        <div
          className={clsx("w-full md:block md:w-auto", {
            block: isOpen,
            hidden: !isOpen,
          })}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col gap-y-2 p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navLinks.map(({ children, path }, index) => (
              <li key={`${index}-${children}`}>
                <NavLink path={path}>{children}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
