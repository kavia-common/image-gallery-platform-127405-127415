import React from "react";

const Logo = () => (
  <span className="flex items-center space-x-2">
    <svg className="inline h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32">
      <rect x="6" y="6" width="20" height="20" rx="6" stroke="currentColor" fill="#a5b4fc" />
      <circle cx="16" cy="16" r="5" fill="#4f46e5" />
    </svg>
    <span className="text-xl font-bold tracking-tight text-primary">PinGallery</span>
  </span>
);

export default Logo;
