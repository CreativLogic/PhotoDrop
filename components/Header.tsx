/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const PhotoDropLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="'Inter', sans-serif"
    fontWeight="800"
  >
    <rect width="100" height="100" rx="22" fill="#1e3a8a" />
    <text x="22" y="72" fontSize="60" fill="#38bdf8">
      P
    </text>
    <text x="50" y="72" fontSize="60" fill="#7dd3fc">
      D
    </text>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-8 border-b border-gray-700 bg-gray-800/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-center gap-3">
          <PhotoDropLogo className="w-8 h-8" />
          <h1 className="text-xl font-bold tracking-tight text-gray-100">
            PhotoDrop
          </h1>
      </div>
    </header>
  );
};

export default Header;