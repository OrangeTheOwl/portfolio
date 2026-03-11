"use client";

import { PERSONAL_INFO } from "@/data/constants";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("projects");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Desktop Navigation - Shows on screens ≥ 1280px (xl breakpoint) */}
      <nav 
        className={`
          hidden lg:block
          sticky top-5 z-50 mx-5
          transition-all duration-300
          ${isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg" 
            : "bg-white/90 backdrop-blur-sm shadow-md"
          }
          rounded-2xl border border-neutral-200
        `}
      >
        <div className="flex items-center justify-between px-6 py-3">
          
          {/* Logo */}
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }}
            className="text-xl font-bold flex items-center gap-2 group"
          >
            <span className="text-primary-500 group-hover:text-primary-600 transition-colors duration-200">
              {PERSONAL_INFO.firstName}
            </span>
            <span className="text-dark-900 group-hover:text-primary-500 transition-colors duration-200">
              {PERSONAL_INFO.lastName}
            </span>
          </button>

          {/* Navigation Pills - Only first 5 items (exclude "Let's Talk") */}
          <div className="flex items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-5 py-2.5 rounded-xl
                  text-sm font-medium
                  transition-all duration-300
                  ${activeSection === item.id
                    ? "text-white"
                    : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                  }
                `}
              >
                {activeSection === item.id && (
                  <span 
                    className="absolute inset-0 bg-primary-500 rounded-xl -z-10"
                    style={{
                      boxShadow: "0 4px 12px rgba(241, 93, 14, 0.3)",
                    }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection("contact")}
            className="
              px-6 py-2.5
              bg-primary-500 hover:bg-primary-600 
              text-white font-semibold rounded-xl
              shadow-md hover:shadow-lg
              transition-all duration-200
              hover:scale-105
            "
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Mobile Navigation -hidden Shows on screens < 1280px */}
      <nav className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
              setIsMenuOpen(false);
            }}
            className="text-lg font-bold flex items-center gap-2"
          >
            <span className="text-primary-500">{PERSONAL_INFO.firstName}</span>
            <span className="text-dark-900">{PERSONAL_INFO.lastName}</span>
          </button>
          
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown - Includes all items including "Let's Talk" */}
        {isMenuOpen && (
          <div className="border-t border-neutral-200 bg-white shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full px-6 py-4 text-left font-medium
                  transition-colors duration-200
                  ${activeSection === item.id
                    ? "bg-primary-50 text-primary-600 border-l-4 border-primary-500"
                    : "text-neutral-700 hover:bg-neutral-50"
                  }
                  ${item.id === "contact" ? "border-t-2 border-neutral-100" : ""}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}