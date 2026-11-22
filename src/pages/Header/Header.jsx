
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

import { Orbit } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(() => {
    return location.pathname.substring(1) || "home";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update active link when route changes
  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveLink(path);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">

      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">

        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">

          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">

            {/* Mobile Header: Logo + Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">

              {/* 3D Orbit Logo */}
              <Link
                to="/"
                className="flex items-center text-white font-bold group"
              >
                <Orbit
                  className="w-8 h-8 text-cyan-400 animate-orbit-3d group-hover:hidden"
                />

                {/* Name shown on hover */}
                <span className="hidden group-hover:inline text-sm ml-1">
                  Sagar Swain
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">

                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300
                      flex items-center gap-2
                      hover:bg-white/10
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />

                    <span>{text}</span>
                  </Link>
                ))}

              </div>
            </div>

          </nav>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }

        /* Orbit: Simultaneous X-axis and Z-axis rotation */
        @keyframes orbit-3d {
          from {
            transform:
              perspective(500px)
              rotateX(0deg)
              rotateZ(0deg);
          }

          to {
            transform:
              perspective(500px)
              rotateX(360deg)
              rotateZ(360deg);
          }
        }

        .animate-orbit-3d {
          transform-style: preserve-3d;
          animation: orbit-3d 1.7s linear infinite;
          transform-origin: center;
        }
      `}</style>

    </header>
  );
}
