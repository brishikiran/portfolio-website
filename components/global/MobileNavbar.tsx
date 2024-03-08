import { useEffect, useState } from "react";

import Link from "next/link";
import {routes} from "@/data/global";
import useDelayedRender from "use-delayed-render";
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'; // Import relevant icons
export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${isMenuRendered && 'bg-bg'} p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none font-bold text-lg">
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
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col absolute bg-bg ${isMenuRendered && 'menuRendered'}`}
        >
          {routes.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: `${150 + index * 25}ms` }}
            >
              <a
                href={item.path}
                className="flex w-auto pb-4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(item.path, '_blank');
                }}
              >
                {item.title}
                {/* Add icons based on item title */}
                {item.title === 'GitHub' && <FaGithub className="ml-1" />}
                {item.title === 'LinkedIn' && <FaLinkedin className="ml-1" />}
                {item.title === 'Resume' && <FaFileAlt className="ml-1" />}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
