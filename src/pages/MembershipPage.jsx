import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Smartphone, CreditCard, Building2, HelpCircle } from 'lucide-react';
import { MEMBERSHIP_PLANS, FAQ_ITEMS } from '../data/mockData';

export default function MembershipPage({
  onOpenPayment,
  currentPlanId = 'annual'
}) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' | 'monthly'

  return (
    <div className="min-h-screen py-12 bg-[#F4F0E8] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183D32]/10 border border-[#183D32]/20 text-[#183D32] text-xs font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#B69A65]" />
            <span>TRANSPARENT INDIAN RUPEE (INR) PRICING</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183D32] leading-tight">
            Invest in uninterrupted, <br />
            <span className="italic font-normal text-[#8E7445]">self-paced scholarship.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5F665C] max-w-2xl mx-auto font-sans leading-relaxed">
            No sales calls, no aggressive coaching upselling, and no auto-renewal surprises. Simple and transparent membership for independent Indian students and researchers.
          </p>

          {/* Billing Toggle (Monthly vs Annual) */}
          <div className="inline-flex items-center p-1 bg-[#EAE3D5] rounded-full border border-[#1E231D]/10 text-xs font-mono mt-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#183D32] text-[#F4F0E8] font-semibold shadow-sm'
                  : 'text-[#5F665C] hover:text-[#183D32]'
              }`}
            >
              Monthly Term (₹499/mo)
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#183D32] text-[#F4F0E8] font-semibold shadow-sm'
                  : 'text-[#5F665C] hover:text-[#183D32]'
              }`}
            >
              <span>Academic Year Vault (₹3,999/yr)</span>
              <span className="bg-[#B69A65] text-[#121915] text-[9px] px-1.5 py-0.2 rounded font-bold">
                SAVE 33%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map(plan => {
            const isSelected = plan.id === currentPlanId;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between p-8 rounded-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#183D32] text-[#F4F0E8] border-2 border-[#B69A65] shadow-2xl relative lg:-translate-y-2'
                    : 'bg-[#EAE3D5] text-[#1E231D] border border-[#1E231D]/12 shadow-md hover:border-[#B69A65]/50'
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
                        Effective rate: {plan.monthlyEquivalent}
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

                <div>
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

                  <p className="text-[10px] text-center mt-2.5 opacity-60 font-mono">
                    Instant UPI activation • Cancel anytime
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indian Payment Rails Architecture Strip */}
        <div className="p-8 bg-[#EAE3D5] rounded-sm border border-[#1E231D]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
                INDIAN PAYMENT INFRASTRUCTURE
              </span>
              <h3 className="font-serif text-2xl text-[#183D32]">Built for Local Rails</h3>
              <p className="text-xs text-[#5F665C] leading-relaxed">
                Zero forex markup fees, zero international bank surcharges. Native integration with NPCI protocols and RBI-compliant gateways.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-white/80 rounded border border-[#1E231D]/10">
                <Smartphone className="w-5 h-5 text-[#183D32] mb-2" />
                <h4 className="font-bold text-[#183D32]">Instant UPI</h4>
                <p className="text-[11px] text-[#7E8377] mt-1">GPay, PhonePe, Paytm, BHIM, Cred UPI</p>
              </div>

              <div className="p-4 bg-white/80 rounded border border-[#1E231D]/10">
                <CreditCard className="w-5 h-5 text-[#183D32] mb-2" />
                <h4 className="font-bold text-[#183D32]">Domestic RuPay & Cards</h4>
                <p className="text-[11px] text-[#7E8377] mt-1">Visa, Mastercard, domestic RuPay credit/debit</p>
              </div>

              <div className="p-4 bg-white/80 rounded border border-[#1E231D]/10">
                <Building2 className="w-5 h-5 text-[#183D32] mb-2" />
                <h4 className="font-bold text-[#183D32]">NetBanking & GST</h4>
                <p className="text-[11px] text-[#7E8377] mt-1">SBI, HDFC, ICICI, Axis + GST compliant tax invoice</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Matrix */}
        <div className="bg-[#EAE3D5] p-6 sm:p-10 rounded-sm border border-[#1E231D]/10 space-y-6">
          <div className="border-b border-[#1E231D]/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
              DETAILED BREAKDOWN
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#183D32] mt-1">
              Membership Feature Comparison
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#1E231D]/15 text-[#7E8377]">
                  <th className="py-3 px-4 font-normal">Vault Capabilities</th>
                  <th className="py-3 px-4 text-center font-normal">Monthly Pass (₹499)</th>
                  <th className="py-3 px-4 text-center font-normal bg-[#183D32]/10 text-[#183D32] font-bold">Academic Year (₹3,999)</th>
                  <th className="py-3 px-4 text-center font-normal">Lifetime Patron (₹7,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E231D]/8 text-[#20251F]">
                {[
                  { name: 'Access to 1,200+ Treatises & Monographs', m: 'Unlimited', y: 'Unlimited', p: 'Perpetual Lifetime' },
                  { name: 'Distraction-Free Study Workspace', m: '✓ Included', y: '✓ Included', p: '✓ Included' },
                  { name: 'Personal Margin Notes & Highlights', m: '✓ Included', y: '✓ Included', p: '✓ Included' },
                  { name: 'Offline Reading Caches', m: '3 Monograph Limit', y: 'Unlimited Caches', p: 'Unlimited Caches' },
                  { name: 'Academic Citation Exports (BibTeX/APA)', m: '—', y: '✓ Full Export', p: '✓ Full Export' },
                  { name: 'Priority Early Access Releases', m: '—', y: '✓ Included', p: '✓ Included' },
                  { name: 'Gold-Embossed Digital Bookplate', m: '—', y: '—', p: '✓ Custom Inscription' },
                  { name: 'Gift 1 Annual Pass to Underprivileged Student', m: '—', y: '—', p: '✓ Matched by Vault' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/40 transition-colors">
                    <td className="py-3.5 px-4 font-sans font-medium text-[#1E231D]">{row.name}</td>
                    <td className="py-3.5 px-4 text-center text-[#5F665C]">{row.m}</td>
                    <td className="py-3.5 px-4 text-center bg-[#183D32]/5 text-[#183D32] font-semibold">{row.y}</td>
                    <td className="py-3.5 px-4 text-center text-[#8E7445] font-semibold">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Membership FAQ */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">COMMON QUERIES</span>
            <h3 className="font-serif text-3xl text-[#183D32] mt-1">Membership Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.slice(0, 3).map((faq, i) => (
              <div key={i} className="p-6 bg-[#EAE3D5] border border-[#1E231D]/10 rounded-sm">
                <h4 className="font-serif text-lg text-[#183D32] mb-1.5">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-[#5F665C] leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
