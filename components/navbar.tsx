"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-5 z-50 flex items-center bg-gray-100 shadow m-5 rounded-lg">
      <div
        className="flex-1 py-4 px-6 text-center cursor-pointer hover:bg-gray-200 transition"
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
      >
        Projects
      </div>
      <div
        className="flex-1 py-4 px-6 text-center cursor-pointer hover:bg-gray-200 transition"
        onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
      >
        Experience
      </div>
      <div
        className="flex-1 py-4 px-6 text-center cursor-pointer hover:bg-gray-200 transition"
        onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
      >
        Gallery
      </div>
    </nav>
  );
}