import React from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white font-poppins">
      {/* Hero Section */}
      <div
        className="relative h-80 md:h-[420px] w-full bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg tracking-wide">
            Welcome to MealZone
          </h1>
          <p className="mt-4 text-lg md:text-xl text-orange-200 drop-shadow-md leading-relaxed max-w-prose mx-auto">
            Dive into a world of delicious meals and recipes. Explore categories
            and find your next favorite dish!
          </p>
          <button
            onClick={() => nav('/mealCategory')}
            className="mt-8 px-8 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Go to Categories"
          >
            Explore Categories
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 space-y-24">
        {/* Box 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-32">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
              alt="What is MealZone?"
              className="w-full h-96 object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left max-w-prose mx-auto md:mx-0 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-semibold text-orange-600 tracking-wide mb-6">
              What is MealZone?
            </h2>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              MealZone is a comprehensive web application designed to help food
              enthusiasts discover, explore, and prepare a wide variety of
              recipes. By offering categorized recipes, detailed ingredient
              measurements, and step-by-step video tutorials, MealZone makes
              cooking accessible, enjoyable, and efficient for users of all skill
              levels.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center gap-8 md:gap-32 md:flex-row-reverse">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
              alt="Why MealZone Works for You"
              className="w-full h-96 object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left max-w-prose mx-auto md:mx-0 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-semibold text-orange-600 tracking-wide mb-6">
              Why MealZone Works for You
            </h2>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              MealZone combines an intuitive design with carefully curated
              categories and accurate recipe data, providing detailed ingredient
              measurements and video tutorials to ensure a smooth and inspiring
              cooking experience tailored to both beginners and seasoned chefs
              alike.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-32">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Contact Us"
              className="w-full h-96 object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left max-w-prose mx-auto md:mx-0 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-semibold text-orange-600 tracking-wide mb-6">
              Contact Us
            </h2>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed whitespace-pre-line">
              For inquiries, feedback, or support, please feel free to reach out:<br />
              Email: support@mealzone.com<br />
              Phone: 9703212340
            </p>

          </div>
        </div>
      </section>


    </div>
  );
}
