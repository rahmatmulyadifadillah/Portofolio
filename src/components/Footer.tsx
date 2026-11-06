import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 sm:px-10 border-t border-[#8B001F]/40 bg-[#030102]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        
        <div>
          <span>Created by </span>
          <span className="text-gray-200 font-bold tracking-wider">{portfolioData.identity.fullName}</span>
          <span className="mx-2 text-[#FF003C]">·</span>
          <span>All Rights Reserved</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-gray-400 font-medium tracking-wider">{portfolioData.identity.profession}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#050505] hover:bg-[#FF003C] text-gray-400 hover:text-white border border-[#FF003C]/40 flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_10px_rgba(255,0,60,0.3)] cursor-pointer"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
