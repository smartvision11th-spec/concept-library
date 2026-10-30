import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ExternalLink, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { RESOURCES } from '../data/mockData';

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectResource,
  onOpenReader
}) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredResources = RESOURCES.filter(res => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesText = 
      res.title.toLowerCase().includes(q) ||
      res.author.toLowerCase().includes(q) ||
      res.description.toLowerCase().includes(q) ||
      res.tags.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesText;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#121915]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="w-full max-w-2xl bg-[#F4F0E8] border border-[#B69A65]/50 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[80vh]"
      >
        {/* Command Search Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#1E231D]/12 bg-[#EBE4D8]/90">
          <Search className="w-5 h-5 text-[#183D32] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search academic treatises, monographs, authors, or topics..."
            className="w-full bg-transparent text-[#1E231D] placeholder-[#7E8377] text-sm sm:text-base focus:outline-none font-sans"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-[#7E8377] hover:text-[#1E231D] mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-[#5F665C] bg-[#1E231D]/5 rounded border border-[#1E231D]/10">
            ESC to close
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#E3DBD0]/60 border-b border-[#1E231D]/8 overflow-x-auto text-xs font-mono">
          <span className="text-[#7E8377] flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {[
            { id: 'all', label: 'All' },
            { id: 'humanities', label: 'Humanities & Law' },
            { id: 'tech', label: 'Tech & Systems' },
            { id: 'business', label: 'Economics' },
            { id: 'competitive', label: 'Competitive' },
            { id: 'science', label: 'Sciences' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-sm transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#183D32] text-[#F4F0E8] font-semibold'
                  : 'text-[#5F665C] hover:bg-[#1E231D]/8 hover:text-[#1E231D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 divide-y divide-[#1E231D]/8">
          {filteredResources.length === 0 ? (
            <div className="py-12 text-center text-[#7E8377]">
              <p className="font-serif text-lg text-[#1E231D]">No academic monographs match your search</p>
              <p className="text-xs mt-1">Try keywords like "Constitutional", "Distributed", "Mechanics", or "Economics"</p>
            </div>
          ) : (
            filteredResources.map(res => (
              <div
                key={res.id}
                className="group p-3 hover:bg-[#EBE4D8]/80 transition-colors rounded-sm flex items-start justify-between gap-4"
              >
                <div 
                  onClick={() => {
                    onSelectResource(res);
                    onClose();
                  }}
                  className="cursor-pointer flex-1"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#183D32] mb-1">
                    <span className="uppercase tracking-wider">{res.categoryLabel}</span>
                    <span>•</span>
                    <span className="text-[#8E7445]">{res.pages} pages</span>
                    {res.isFreePreview && (
                      <span className="text-emerald-700 font-medium bg-emerald-100/70 px-1.5 rounded">
                        Free Preview
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-base text-[#1E231D] group-hover:text-[#183D32] transition-colors leading-snug">
                    {res.title}
                  </h4>
                  <p className="text-xs text-[#5F665C] line-clamp-1 mt-0.5">
                    {res.author} — {res.institution}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 self-center">
                  <button
                    onClick={() => {
                      onOpenReader(res);
                      onClose();
                    }}
                    title="Open in Study Workspace"
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] rounded-sm transition-colors whitespace-nowrap shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#B69A65]" /> Study
                  </button>
                  <button
                    onClick={() => {
                      onSelectResource(res);
                      onClose();
                    }}
                    title="View Details"
                    className="p-1.5 text-[#5F665C] hover:text-[#183D32] hover:bg-[#1E231D]/5 rounded-sm transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#EBE4D8] border-t border-[#1E231D]/10 flex items-center justify-between text-[11px] text-[#7E8377] font-mono">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A65]" /> 8 Curated Monograph Vaults Available
          </span>
          <span>Press ↵ to select or click directly</span>
        </div>
      </div>
    </div>
  );
}
