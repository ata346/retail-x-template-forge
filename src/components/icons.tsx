
import React from "react";

export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 300"
      fill="none"
      {...props}
    >
      {/* Circle of dots (peach and red) */}
      <g>
        {/* Peach dots */}
        <circle cx="130" cy="130" r="10" fill="#F8C4B4" />
        <circle cx="100" cy="110" r="10" fill="#F8C4B4" />
        <circle cx="80" cy="150" r="10" fill="#F8C4B4" />
        <circle cx="90" cy="190" r="10" fill="#F8C4B4" />
        <circle cx="120" cy="220" r="10" fill="#F8C4B4" />
        <circle cx="160" cy="230" r="10" fill="#F8C4B4" />
        <circle cx="200" cy="220" r="10" fill="#F8C4B4" />
        <circle cx="230" cy="190" r="10" fill="#F8C4B4" />
        <circle cx="240" cy="150" r="10" fill="#F8C4B4" />
        <circle cx="230" cy="110" r="10" fill="#F8C4B4" />
        <circle cx="200" cy="80" r="10" fill="#F8C4B4" />
        <circle cx="160" cy="70" r="10" fill="#F8C4B4" />
        
        {/* Red dots */}
        <circle cx="140" cy="100" r="8" fill="#E74C3C" />
        <circle cx="110" cy="140" r="8" fill="#E74C3C" />
        <circle cx="140" cy="180" r="8" fill="#E74C3C" />
        <circle cx="180" cy="190" r="8" fill="#E74C3C" />
        <circle cx="210" cy="160" r="8" fill="#E74C3C" />
        <circle cx="210" cy="120" r="8" fill="#E74C3C" />
        <circle cx="180" cy="90" r="8" fill="#E74C3C" />
      </g>
      
      {/* Retail X text in dark purple */}
      <text x="280" y="180" fontFamily="Arial" fontSize="120" fontWeight="bold" fill="#2D0A31">Retail X</text>
    </svg>
  ),
};
