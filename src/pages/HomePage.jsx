import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles, Compass, CheckCircle2, ChevronRight, Bookmark, Clock, Award } from 'lucide-react';
import ThreeHeroCanvas from '../components/ThreeHeroCanvas';
import Book3DCard from '../components/Book3DCard';
import SpotlightCard from '../components/SpotlightCard';
import { CATEGORIES, RESOURCES, MEMBERSHIP_PLANS, FAQ_ITEMS } from '../data/mockData';

export default function HomePage({
  onNavigate,
  onSelectResource,
  onOpenReader,
  onOpenPayment,
  bookmarkedIds = [],
  onToggleBookmark
}) {
  return (
    <div className="min-h-screen">
      {/* =========================================================================
          HERO SECTION: 3D THREE.JS CANVAS & EDITORIAL HEADLINE
         ========================================================================= */}
      <section className="relative pt-6 pb-16 lg:py-20 border-b border-[#1E231D]/10 overflow-hidden paper-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183D32]/10 border border-[#183D32]/20 text-[#183D32] text-xs font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#B69A65]" />
                <span>INDEPENDENT DIGITAL STUDY LIBRARY • INDIA</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#183D32] leading-[1.08]">
                Your next chapter <br />
                <span className="italic font-normal text-[#8E7445]">starts here.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5F665C] max-w-2xl leading-relaxed font-sans">
                A digital library built for curious minds. Explore structured knowledge, study independently, and learn without boundaries. Not a coaching center or course marketplace—a modern knowledge sanctuary for Indian students and scholars.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('explore')}
                  className="flex items-center gap-2.5 px-6 py-3.5 bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <BookOpen className="w-4 h-4 text-[#B69A65]" />
                  <span>Explore the Library</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('membership')}
                  className="flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#EAE3D5] text-[#183D32] border border-[#183D32]/30 font-mono text-xs uppercase tracking-wider font-bold rounded-sm transition-all"
                >
                  <span>Discover Membership</span>
                  <span className="text-[#8E7445] font-semibold">(From ₹499)</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E231D]/10 text-xs font-mono text-[#5F665C]">
                <div>
                  <div className="font-serif text-2xl text-[#183D32] font-bold">1,200+</div>
                  <div className="text-[11px] text-[#7E8377] mt-0.5">Academic Treatises</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-[#183D32] font-bold">₹ INR</div>
                  <div className="text-[11px] text-[#7E8377] mt-0.5">UPI & RuPay Friendly</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-[#183D32] font-bold">100%</div>
                  <div className="text-[11px] text-[#7E8377] mt-0.5">Self-Paced Learning</div>
                </div>
              </div>
            </div>

            {/* Right Three.js 3D Canvas Column */}
            <div className="lg:col-span-5 relative">
              <div className="w-full rounded-sm overflow-hidden border border-[#B69A65]/40 shadow-2xl bg-[#EBE4D8]/50">
                <ThreeHeroCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EXPLORE THE COLLECTION (VAULT CATEGORIES)
         ========================================================================= */}
      <section className="py-20 bg-[#EAE3D5] border-b border-[#1E231D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                STRUCTURED INTELLECTUAL DOMAINS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#183D32] mt-1">
                Explore the Collection
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5F665C] max-w-md mt-3 md:mt-0 font-sans">
              Unlike coaching institutions narrow test mills, StudyVault curates fundamental works across science, jurisprudence, economics, systems, and scholarship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.filter(c => c.id !== 'all').map((cat, idx) => (
              <SpotlightCard
                key={cat.id}
                onClick={() => onNavigate('explore')}
                className="p-6 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#7E8377] mb-3">
                    <span>VAULT #{idx + 1}</span>
                    <span className="text-[#183D32] font-bold">{cat.count} Folios</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1E231D] group-hover:text-[#183D32] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                </div>
                <div className="mt-8 pt-3 border-t border-[#1E231D]/8 flex items-center justify-between text-xs font-mono text-[#8E7445]">
                  <span>Browse Vault</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INSIDE THE LIBRARY (FEATURED 3D MONOGRAPHS)
         ========================================================================= */}
      <section className="py-20 bg-[#F4F0E8] border-b border-[#1E231D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                CURATED MONOGRAPHS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#183D32] mt-1">
                Inside the Library
              </h2>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#183D32] hover:text-[#123027] font-bold group"
            >
              <span>View All 1,200+ Resources</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESOURCES.slice(0, 4).map(resource => (
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
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: YOUR PERSONAL STUDY SPACE PREVIEW
         ========================================================================= */}
      <section className="py-20 bg-[#121915] text-[#F4F0E8] border-b border-[#B69A65]/20 dark-paper-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B69A65]">
                DIGITAL STUDY SANCTUARY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F0E8] leading-tight">
                Your Personal Study Workspace
              </h2>
              <p className="text-sm text-[#A6AEA4] leading-relaxed font-sans">
                Say farewell to distracting video feeds, gamified popups, and aggressive notifications. StudyVault provides an immersive, typography-focused reading sanctum designed specifically for deep cognitive endurance.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'Distraction-Free Reading Mode', desc: 'Customizable serif typography, line spacing, and eye-comfort parchment tint.' },
                  { title: 'Margin Annotations & Thought Caching', desc: 'Capture fleeting intellectual connections directly alongside the text.' },
                  { title: 'Cross-Monograph Search & Citations', desc: 'Instant BibTeX, APA, and MLA academic citation exports.' }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#B69A65]/20 border border-[#B69A65] flex items-center justify-center text-[#B69A65] text-xs font-mono mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4F0E8]">{feat.title}</h4>
                      <p className="text-xs text-[#A6AEA4] mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenReader(RESOURCES[0])}
                  className="px-6 py-3 bg-[#B69A65] hover:bg-[#D5C299] text-[#121915] font-mono text-xs uppercase tracking-wider font-bold rounded-sm transition-colors shadow-lg"
                >
                  Try the Reading Workspace (Demo)
                </button>
              </div>
            </div>

            {/* Interactive Workspace Mock Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-[#B69A65]/40 bg-[#F4F0E8] text-[#1E231D] shadow-2xl overflow-hidden">
                {/* Mock Browser/App Header */}
                <div className="px-4 py-2.5 bg-[#EAE3D5] border-b border-[#1E231D]/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-[#7E8377] ml-2">studyvault.in/workspace/res-1</span>
                  </div>
                  <span className="text-[10px] text-[#8E7445] font-semibold uppercase">Parchment Mode</span>
                </div>

                {/* Workspace Reader Mock Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1E231D]/10 pb-3 text-xs font-mono text-[#5F665C]">
                    <span>Chapter 1: The Philosophical Architecture of the Preamble</span>
                    <span>Progress: 68%</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#183D32]">
                    The Indivisible Trinity of Liberty, Equality & Fraternity
                  </h3>
                  <p className="text-sm font-reading leading-relaxed text-[#20251F]">
                    "When the Constituent Assembly gathered in the winter of 1946, the challenge was not merely legal draughtsmanship; it was the metaphysical reconciliation of ancient civilizational pluralism with the egalitarian machinery of an uncompromising democratic republic..."
                  </p>
                  
                  {/* Highlighted margin note simulator */}
                  <div className="p-3 bg-[#EAE3D5] border-l-2 border-[#B69A65] text-xs font-mono text-[#183D32]">
                    <span className="text-[#8E7445] font-bold">SCHOLAR NOTE:</span> Compare with Dr. Ambedkar's final speech on 25 November 1949 regarding social democracy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOW MEMBERSHIP WORKS
         ========================================================================= */}
      <section className="py-20 bg-[#F4F0E8] border-b border-[#1E231D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
              TRANSPARENT SCHOLARSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#183D32] mt-1">
              How Membership Works
            </h2>
            <p className="text-xs sm:text-sm text-[#5F665C] mt-2">
              No locked batches, no expiry traps, and no sales calls. Subscribe at transparent Indian Rupee rates and study independently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discover & Preview',
                desc: 'Browse through 1,200+ treatises. Read complete introductory chapters and inspect table of contents before committing.'
              },
              {
                step: '02',
                title: 'Unlock with UPI or RuPay',
                desc: 'Simple, direct pricing in INR. Pay via Google Pay, PhonePe, Paytm, or cards with instantaneous activation and zero hidden fees.'
              },
              {
                step: '03',
                title: 'Study at Your Rhythm',
                desc: 'Access your personal reading sanctum across desktop, tablet, and mobile with offline caching and annotations.'
              }
            ].map(item => (
              <div key={item.step} className="p-8 bg-[#EAE3D5]/80 border border-[#1E231D]/10 rounded-sm relative group hover:border-[#B69A65]/60 transition-colors">
                <span className="font-serif text-4xl text-[#B69A65] font-bold block mb-4">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl text-[#183D32] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5F665C] leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MEMBERSHIP PLANS (TRANSPARENT INR PRICING)
         ========================================================================= */}
      <section className="py-20 bg-[#EAE3D5] border-b border-[#1E231D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
              INDIAN RUPEE ACCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#183D32] mt-1">
              Membership Plans
            </h2>
            <p className="text-xs sm:text-sm text-[#5F665C] mt-2">
              All plans include complete access to our academic library and workspace tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {MEMBERSHIP_PLANS.map(plan => (
              <div
                key={plan.id}
                className={`flex flex-col justify-between p-8 rounded-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#183D32] text-[#F4F0E8] border-2 border-[#B69A65] shadow-2xl relative lg:-translate-y-2'
                    : 'bg-[#F4F0E8] text-[#1E231D] border border-[#1E231D]/12 shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#B69A65] text-[#121915] text-[10px] font-mono uppercase tracking-widest font-bold rounded-sm shadow-sm">
                    Recommended for Serious Scholars
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${plan.popular ? 'text-[#D5C299]' : 'text-[#8E7445]'}`}>
                      {plan.tierBadge}
                    </span>
                    {plan.savingsLabel && (
                      <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded">
                        {plan.savingsLabel}
                      </span>
                    )}
                  </div>

                  <h3 className={`font-serif text-2xl ${plan.popular ? 'text-[#F4F0E8]' : 'text-[#183D32]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${plan.popular ? 'text-[#A6AEA4]' : 'text-[#5F665C]'}`}>
                    {plan.tagline}
                  </p>

                  <div className="my-6 pt-4 border-t border-current/15">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-serif font-bold">
                        ₹{plan.priceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-mono opacity-80">/{plan.billingPeriod}</span>
                    </div>
                    {plan.monthlyEquivalent && (
                      <p className="text-xs text-[#D5C299] font-mono mt-1">
                        Effective: {plan.monthlyEquivalent}
                      </p>
                    )}
                    <p className="text-[11px] opacity-70 font-mono mt-1">
                      {plan.billingNote}
                    </p>
                  </div>

                  <ul className="space-y-3 text-xs mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-[#B69A65]' : 'text-[#183D32]'}`} />
                        <span className={plan.popular ? 'text-[#EDE8DE]' : 'text-[#20251F]'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenPayment(plan)}
                  className={`w-full py-3.5 text-xs font-mono uppercase tracking-wider font-bold rounded-sm transition-all shadow-md ${
                    plan.popular
                      ? 'bg-[#B69A65] hover:bg-[#D5C299] text-[#121915]'
                      : 'bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8]'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: VOICES FROM THE READING ROOM
         ========================================================================= */}
      <section className="py-20 bg-[#F4F0E8] border-b border-[#1E231D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
              SCHOLAR PERSPECTIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#183D32] mt-1">
              Voices from the Reading Room
            </h2>
            <p className="text-xs text-[#7E8377] font-mono mt-1.5">
              * Fictional placeholder profiles representing authentic study personas in the Indian ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Preparing for civil services while working as an engineer in Bangalore left zero time for 3-hour coaching video lectures. StudyVault allowed me to study primary legal and economic treatises directly at midnight.',
                author: 'Rohan Deshmukh',
                title: 'Civil Services Aspirant & Systems Engineer, Bengaluru'
              },
              {
                quote: 'The depth of the mathematics and classical mechanics folios matches graduate-level university archives. Having citation export and personal margin notes made my thesis formulation extraordinarily smooth.',
                author: 'Dr. Priya Nambiar',
                title: 'Postdoctoral Research Scholar, Chennai'
              },
              {
                quote: 'Finally, an Indian educational platform that respects student intellect. No hyperactive countdown timers, no coaching marketing calls. Just immaculate typography and rigorous texts.',
                author: 'Kabir Mukherjee',
                title: 'Economics Student, Delhi School of Economics'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-[#EAE3D5]/70 border border-[#1E231D]/10 rounded-sm flex flex-col justify-between">
                <p className="font-reading text-sm text-[#20251F] leading-relaxed italic">
                  "{item.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-[#1E231D]/10">
                  <h4 className="font-serif text-base text-[#183D32] font-semibold">{item.author}</h4>
                  <p className="text-[11px] text-[#7E8377] font-mono mt-0.5">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS
         ========================================================================= */}
      <section className="py-20 bg-[#EAE3D5] border-b border-[#1E231D]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
              INQUIRIES & DETAILS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#183D32] mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="p-6 bg-[#F4F0E8] border border-[#1E231D]/10 rounded-sm">
                <h3 className="font-serif text-lg text-[#183D32] mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#5F665C] leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FINAL CONVERSION & FOOTER
         ========================================================================= */}
      <section className="py-24 bg-[#183D32] text-[#F4F0E8] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B69A65]">
            BECOME A SCHOLAR TODAY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F4F0E8] leading-tight">
            Knowledge without boundaries. <br />
            <span className="italic font-normal text-[#D5C299]">Study on your terms.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D5C299] max-w-xl mx-auto font-sans leading-relaxed">
            Join thousands of independent learners across India who have chosen deep, uninterrupted scholarship over superficial coaching.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('membership')}
              className="px-8 py-4 bg-[#B69A65] hover:bg-[#D5C299] text-[#121915] font-mono text-xs uppercase tracking-wider font-bold rounded-sm shadow-xl transition-all"
            >
              Choose Your Vault Plan (From ₹499)
            </button>
            <button
              onClick={() => onNavigate('explore')}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-[#F4F0E8] border border-[#B69A65]/60 font-mono text-xs uppercase tracking-wider font-bold rounded-sm transition-all"
            >
              Explore Free Previews
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121915] text-[#A6AEA4] border-t border-[#B69A65]/30 py-12 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#183D32] border border-[#B69A65] flex items-center justify-center text-[#B69A65] font-serif font-bold text-lg">
              V
            </div>
            <div>
              <span className="font-serif text-base text-[#F4F0E8] font-bold tracking-wide">STUDYVAULT</span>
              <p className="text-[10px] text-[#7E8377]">An Independent Digital Knowledge Sanctuary for India</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <button onClick={() => onNavigate('explore')} className="hover:text-[#F4F0E8]">Library Catalog</button>
            <button onClick={() => onNavigate('membership')} className="hover:text-[#F4F0E8]">INR Pricing</button>
            <button onClick={() => onNavigate('workspace')} className="hover:text-[#F4F0E8]">Workspace</button>
            <button onClick={() => onNavigate('dashboard')} className="hover:text-[#F4F0E8]">Scholar Desk</button>
          </div>

          <div className="text-[10px] text-[#7E8377] text-center md:text-right">
            © 2026 STUDYVAULT INDIA. All Rights Reserved. <br />
            Crafted for curious minds and self-paced scholars.
          </div>
        </div>
      </footer>
    </div>
  );
}
