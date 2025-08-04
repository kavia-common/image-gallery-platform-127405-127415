import React, { useState, useMemo } from "react";
import "./styles/tailwind.css";
import Header from "./components/Header";
import MasonryGrid from "./components/MasonryGrid";
import Footer from "./components/Footer";
import images from "./data/images";
import { debounce } from "./utils/debounce";

// PUBLIC_INTERFACE
function App() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(images);

  // Debounced search for UX and perf
  const handleSearch = useMemo(
    () =>
      debounce((query) => {
        setSearch(query);
        const q = query.toLowerCase();
        if (!q) setFiltered(images);
        else setFiltered(
          images.filter(
            (img) =>
              img.alt.toLowerCase().includes(q) ||
              img.author.toLowerCase().includes(q)
          )
        );
      }, 200),
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onSearch={handleSearch} />
      <main className="flex-1">
        <MasonryGrid images={filtered} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
