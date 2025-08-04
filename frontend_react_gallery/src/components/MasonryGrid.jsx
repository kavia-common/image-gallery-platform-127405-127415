import React from "react";

// Helper for dynamic column layout based on screen size
const useColumns = () => {
  const [columns, setColumns] = React.useState(1);

  React.useEffect(() => {
    function updateColumns() {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else if (window.innerWidth < 1536) setColumns(3);
      else setColumns(4);
    }
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);
  
  return columns;
};

/**
 * PUBLIC_INTERFACE
 * MasonryGrid displays the Pinterest-like grid of cards, responsive to columns.
 */
const MasonryGrid = ({ images }) => {
  const columns = useColumns();

  // Distribute images into columns
  const distribute = () => {
    const cols = Array.from({ length: columns }, () => []);
    images.forEach((img, idx) => {
      cols[idx % columns].push(img);
    });
    return cols;
  };

  const gridColumns = distribute();

  return (
    <div className="w-full max-w-6xl mx-auto px-2 py-6">
      <div className="flex gap-4">
        {gridColumns.map((col, i) => (
          <div key={i} className="flex flex-col gap-4 flex-1">
            {col.map((img) => (
              <div key={img.id} className="rounded-lg overflow-hidden shadow-sm bg-white">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full"
                  style={{ aspectRatio: `${img.width} / ${img.height}` }}
                  loading="lazy"
                />
                <div className="p-2">
                  <div className="font-medium text-sm">{img.alt}</div>
                  <div className="text-xs text-gray-400">by {img.author}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
