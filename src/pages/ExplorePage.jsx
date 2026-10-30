import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, BookOpen, Clock, Bookmark, ArrowUpDown, Check } from 'lucide-react';
import Book3DCard from '../components/Book3DCard';
import { CATEGORIES, RESOURCES } from '../data/mockData';

export default function ExplorePage({
  onSelectResource,
  onOpenReader,
  bookmarkedIds = [],
  onToggleBookmark
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [tierFilter, setTierFilter] = useState('all'); // 'all' | 'free' | 'vault'
  const [sortBy, setSortBy] = useState('rating'); // 'rating' | 'popular' | 'pages' | 'duration'

  const filteredAndSortedResources = useMemo(() => {
    let list = RESOURCES.filter(res => {
      const matchCat = selectedCategory === 'all' || res.category === selectedCategory;
      const matchTier = 
        tierFilter === 'all' || 
        (tierFilter === 'free' && res.isFreePreview) ||
        (tierFilter === 'vault' && !res.isFreePreview);
      
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = 
        !q ||
        res.title.toLowerCase().includes(q) ||
        res.author.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.tags.some(t => t.toLowerCase().includes(q));

      return matchCat && matchTier && matchQuery;
    });

    list.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return b.readersCount - a.readersCount;
      if (sortBy === 'pages') return b.pages - a.pages;
      if (sortBy === 'duration') return parseFloat(b.readTime) - parseFloat(a.readTime);
      return 0;
    });

    return list;
  }, [searchQuery, selectedCategory, tierFilter, sortBy]);

  const featured = RESOURCES[0];

  return (
    <div className="min-h-screen py-10 bg-[#F4F0E8] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Title & Breadcrumb */}
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
            ACADEMIC VAULT ARCHIVE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#183D32] mt-1">
            Explore the Digital Library
          </h1>
          <p className="text-xs sm:text-sm text-[#5F665C] max-w-2xl mt-2 font-sans">
            Search across our comprehensive repository of peer-reviewed monographs, legal treatises, systems architecture treatises, and scientific manuscripts.
          </p>
        </div>

        {/* Featured Folio Highlight Hero */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="p-6 sm:p-8 bg-[#183D32] text-[#F4F0E8] rounded-sm border-2 border-[#B69A65]/40 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#B69A65]/20 text-[#D5C299] text-[11px] font-mono tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> CURATOR'S MONOGRAPH OF THE MONTH
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#F4F0E8] leading-tight">
                  {featured.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#D5C299] font-medium">
                  {featured.author} • {featured.institution}
                </p>
                <p className="text-xs text-[#EDE8DE] leading-relaxed max-w-2xl line-clamp-2">
                  {featured.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenReader(featured)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#B69A65] hover:bg-[#D5C299] text-[#121915] font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow-md transition-all"
                  >
                    <BookOpen className="w-4 h-4" /> Open In Study Workspace
                  </button>
                  <button
                    onClick={() => onSelectResource(featured)}
                    className="px-5 py-2.5 bg-transparent hover:bg-white/10 text-[#F4F0E8] border border-white/30 font-mono text-xs uppercase tracking-wider rounded-sm transition-all"
                  >
                    Inspect Full Folio Details
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-48 sm:w-56 aspect-[1/1.45] rounded shadow-2xl border border-[#B69A65]/50 overflow-hidden relative">
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full h-full object-cover filter contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1713] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[10px] font-mono">
                    <span className="block font-serif text-sm font-bold leading-tight line-clamp-1">{featured.title}</span>
                    <span className="text-[#D5C299]">{featured.pages} Pages • Full Free Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10 space-y-4 shadow-sm">
          {/* Main Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#183D32] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, treatise title, author, or keyword (e.g., 'Constitutional', 'Distributed', 'Mechanics')..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#1E231D]/15 rounded-sm text-xs sm:text-sm text-[#1E231D] focus:outline-none focus:border-[#183D32] font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs font-mono text-[#7E8377] hover:text-[#183D32]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-sm whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#183D32] text-[#F4F0E8] font-bold shadow-sm'
                    : 'bg-[#F4F0E8] text-[#5F665C] hover:bg-white hover:text-[#1E231D] border border-[#1E231D]/10'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Secondary Filters & Sorts */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#1E231D]/8 text-xs font-mono text-[#5F665C]">
            <div className="flex items-center gap-2">
              <span className="text-[#7E8377]">Access Tier:</span>
              {[
                { id: 'all', label: 'All Resources' },
                { id: 'free', label: 'Free Previews Only' },
                { id: 'vault', label: 'Vault Pass Required' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setTierFilter(t.id)}
                  className={`px-2.5 py-1 rounded-sm border ${
                    tierFilter === t.id
                      ? 'bg-[#183D32] text-[#F4F0E8] border-[#183D32]'
                      : 'bg-white/80 text-[#5F665C] border-[#1E231D]/10 hover:border-[#183D32]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#8E7445]" />
              <span className="text-[#7E8377]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#1E231D]/15 rounded-sm px-2 py-1 text-xs text-[#1E231D] focus:outline-none focus:border-[#183D32]"
              >
                <option value="rating">Highest Scholarly Rating</option>
                <option value="popular">Most Studied by Aspirants</option>
                <option value="pages">Most Comprehensive (Pages)</option>
                <option value="duration">Study Duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count Summary */}
        <div className="flex items-center justify-between text-xs font-mono text-[#5F665C] px-1">
          <span>
            Showing <strong className="text-[#183D32]">{filteredAndSortedResources.length}</strong> monographs in vault
          </span>
          {searchQuery && (
            <span>Filtered by "{searchQuery}"</span>
          )}
        </div>

        {/* Monograph Cards Grid */}
        {filteredAndSortedResources.length === 0 ? (
          <div className="py-20 text-center bg-[#EAE3D5]/60 rounded-sm border border-[#1E231D]/10">
            <h3 className="font-serif text-2xl text-[#183D32]">No matching academic treatises found</h3>
            <p className="text-xs text-[#5F665C] mt-1 max-w-md mx-auto">
              Try adjusting your query or resetting your category filter to explore all 1,200+ works in the StudyVault collection.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setTierFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-[#183D32] text-[#F4F0E8] text-xs font-mono rounded-sm"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedResources.map(resource => (
              <Book3DCard
                key={resource.id}
                resource={resource}
                isBookmarked={bookmarkedIds.includes(resource.id)}
                onToggleBookmark={onToggleBookmark}
                onSelectResource={onSelectResource}
                onOpenReader={onOpenReader}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
