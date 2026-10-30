import React from 'react';
import { Bookmark, Clock, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Book3DCard({
  resource,
  isBookmarked = false,
  onToggleBookmark,
  onSelectResource,
  onOpenReader,
  variant = 'standard'
}) {
  const {
    id,
    title,
    subtitle,
    author,
    institution,
    categoryLabel,
    isFreePreview,
    pages,
    readTime,
    coverImage,
    colorAccent = '#183D32',
    rating,
    readersCount,
    edition
  } = resource;

  return (
    <div className="group relative flex flex-col h-full bg-[#EBE4D8]/80 hover:bg-[#F2ECE1] border border-[#1E231D]/10 hover:border-[#B69A65]/60 transition-all duration-400 p-5 rounded-sm shadow-sm hover:shadow-xl">
      {/* Top Meta Header */}
      <div className="flex items-center justify-between mb-4 text-xs font-mono">
        <span className="px-2.5 py-0.5 rounded-sm bg-[#183D32]/10 text-[#183D32] font-semibold tracking-wider uppercase">
          {categoryLabel}
        </span>
        <div className="flex items-center gap-2">
          {isFreePreview ? (
            <span className="flex items-center gap-1 text-[#183D32] bg-[#183D32]/8 border border-[#183D32]/20 px-2 py-0.5 rounded-sm font-medium">
              <Sparkles className="w-3 h-3 text-[#B69A65]" /> Free Preview
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[#8E7445] bg-[#B69A65]/15 border border-[#B69A65]/30 px-2 py-0.5 rounded-sm font-semibold">
              Vault Pass
            </span>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark && onToggleBookmark(id);
            }}
            title={isBookmarked ? 'Remove from Saved' : 'Save to Study Vault'}
            className="p-1 rounded hover:bg-[#1E231D]/5 text-[#5F665C] hover:text-[#183D32] transition-colors"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#183D32] text-[#183D32]' : ''}`} />
          </button>
        </div>
      </div>

      {/* 3D Book Showcase Area */}
      <div 
        onClick={() => onSelectResource && onSelectResource(resource)}
        className="cursor-pointer relative w-full pt-4 pb-6 flex items-center justify-center perspective-1000 overflow-hidden"
      >
        {/* Book Container with 3D transform */}
        <div className="book-card-3d relative w-[170px] sm:w-[190px] aspect-[1/1.42] preserve-3d">
          {/* Main Front Cover */}
          <div className="absolute inset-0 rounded-r-md rounded-l-xs overflow-hidden shadow-2xl border-l-4 border-l-[#183D32]/70 bg-[#142E25] text-[#F4F0E8] flex flex-col justify-between p-4 z-10">
            {/* Background Image Texture */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter contrast-125"
              style={{ backgroundImage: `url(${coverImage})` }}
            />
            {/* Dark academic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F221B] via-[#142E25]/90 to-[#183D32]/95" />
            
            {/* Gold foil embossed header */}
            <div className="relative z-10">
              <div className="text-[9px] uppercase tracking-widest text-[#B69A65] font-mono border-b border-[#B69A65]/30 pb-1.5 mb-2">
                STUDYVAULT ACADEMIC FOLIO
              </div>
              <h4 className="font-serif text-sm sm:text-base leading-snug text-[#F4F0E8] line-clamp-3">
                {title}
              </h4>
            </div>

            {/* Book Spine Texture Line on Left */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none" />

            {/* Bottom Book Metadata */}
            <div className="relative z-10 pt-2 border-t border-[#B69A65]/20">
              <p className="text-[10px] text-[#D5C299] line-clamp-1 font-medium">{author}</p>
              <div className="flex items-center justify-between text-[9px] text-[#A6AEA4] mt-1 font-mono">
                <span>{pages} pp.</span>
                <span>{edition ? 'REV. 2026' : 'VAULT'}</span>
              </div>
            </div>
          </div>

          {/* Book Thickness / Page Edge Ridge on Right */}
          <div 
            className="absolute right-[-14px] top-[3px] bottom-[3px] w-[14px] bg-[#EDE7DA] border-y border-r border-[#D3CABB] shadow-inner"
            style={{
              transform: 'rotateY(90deg) translateZ(7px)',
              backgroundImage: 'repeating-linear-gradient(to bottom, #EDE7DA, #EDE7DA 2px, #DFD6C5 2px, #DFD6C5 4px)'
            }}
          />

          {/* Book Rear Shadow Base */}
          <div 
            className="absolute inset-0 bg-[#0A1713] rounded-r-md rounded-l-xs"
            style={{ transform: 'translateZ(-14px)' }}
          />
        </div>
      </div>

      {/* Resource Title & Details */}
      <div className="mt-2 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onSelectResource && onSelectResource(resource)}
            className="font-serif text-lg leading-snug text-[#1E231D] hover:text-[#183D32] cursor-pointer line-clamp-2 transition-colors"
          >
            {title}
          </h3>
          <p className="text-xs text-[#5F665C] mt-1.5 line-clamp-2 leading-relaxed">
            {subtitle || resource.description}
          </p>
        </div>

        {/* Scholarly provenance */}
        <div className="mt-4 pt-3 border-t border-[#1E231D]/10">
          <p className="text-xs font-medium text-[#183D32] line-clamp-1">
            {author}
          </p>
          <p className="text-[11px] text-[#7E8377] line-clamp-1">
            {institution}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex items-center justify-between mt-3 text-[11px] text-[#5F665C] font-mono">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#B69A65]" /> {readTime}
            </span>
            <span className="flex items-center gap-1 font-medium text-[#183D32]">
              ★ {rating} <span className="text-[#7E8377]">({readersCount})</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              onClick={() => onSelectResource && onSelectResource(resource)}
              className="px-3 py-2 text-xs font-semibold text-[#183D32] bg-[#183D32]/8 hover:bg-[#183D32]/15 border border-[#183D32]/25 rounded-sm transition-colors text-center"
            >
              Inspect Folio
            </button>
            <button
              onClick={() => onOpenReader && onOpenReader(resource)}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F4F0E8] bg-[#183D32] hover:bg-[#123027] rounded-sm transition-colors shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#B69A65]" /> Study Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
