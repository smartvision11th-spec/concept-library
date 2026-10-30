import React, { useState } from 'react';
import { 
  ArrowLeft, Bookmark, BookOpen, Clock, ChevronLeft, ChevronRight, 
  Maximize2, Minimize2, Type, Sun, Moon, Coffee, Sparkles, Check, Save 
} from 'lucide-react';
import { RESOURCES } from '../data/mockData';

export default function WorkspacePage({
  resource = RESOURCES[0],
  onBack,
  onNavigate,
  isBookmarked = false,
  onToggleBookmark
}) {
  const currentResource = resource || RESOURCES[0];
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState('base'); // 'sm' | 'base' | 'lg' | 'xl'
  const [fontFamily, setFontFamily] = useState('serif'); // 'serif' | 'sans'
  const [readingTheme, setReadingTheme] = useState('parchment'); // 'parchment' | 'dark' | 'sepia'
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userNote, setUserNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  const chapters = currentResource.tableOfContents || [
    { chapter: 1, title: 'Introduction & Core Foundations', pages: '1-40', duration: '45 mins' }
  ];

  const activeChapter = chapters[currentChapterIndex] || chapters[0];

  const handleSaveNote = () => {
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  // Theme style mapping
  const themeStyles = {
    parchment: {
      bg: 'bg-[#F4F0E8]',
      cardBg: 'bg-[#EAE3D5]',
      text: 'text-[#1E231D]',
      mutedText: 'text-[#5F665C]',
      border: 'border-[#1E231D]/10',
      accent: '#183D32',
      highlight: 'bg-[#EAE3D5] text-[#183D32] border-[#B69A65]'
    },
    dark: {
      bg: 'bg-[#121915]',
      cardBg: 'bg-[#18231E]',
      text: 'text-[#E6ECE3]',
      mutedText: 'text-[#9DA69B]',
      border: 'border-[#B69A65]/20',
      accent: '#B69A65',
      highlight: 'bg-[#18231E] text-[#D5C299] border-[#B69A65]'
    },
    sepia: {
      bg: 'bg-[#F7EFE1]',
      cardBg: 'bg-[#EDE0CD]',
      text: 'text-[#2D2319]',
      mutedText: 'text-[#6A5A48]',
      border: 'border-[#2D2319]/10',
      accent: '#8E5A2D',
      highlight: 'bg-[#EDE0CD] text-[#8E5A2D] border-[#8E5A2D]'
    }
  };

  const currentTheme = themeStyles[readingTheme];

  const fontSizeClasses = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-loose',
    xl: 'text-xl sm:text-2xl leading-loose'
  };

  const fontClass = fontFamily === 'serif' ? 'font-reading' : 'font-sans';

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-colors duration-300 flex flex-col`}>
      {/* Top Workspace Toolbar */}
      {!isFocusMode && (
        <header className={`sticky top-0 z-30 px-4 sm:px-6 py-3 border-b ${currentTheme.border} ${currentTheme.cardBg}/90 backdrop-blur-md flex items-center justify-between text-xs font-mono`}>
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded border border-current/15 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exit Reader</span>
            </button>
            <div className="hidden md:block">
              <span className="font-serif font-bold text-sm block leading-none">{currentResource.title}</span>
              <span className="text-[10px] opacity-70 leading-none">{currentResource.author}</span>
            </div>
          </div>

          {/* Reading Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Font Family Switcher */}
            <div className="flex items-center rounded border border-current/15 overflow-hidden text-[11px]">
              <button
                onClick={() => setFontFamily('serif')}
                className={`px-2 py-1 font-serif ${fontFamily === 'serif' ? 'bg-[#183D32] text-[#F4F0E8]' : 'hover:bg-black/5'}`}
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamily('sans')}
                className={`px-2 py-1 font-sans ${fontFamily === 'sans' ? 'bg-[#183D32] text-[#F4F0E8]' : 'hover:bg-black/5'}`}
              >
                Sans
              </button>
            </div>

            {/* Font Size Adjusters */}
            <div className="flex items-center rounded border border-current/15 overflow-hidden text-[11px]">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 ${fontSize === 'sm' ? 'bg-[#183D32] text-[#F4F0E8]' : 'hover:bg-black/5'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 ${fontSize === 'base' ? 'bg-[#183D32] text-[#F4F0E8]' : 'hover:bg-black/5'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 ${fontSize === 'lg' ? 'bg-[#183D32] text-[#F4F0E8]' : 'hover:bg-black/5'}`}
              >
                A+
              </button>
            </div>

            {/* Theme Switcher */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setReadingTheme('parchment')}
                title="Parchment Day"
                className={`w-6 h-6 rounded-full border flex items-center justify-center ${readingTheme === 'parchment' ? 'border-[#183D32] ring-2 ring-[#B69A65]' : 'border-gray-400'}`}
                style={{ backgroundColor: '#F4F0E8' }}
              >
                <Sun className="w-3 h-3 text-[#183D32]" />
              </button>
              <button
                onClick={() => setReadingTheme('sepia')}
                title="Warm Sepia"
                className={`w-6 h-6 rounded-full border flex items-center justify-center ${readingTheme === 'sepia' ? 'border-[#8E5A2D] ring-2 ring-[#8E5A2D]' : 'border-gray-400'}`}
                style={{ backgroundColor: '#F7EFE1' }}
              >
                <Coffee className="w-3 h-3 text-[#8E5A2D]" />
              </button>
              <button
                onClick={() => setReadingTheme('dark')}
                title="Academic Night"
                className={`w-6 h-6 rounded-full border flex items-center justify-center ${readingTheme === 'dark' ? 'border-[#B69A65] ring-2 ring-[#B69A65]' : 'border-gray-400'}`}
                style={{ backgroundColor: '#121915' }}
              >
                <Moon className="w-3 h-3 text-[#B69A65]" />
              </button>
            </div>

            {/* Focus Mode Toggle */}
            <button
              onClick={() => setIsFocusMode(true)}
              title="Fullscreen Cognitive Focus Mode"
              className="p-1.5 rounded hover:bg-black/5 transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </header>
      )}

      {/* Floating Exit Focus Mode Button */}
      {isFocusMode && (
        <button
          onClick={() => setIsFocusMode(false)}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[#183D32] text-[#F4F0E8] border border-[#B69A65] shadow-xl hover:scale-110 transition-transform text-xs font-mono flex items-center gap-1.5"
        >
          <Minimize2 className="w-4 h-4" /> Exit Focus
        </button>
      )}

      {/* Workspace Reading Main Layout */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full relative">
        {/* Left Sidebar: Table of Contents */}
        {!isFocusMode && sidebarOpen && (
          <aside className={`w-72 lg:w-80 shrink-0 border-r ${currentTheme.border} ${currentTheme.cardBg}/50 p-5 hidden md:block overflow-y-auto max-h-[calc(100vh-60px)]`}>
            <div className="flex items-center justify-between pb-3 border-b border-current/10 mb-4 text-xs font-mono">
              <span className="uppercase tracking-widest text-[#8E7445] font-semibold">Table of Contents</span>
              <span>{chapters.length} Parts</span>
            </div>

            <div className="space-y-1 text-xs">
              {chapters.map((ch, idx) => (
                <button
                  key={ch.chapter}
                  onClick={() => setCurrentChapterIndex(idx)}
                  className={`w-full text-left p-2.5 rounded-sm transition-all flex items-start gap-2.5 ${
                    currentChapterIndex === idx
                      ? 'bg-[#183D32] text-[#F4F0E8] font-semibold shadow-sm'
                      : 'hover:bg-black/5 text-inherit'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5 ${
                    currentChapterIndex === idx ? 'bg-[#B69A65] text-[#121915]' : 'bg-black/10'
                  }`}>
                    {ch.chapter}
                  </span>
                  <div>
                    <div className="font-serif text-sm leading-snug">{ch.title}</div>
                    <div className="text-[10px] opacity-75 font-mono mt-0.5">
                      pp. {ch.pages} • {ch.duration}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Scholar Margin Notepad */}
            <div className="mt-8 pt-6 border-t border-current/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8E7445] font-semibold uppercase">Margin Notepad</span>
                {noteSaved && <span className="text-emerald-700 font-bold flex items-center gap-1"><Check className="w-3 h-3" /> Saved</span>}
              </div>
              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="Jot down notes, exam connections, or thesis reflections..."
                rows={4}
                className="w-full p-2.5 text-xs bg-white/60 border border-current/15 rounded-sm focus:outline-none focus:border-[#183D32] font-sans"
              />
              <button
                onClick={handleSaveNote}
                className="w-full py-1.5 bg-[#183D32] text-[#F4F0E8] text-xs font-mono uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5 text-[#B69A65]" /> Cache Annotation
              </button>
            </div>
          </aside>
        )}

        {/* Center: Monograph Scholarly Content */}
        <main className="flex-1 px-6 sm:px-12 lg:px-20 py-10 max-w-4xl mx-auto overflow-y-auto">
          {/* Chapter Heading Banner */}
          <div className="border-b border-current/15 pb-6 mb-8">
            <div className="flex items-center justify-between text-xs font-mono opacity-75 mb-2">
              <span>SECTION {activeChapter.chapter} OF {chapters.length}</span>
              <span>ESTIMATED READING: {activeChapter.duration}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-tight">
              {activeChapter.title}
            </h1>
            <p className="text-xs font-mono opacity-80 mt-2">
              From <strong className="text-[#8E7445]">{currentResource.title}</strong> by {currentResource.author}
            </p>
          </div>

          {/* Epigraph / Quote */}
          {currentResource.sampleExcerpt?.openingQuote && (
            <div className="mb-8 p-5 rounded-sm border-l-4 border-[#B69A65] bg-black/5 italic font-serif text-base sm:text-lg opacity-90 leading-relaxed">
              {currentResource.sampleExcerpt.openingQuote}
            </div>
          )}

          {/* Body Paragraphs */}
          <div className={`space-y-6 ${fontSizeClasses[fontSize]} ${fontClass}`}>
            {currentResource.sampleExcerpt ? (
              currentResource.sampleExcerpt.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-[#183D32]' : ''}>
                  {p}
                </p>
              ))
            ) : (
              <p>
                In rigorous scholarship, fundamental principles must be examined through primary textual evidence and empirical verification...
              </p>
            )}

            {/* Archival Callout Box */}
            <div className={`p-5 rounded-sm border ${currentTheme.highlight} my-8 font-sans text-xs sm:text-sm space-y-1`}>
              <div className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-80">
                SCHOLARLY ANNOTATION & ARCHIVAL CONCORDANCE
              </div>
              <p className="leading-relaxed">
                {currentResource.sampleExcerpt?.commentaryNote ||
                  'Refer to the primary archives at the National Library, Kolkata for verified handwritten manuscript variants.'}
              </p>
            </div>

            <p>
              As the analysis deepens, subsequent sections will articulate the operational mechanics, jurisdictional boundaries, and modern empirical applications across contemporary Indian institutions.
            </p>
          </div>

          {/* Chapter Navigation Pagination Footer */}
          <div className="mt-14 pt-6 border-t border-current/15 flex items-center justify-between text-xs font-mono">
            <button
              disabled={currentChapterIndex === 0}
              onClick={() => setCurrentChapterIndex(prev => Math.max(prev - 1, 0))}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-colors ${
                currentChapterIndex === 0
                  ? 'opacity-30 cursor-not-allowed border-transparent'
                  : 'hover:bg-black/5 border-current/20'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>

            <span className="text-[#8E7445] font-bold">
              {currentChapterIndex + 1} / {chapters.length}
            </span>

            <button
              disabled={currentChapterIndex === chapters.length - 1}
              onClick={() => setCurrentChapterIndex(prev => Math.min(prev + 1, chapters.length - 1))}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-colors ${
                currentChapterIndex === chapters.length - 1
                  ? 'opacity-30 cursor-not-allowed border-transparent'
                  : 'bg-[#183D32] text-[#F4F0E8] border-[#183D32] font-semibold'
              }`}
            >
              <span>Next Chapter</span>
              <ChevronRight className="w-4 h-4 text-[#B69A65]" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
