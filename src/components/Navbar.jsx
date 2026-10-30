import React, { useState } from 'react';
import { Search, Bookmark, User, Menu, X, BookOpen, Shield, Sparkles } from 'lucide-react';

export default function Navbar({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenAuth,
  user,
  savedCount = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'explore', label: 'Explore Library' },
    { id: 'membership', label: 'Membership' },
    { id: 'workspace', label: 'Reading Workspace' },
    { id: 'dashboard', label: 'Scholar Dashboard' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F4F0E8]/90 backdrop-blur-md border-b border-[#1E231D]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Custom Monogram Seal */}
            <div className="w-10 h-10 rounded-sm bg-[#183D32] border border-[#B69A65]/60 flex items-center justify-center text-[#B69A65] shadow-sm group-hover:bg-[#123027] transition-all">
              <span className="font-serif text-2xl font-bold tracking-tight">V</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-wide text-[#183D32] group-hover:text-[#123027] transition-colors">
                  STUDYVAULT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69A65]" />
              </div>
              <p className="text-[10px] tracking-widest font-mono text-[#7E8377] uppercase -mt-1 hidden sm:block">
                Digital Knowledge Sanctuary
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative py-1 transition-colors ${
                  currentPage === item.id
                    ? 'text-[#183D32] font-bold'
                    : 'text-[#5F665C] hover:text-[#183D32]'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B69A65]" />
                )}
              </button>
            ))}
          </nav>

          {/* Actions & Profile */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#5F665C] bg-[#EAE3D5]/80 hover:bg-[#E3DBD0] border border-[#1E231D]/10 rounded-sm transition-all font-mono"
            >
              <Search className="w-3.5 h-3.5 text-[#183D32]" />
              <span className="hidden sm:inline">Search Library</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-white/70 border border-[#1E231D]/10 rounded text-[#7E8377]">
                ⌘K
              </kbd>
            </button>

            {/* Saved items quick shortcut */}
            <button
              onClick={() => onNavigate('dashboard')}
              title="View Saved Resources"
              className="relative p-2 text-[#5F665C] hover:text-[#183D32] hover:bg-[#EAE3D5] rounded-sm transition-colors"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#183D32] text-[#F4F0E8] text-[9px] font-mono flex items-center justify-center font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* User Profile / Auth Toggle */}
            {user ? (
              <button
                onClick={() => onNavigate('dashboard')}
                className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-[#183D32]/8 hover:bg-[#183D32]/15 border border-[#183D32]/20 rounded-sm transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-[#183D32] text-[#F4F0E8] text-xs flex items-center justify-center font-serif font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-xs font-semibold text-[#183D32] leading-none">{user.name.split(' ')[0]}</div>
                  <div className="text-[9px] font-mono text-[#8E7445] mt-0.5 leading-none">Vault Member</div>
                </div>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-3.5 py-1.5 bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] text-xs font-mono uppercase tracking-wider rounded-sm transition-colors shadow-sm"
              >
                Sign In
              </button>
            )}

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#183D32] hover:bg-[#EAE3D5] rounded-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EAE3D5] border-b border-[#1E231D]/15 px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 text-sm font-mono uppercase tracking-wider">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-left border-b border-[#1E231D]/8 ${
                  currentPage === item.id
                    ? 'text-[#183D32] font-bold'
                    : 'text-[#5F665C]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
