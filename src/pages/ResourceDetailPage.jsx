import React from 'react';
import { ArrowLeft, BookOpen, Bookmark, Clock, Share2, Award, Sparkles, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export default function ResourceDetailPage({
  resource,
  onBack,
  onOpenReader,
  isBookmarked = false,
  onToggleBookmark,
  onOpenPayment,
  membershipPlan
}) {
  if (!resource) return null;

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
    rating,
    readersCount,
    edition,
    description,
    tableOfContents = [],
    tags = [],
    keyTakeaways = [],
    sampleExcerpt
  } = resource;

  return (
    <div className="min-h-screen py-10 bg-[#F4F0E8] paper-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#183D32] hover:text-[#123027] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Vault Catalog
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark && onToggleBookmark(id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm border transition-colors ${
                isBookmarked
                  ? 'bg-[#183D32] text-[#F4F0E8] border-[#183D32]'
                  : 'bg-[#EAE3D5] text-[#5F665C] border-[#1E231D]/15 hover:text-[#183D32]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? 'Saved to Vault' : 'Save for Later'}</span>
            </button>
          </div>
        </div>

        {/* Main Monograph Hero Header */}
        <div className="p-6 sm:p-10 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Book Display */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-56 sm:w-64 aspect-[1/1.45] rounded shadow-2xl border-2 border-[#B69A65]/50 overflow-hidden relative group">
                <img
                  src={coverImage}
                  alt={title}
                  className="w-full h-full object-cover filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1713] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono text-[#D5C299] uppercase tracking-widest">
                    {categoryLabel}
                  </div>
                  <h3 className="font-serif text-base font-bold leading-tight mt-0.5 line-clamp-2">
                    {title}
                  </h3>
                  <div className="text-[10px] font-mono text-[#A6AEA4] mt-1">{edition}</div>
                </div>
              </div>

              {/* Physical specs strip */}
              <div className="w-full max-w-[256px] mt-4 p-3 bg-[#F4F0E8] border border-[#1E231D]/10 rounded-sm text-center text-xs font-mono text-[#5F665C]">
                <div className="flex justify-between py-1 border-b border-[#1E231D]/8">
                  <span>Pages:</span>
                  <strong className="text-[#183D32]">{pages} pp.</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1E231D]/8">
                  <span>Duration:</span>
                  <strong className="text-[#183D32]">{readTime}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span>Rating:</span>
                  <strong className="text-[#8E7445]">★ {rating} ({readersCount})</strong>
                </div>
              </div>
            </div>

            {/* Right Information & Access Controls */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#183D32]/10 text-[#183D32] text-xs font-mono uppercase tracking-wider font-semibold">
                    {categoryLabel}
                  </span>
                  {isFreePreview ? (
                    <span className="px-2.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 text-xs font-mono font-medium border border-emerald-300">
                      ✓ Free Preview Available
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-sm bg-[#B69A65]/20 text-[#8E7445] text-xs font-mono font-semibold border border-[#B69A65]/40">
                      Vault Pass Exclusive
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-2xl sm:text-4xl text-[#183D32] leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-sm sm:text-base text-[#8E7445] font-serif italic mt-1">
                    {subtitle}
                  </p>
                )}

                <div className="mt-3 pt-3 border-t border-[#1E231D]/10 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs font-mono text-[#5F665C]">
                  <div>
                    Author: <span className="text-[#183D32] font-semibold">{author}</span>
                  </div>
                  <div>
                    Institution: <span className="text-[#183D32]">{institution}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                  SCHOLARLY ABSTRACT
                </h4>
                <p className="text-sm font-sans text-[#20251F] leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Primary Action Buttons */}
              <div className="p-4 bg-[#F4F0E8] border border-[#B69A65]/40 rounded-sm space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenReader(resource)}
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow-md transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-[#B69A65]" />
                    <span>Enter Reading Workspace</span>
                  </button>

                  {!isFreePreview && (
                    <button
                      onClick={() => onOpenPayment && onOpenPayment(membershipPlan)}
                      className="px-5 py-3 bg-[#B69A65] hover:bg-[#D5C299] text-[#121915] font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow transition-all"
                    >
                      Unlock with Vault Pass (From ₹499)
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#7E8377] font-mono pt-1">
                  <span>✓ Complete table of contents, citations & margin annotations enabled</span>
                  <span>Instant access</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white text-[#5F665C] border border-[#1E231D]/10 text-[11px] font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Table of Contents & Key Takeaways */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table of Contents Column */}
          <div className="lg:col-span-7 bg-[#EAE3D5]/80 p-6 sm:p-8 rounded-sm border border-[#1E231D]/10 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1E231D]/10 pb-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                  STRUCTURED SYLLABUS
                </span>
                <h3 className="font-serif text-2xl text-[#183D32]">Table of Contents</h3>
              </div>
              <span className="text-xs font-mono text-[#5F665C]">{tableOfContents.length} Chapters</span>
            </div>

            <div className="divide-y divide-[#1E231D]/8">
              {tableOfContents.map((chap) => (
                <div key={chap.chapter} className="py-3.5 flex items-start justify-between gap-4 group">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#183D32]/10 text-[#183D32] text-xs font-mono flex items-center justify-center font-bold mt-0.5">
                      {chap.chapter}
                    </span>
                    <div>
                      <h4 className="font-serif text-base text-[#1E231D] group-hover:text-[#183D32] transition-colors">
                        {chap.title}
                      </h4>
                      <p className="text-xs text-[#7E8377] font-mono mt-0.5">
                        Pages {chap.pages}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#8E7445] whitespace-nowrap">
                    {chap.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Scholarly Insights Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#183D32] text-[#F4F0E8] p-6 sm:p-8 rounded-sm border border-[#B69A65]/40 shadow-lg space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B69A65]">
                PRIMARY CONTRIBUTIONS
              </span>
              <h3 className="font-serif text-2xl text-[#F4F0E8]">Key Scholarly Takeaways</h3>
              <ul className="space-y-3 text-xs text-[#EDE8DE] leading-relaxed">
                {keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#B69A65] font-bold">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reading Guarantee Box */}
            <div className="p-6 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10 space-y-2 text-xs font-mono text-[#5F665C]">
              <span className="text-[#183D32] font-bold block">STUDYVAULT INDEPENDENCE PLEDGE</span>
              <p className="leading-relaxed">
                This treatise has been compiled strictly for independent, self-paced scholarship. It is free from algorithmic advertisements, promotional affiliate links, and commercial brand sponsorships.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Reading Workspace Teaser */}
        {sampleExcerpt && (
          <div className="p-6 sm:p-8 bg-[#F4F0E8] border border-[#B69A65]/50 rounded-sm shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E231D]/10 pb-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                  FOLIO SAMPLE EXCERPT
                </span>
                <h3 className="font-serif text-xl text-[#183D32]">{sampleExcerpt.chapterTitle}</h3>
              </div>
              <button
                onClick={() => onOpenReader(resource)}
                className="text-xs font-mono text-[#183D32] font-semibold hover:underline"
              >
                Read in Fullscreen →
              </button>
            </div>

            {sampleExcerpt.openingQuote && (
              <blockquote className="border-l-2 border-[#B69A65] pl-4 italic text-sm text-[#5F665C] font-serif">
                {sampleExcerpt.openingQuote}
              </blockquote>
            )}

            <div className="space-y-3 font-reading text-sm text-[#20251F] leading-relaxed">
              {sampleExcerpt.paragraphs.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {sampleExcerpt.commentaryNote && (
              <div className="p-3 bg-[#EAE3D5] border-l-2 border-[#183D32] text-xs font-mono text-[#183D32]">
                {sampleExcerpt.commentaryNote}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
