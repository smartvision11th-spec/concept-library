import React from 'react';
import { BookOpen, Bookmark, Clock, Flame, Award, ArrowRight, ShieldCheck, Sparkles, Trash2, Calendar, FileText } from 'lucide-react';
import { RESOURCES } from '../data/mockData';

export default function DashboardPage({
  user,
  onOpenReader,
  onSelectResource,
  onOpenPayment,
  bookmarkedIds = [],
  onToggleBookmark,
  onNavigate
}) {
  const savedResources = RESOURCES.filter(r => bookmarkedIds.includes(r.id));
  const recentReads = user.recentReads || [];

  return (
    <div className="min-h-screen py-10 bg-[#F4F0E8] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Welcome Header */}
        <div className="p-6 sm:p-8 bg-[#183D32] text-[#F4F0E8] rounded-sm border-2 border-[#B69A65]/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B69A65]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D5C299]">
                SCHOLAR'S DESK • ACTIVE SESSION
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8]">
              Welcome back, {user.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#A6AEA4] font-sans">
              {user.tagline} • Based in {user.city}
            </p>
          </div>

          <div className="z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="p-3 bg-[#122A21] border border-[#B69A65]/40 rounded-sm text-xs font-mono">
              <div className="text-[10px] text-[#A6AEA4] uppercase">Current Membership</div>
              <div className="text-sm font-bold text-[#D5C299]">{user.membershipTier}</div>
              <div className="text-[10px] text-[#7E8377] mt-0.5">Valid through {user.expiryDate}</div>
            </div>

            <button
              onClick={() => onNavigate('membership')}
              className="px-4 py-3 bg-[#B69A65] hover:bg-[#D5C299] text-[#121915] font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow transition-all"
            >
              Manage Pass
            </button>
          </div>

          {/* Background decorative watermark */}
          <div className="absolute right-0 bottom-0 text-[160px] font-serif font-bold text-white/5 pointer-events-none select-none -mr-10 -mb-16">
            VAULT
          </div>
        </div>

        {/* 4 Academic Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#7E8377] mb-2">
              <span>Study Hours (Month)</span>
              <Clock className="w-4 h-4 text-[#B69A65]" />
            </div>
            <div className="font-serif text-3xl text-[#183D32] font-bold">
              {user.hoursReadThisMonth} <span className="text-xs font-mono font-normal">hrs</span>
            </div>
            <div className="text-[11px] text-emerald-800 font-mono mt-1">
              ↑ 4.2 hrs from last week
            </div>
          </div>

          <div className="p-5 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#7E8377] mb-2">
              <span>Scholar Streak</span>
              <Flame className="w-4 h-4 text-[#B69A65]" />
            </div>
            <div className="font-serif text-3xl text-[#183D32] font-bold">
              {user.streakDays} <span className="text-xs font-mono font-normal">days</span>
            </div>
            <div className="text-[11px] text-[#5F665C] font-mono mt-1">
              Top 5% consistency rank
            </div>
          </div>

          <div className="p-5 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#7E8377] mb-2">
              <span>Treatises Finished</span>
              <Award className="w-4 h-4 text-[#B69A65]" />
            </div>
            <div className="font-serif text-3xl text-[#183D32] font-bold">
              {user.booksCompleted} <span className="text-xs font-mono font-normal">folios</span>
            </div>
            <div className="text-[11px] text-[#5F665C] font-mono mt-1">
              Next goal: 12 monographs
            </div>
          </div>

          <div className="p-5 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#7E8377] mb-2">
              <span>Margin Annotations</span>
              <FileText className="w-4 h-4 text-[#B69A65]" />
            </div>
            <div className="font-serif text-3xl text-[#183D32] font-bold">
              {user.notesCount} <span className="text-xs font-mono font-normal">notes</span>
            </div>
            <div className="text-[11px] text-[#5F665C] font-mono mt-1">
              Available for BibTeX export
            </div>
          </div>
        </div>

        {/* Weekly Study Activity & Study Goal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Weekly Activity Bar Chart */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1E231D]/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                  COGNITIVE FOCUS LOG
                </span>
                <h3 className="font-serif text-2xl text-[#183D32]">Weekly Study Distribution</h3>
              </div>
              <span className="text-xs font-mono text-[#5F665C]">Total: 38.4 hours</span>
            </div>

            {/* Custom SVG / Bar Chart Representation */}
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-2 sm:gap-4 h-44 items-end pt-6 px-2">
                {user.weeklyActivity.map(item => {
                  const maxH = 8.0;
                  const percent = Math.min((item.hours / maxH) * 100, 100);

                  return (
                    <div key={item.day} className="flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-mono text-[#7E8377] opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.hours}h
                      </span>
                      <div className="w-full bg-[#183D32]/15 rounded-t-sm relative h-full flex items-end">
                        <div
                          className="w-full bg-[#183D32] group-hover:bg-[#B69A65] transition-all rounded-t-sm"
                          style={{ height: `${percent}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-[#5F665C] font-semibold">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#7E8377] pt-2 border-t border-[#1E231D]/8">
                <span>Target: 35.0 hrs / week</span>
                <span className="text-emerald-800 font-bold">Goal achieved (110%)</span>
              </div>
            </div>
          </div>

          {/* Quick Study Actions & Syllabus Focus */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-[#183D32] text-[#F4F0E8] rounded-sm border border-[#B69A65]/40 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B69A65]">
                CURRENT STUDY TARGET
              </span>
              <h3 className="font-serif text-2xl text-[#F4F0E8] mt-1">UPSC Mains & Law</h3>
            </div>

            <p className="text-xs text-[#EDE8DE] leading-relaxed">
              You are currently 68% through the Constitutional Law commentary. At your current pace of 4.5 hours/day, you will complete the foundational treatise in 3 days.
            </p>

            <button
              onClick={() => onOpenReader(RESOURCES[0])}
              className="w-full py-3 bg-[#B69A65] hover:bg-[#D5C299] text-[#121915] font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Resume Reading Chapter 1
            </button>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#D5C299] space-y-2">
              <div className="flex justify-between">
                <span>Active Vault:</span>
                <span>Humanities & Law</span>
              </div>
              <div className="flex justify-between">
                <span>Offline Status:</span>
                <span className="text-emerald-400">Cached (2 Folios)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Currently Reading / Continue Studying */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                IN-PROGRESS MATERIALS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32]">
                Active In-Progress Treatises
              </h2>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="text-xs font-mono text-[#183D32] hover:underline"
            >
              Browse All Treatises →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {recentReads.map(item => {
              const res = RESOURCES.find(r => r.id === item.resourceId) || RESOURCES[0];

              return (
                <div
                  key={item.resourceId}
                  className="p-5 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10 flex flex-col justify-between hover:border-[#B69A65]/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={res.coverImage}
                      alt={res.title}
                      className="w-16 h-22 object-cover rounded shadow border border-[#1E231D]/10 shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E7445]">
                        {res.categoryLabel}
                      </span>
                      <h4 
                        onClick={() => onSelectResource(res)}
                        className="font-serif text-base text-[#1E231D] hover:text-[#183D32] cursor-pointer line-clamp-1 leading-snug"
                      >
                        {res.title}
                      </h4>
                      <p className="text-xs text-[#5F665C] mt-1 line-clamp-1">
                        Current: <strong className="text-[#183D32]">{item.lastChapter}</strong>
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="mt-3">
                        <div className="flex justify-between text-[11px] font-mono text-[#7E8377] mb-1">
                          <span>Progress</span>
                          <span className="text-[#183D32] font-semibold">{item.progressPercent}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#1E231D]/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#183D32] rounded-full"
                            style={{ width: `${item.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1E231D]/8 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#7E8377]">Last studied {item.lastRead}</span>
                    <button
                      onClick={() => onOpenReader(res)}
                      className="flex items-center gap-1 text-[#183D32] font-bold hover:underline"
                    >
                      <span>Resume Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Saved Library / Bookmarks */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                PERSONAL ARCHIVE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32]">
                Your Saved Vault ({savedResources.length})
              </h2>
            </div>
          </div>

          {savedResources.length === 0 ? (
            <div className="p-8 bg-[#EAE3D5]/60 text-center rounded-sm border border-[#1E231D]/10">
              <p className="text-sm font-serif text-[#183D32]">You haven't bookmarked any monographs yet.</p>
              <button
                onClick={() => onNavigate('explore')}
                className="mt-3 px-4 py-2 bg-[#183D32] text-[#F4F0E8] text-xs font-mono rounded-sm"
              >
                Explore and Save Treatises
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {savedResources.map(res => (
                <div
                  key={res.id}
                  className="p-4 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-[#8E7445] uppercase tracking-wider">
                        {res.categoryLabel}
                      </span>
                      <button
                        onClick={() => onToggleBookmark(res.id)}
                        className="text-[#7E8377] hover:text-red-600 p-1"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 
                      onClick={() => onSelectResource(res)}
                      className="font-serif text-base text-[#1E231D] hover:text-[#183D32] cursor-pointer line-clamp-2"
                    >
                      {res.title}
                    </h4>
                    <p className="text-xs text-[#5F665C] mt-1 line-clamp-1">{res.author}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1E231D]/8 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#7E8377]">{res.pages} pages</span>
                    <button
                      onClick={() => onOpenReader(res)}
                      className="px-3 py-1 bg-[#183D32] text-[#F4F0E8] text-xs font-mono rounded-sm hover:bg-[#123027]"
                    >
                      Open Reader
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
