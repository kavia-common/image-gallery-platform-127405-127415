import React, { useState, useEffect } from "react";
import Logo from "../shared/Logo";

const Header = ({ onSearch }) => {
  const [isSticky, setSticky] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <header className={`w-full top-0 z-30 sticky bg-white/80 backdrop-blur border-b border-gray-200 transition-shadow duration-300 ${isSticky ? "shadow-md" : ""}`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
        <Logo />
        <form onSubmit={handleSearch} className="w-full md:w-2/5 flex mt-2 md:mt-0">
          <input
            type="text"
            className="flex-1 border rounded-l px-4 py-2 outline-none focus:ring-2 focus:ring-primary transition"
            placeholder="Search images…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search images"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-r font-semibold hover:bg-secondary transition-colors"
            aria-label="Search"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
