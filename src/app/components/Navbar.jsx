"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section
      const sections = navLinks.map(link => link.path.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="glass-nav rounded-2xl px-4 md:px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Logo + App Name */}
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden">
                  <Image
                    src="/images/portfolio_logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover invert"
                  />
                </div>
              </Link>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="flex items-center p-2 rounded-lg text-foreground-secondary
                    hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="Toggle menu"
                >
                  {!navbarOpen ? (
                    <Bars3Icon className="h-6 w-6" />
                  ) : (
                    <XMarkIcon className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Right side - Navigation links (desktop) */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`nav-link text-sm ${
                      activeSection === link.path.substring(1) ? "active" : ""
                    }`}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu overlay */}
            {navbarOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-accent/10">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className={`nav-link block py-2 text-base ${
                          activeSection === link.path.substring(1) ? "active" : ""
                        }`}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
