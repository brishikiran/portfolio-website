import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'; // Import relevant icons

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <img
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/logo_no_text.svg"
              width="60"
            />
            {"RishiKiran".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
  {routes.map((item, index) => {
    return (
      <li
      key={index}
      className={`list-none text-white flex items-center ${
        currentPage === item.title
          ? 'opacity-100'
          : 'opacity-40 hover:opacity-100 transition-opacity'
      }`}
    >
      <a
        href={item.path}
        onClick={(e) => {
          // Open LinkedIn, GitHub, and Resume links in a new tab
          if (item.title === 'LinkedIn' || item.title === 'GitHub' || item.title === 'Resume') {
            e.preventDefault();
            window.open(item.path, '_blank');
          }
        }}
      >
        {item.title}
      </a>
      {/* Add icons based on item title */}
      {item.title === 'GitHub' && <FaGithub className="ml-1" />}
      {item.title === 'LinkedIn' && <FaLinkedin className="ml-1" />}
      {item.title === 'Resume' && <FaFileAlt className="ml-1" />}
    </li>
    );
  })}
</ul>
    </nav>
  );
}

export default Navbar;
