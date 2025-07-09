import { useState } from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-orange-600 cursor-pointer"
          onClick={() => {
            nav("/");
            setMenuOpen(false);
          }}
        >
          🍽️ MealZone
        </h1>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-3">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg text-orange-700 font-medium transition"
          >
            ← Back
          </button>

          <button
            onClick={() => nav("/mealCategory")}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition"
          >
            Categories
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-orange-100 transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                /> // X icon when open
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                /> // Hamburger icon when closed
              )}
            </svg>
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
              <button
                onClick={() => {
                  window.history.back();
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-orange-700 hover:bg-orange-100"
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  nav("/mealCategory");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-b-md"
              >
                Categories
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
