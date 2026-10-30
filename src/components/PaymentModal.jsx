import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, QrCode, Smartphone, CreditCard, Building2, Sparkles, ArrowRight, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PaymentModal({
  isOpen,
  onClose,
  plan,
  onSuccessfulPayment
}) {
  const [activeTab, setActiveTab] = useState('upi'); // 'upi' | 'card' | 'netbanking'
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(480); // 8 minutes UPI countdown

  useEffect(() => {
    if (!isOpen) {
      setIsProcessing(false);
      setIsSuccess(false);
      setTimerSeconds(480);
      return;
    }
    const interval = setInterval(() => {
      setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Fire celebratory confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#183D32', '#B69A65', '#D5C299', '#2A5649']
      });

      if (onSuccessfulPayment) {
        onSuccessfulPayment(plan);
      }
    }, 1800);
  };

  const handleCopyUPI = () => {
    navigator.clipboard?.writeText('studyvault.patron@okhdfcbank');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121915]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[#F4F0E8] border border-[#B69A65]/60 shadow-2xl rounded-sm overflow-hidden flex flex-col relative"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#183D32] text-[#F4F0E8] flex items-center justify-between border-b border-[#B69A65]/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69A65] bg-[#B69A65]/20 px-2 py-0.5 rounded">
                SECURE UPI & RAZORPAY SIMULATOR
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mt-1 text-[#F4F0E8]">
              {plan.name}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[#D5C299] hover:text-white hover:bg-white/10 rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pricing Summary Ribbon */}
        <div className="px-6 py-3 bg-[#EAE3D5] border-b border-[#1E231D]/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#5F665C] font-mono">Total Payable Amount</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-serif text-[#183D32] font-bold">
                ₹{plan.priceINR.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#7E8377] font-mono">({plan.billingPeriod})</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              <ShieldCheck className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
            </span>
            <div className="text-[10px] text-[#7E8377] font-mono mt-0.5">Includes all taxes (GST)</div>
          </div>
        </div>

        {/* Content Body */}
        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#183D32]/10 border-2 border-[#183D32] flex items-center justify-center text-[#183D32] mb-4">
              <CheckCircle className="w-10 h-10 text-[#183D32]" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E7445]">
              TRANSACTION SIMULATION SUCCESSFUL
            </span>
            <h4 className="font-serif text-2xl text-[#1E231D] mt-1 mb-2">
              Welcome to the StudyVault Knowledge Sanctuary
            </h4>
            <p className="text-xs text-[#5F665C] max-w-md leading-relaxed mb-6">
              Your {plan.name} has been activated for your account. You now have unhindered access to all curated monographs, reading annotations, and academic vaults.
            </p>
            <div className="p-3 bg-[#EBE4D8] border border-[#B69A65]/30 rounded text-xs font-mono text-[#183D32] mb-6 w-full text-left">
              <div className="flex justify-between py-1">
                <span className="text-[#7E8377]">Reference ID:</span>
                <span className="font-semibold">SV-IN-2026-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7E8377]">Payment Rail:</span>
                <span>UPI / National Payments Corporation of India</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7E8377]">Status:</span>
                <span className="text-emerald-700 font-bold">ACTIVE & VERIFIED</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-md"
            >
              Enter My Study Workspace
            </button>
          </div>
        ) : (
          <div className="p-6">
            {/* Tabs */}
            <div className="grid grid-cols-3 gap-2 border-b border-[#1E231D]/10 pb-3 mb-5">
              <button
                onClick={() => setActiveTab('upi')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-sm transition-colors ${
                  activeTab === 'upi'
                    ? 'bg-[#183D32] text-[#F4F0E8]'
                    : 'bg-[#EBE4D8] text-[#5F665C] hover:bg-[#E3DBD0]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> UPI & QR
              </button>
              <button
                onClick={() => setActiveTab('card')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-sm transition-colors ${
                  activeTab === 'card'
                    ? 'bg-[#183D32] text-[#F4F0E8]'
                    : 'bg-[#EBE4D8] text-[#5F665C] hover:bg-[#E3DBD0]'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" /> Cards & RuPay
              </button>
              <button
                onClick={() => setActiveTab('netbanking')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-sm transition-colors ${
                  activeTab === 'netbanking'
                    ? 'bg-[#183D32] text-[#F4F0E8]'
                    : 'bg-[#EBE4D8] text-[#5F665C] hover:bg-[#E3DBD0]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" /> NetBanking
              </button>
            </div>

            {/* TAB: UPI */}
            {activeTab === 'upi' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-[#EAE3D5]/70 p-4 rounded-sm border border-[#1E231D]/8">
                  {/* QR Box */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative p-2.5 bg-white rounded border border-[#1E231D]/15 shadow-sm">
                      {/* Stylized simulated QR Code graphic */}
                      <div className="w-36 h-36 bg-[#183D32] p-2 flex flex-col justify-between rounded">
                        <div className="flex justify-between">
                          <div className="w-9 h-9 bg-[#F4F0E8] p-1.5 flex items-center justify-center">
                            <div className="w-full h-full bg-[#183D32]" />
                          </div>
                          <div className="w-9 h-9 bg-[#F4F0E8] p-1.5 flex items-center justify-center">
                            <div className="w-full h-full bg-[#183D32]" />
                          </div>
                        </div>
                        <div className="flex justify-center items-center py-2">
                          <span className="text-[11px] font-mono font-bold text-[#B69A65] tracking-widest">
                            STUDYVAULT
                          </span>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="w-9 h-9 bg-[#F4F0E8] p-1.5 flex items-center justify-center">
                            <div className="w-full h-full bg-[#183D32]" />
                          </div>
                          <div className="text-[9px] text-white/80 font-mono">₹{plan.priceINR}</div>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#7E8377] font-mono mt-1.5">
                      Scan with any UPI App • Expires in <span className="text-[#183D32] font-bold">{formatTimer(timerSeconds)}</span>
                    </span>
                  </div>

                  {/* UPI Apps & Handles */}
                  <div className="space-y-3">
                    <div className="text-xs text-[#5F665C]">
                      Supported UPI Apps:
                      <div className="flex flex-wrap gap-1.5 mt-1 text-[10px] font-mono font-medium text-[#183D32]">
                        <span className="px-1.5 py-0.5 bg-white rounded border border-[#1E231D]/10">Google Pay</span>
                        <span className="px-1.5 py-0.5 bg-white rounded border border-[#1E231D]/10">PhonePe</span>
                        <span className="px-1.5 py-0.5 bg-white rounded border border-[#1E231D]/10">Paytm</span>
                        <span className="px-1.5 py-0.5 bg-white rounded border border-[#1E231D]/10">Cred UPI</span>
                        <span className="px-1.5 py-0.5 bg-white rounded border border-[#1E231D]/10">BHIM</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-[11px] font-mono text-[#5F665C] mb-1">
                        Or enter your VPA / UPI ID:
                      </label>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="e.g. yourname@okhdfcbank"
                          className="flex-1 bg-white border border-[#1E231D]/15 rounded px-2.5 py-1.5 text-xs text-[#1E231D] focus:outline-none focus:border-[#183D32]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#7E8377] font-mono pt-1">
                      <span>StudyVault VPA:</span>
                      <button 
                        onClick={handleCopyUPI}
                        className="flex items-center gap-1 text-[#183D32] font-semibold hover:underline"
                      >
                        {copiedUpi ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        {copiedUpi ? 'Copied' : 'studyvault@okhdfc'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: CARDS */}
            {activeTab === 'card' && (
              <div className="space-y-3 bg-[#EAE3D5]/70 p-4 rounded-sm border border-[#1E231D]/8">
                <div>
                  <label className="block text-[11px] font-mono text-[#5F665C] mb-1">Card Number (RuPay, Visa, Mastercard)</label>
                  <input
                    type="text"
                    defaultValue="4532 •••• •••• 8829"
                    className="w-full bg-white border border-[#1E231D]/15 rounded px-3 py-1.5 text-xs text-[#1E231D]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-[#5F665C] mb-1">Expiry Date</label>
                    <input
                      type="text"
                      defaultValue="08/29"
                      className="w-full bg-white border border-[#1E231D]/15 rounded px-3 py-1.5 text-xs text-[#1E231D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-[#5F665C] mb-1">CVV</label>
                    <input
                      type="password"
                      defaultValue="•••"
                      className="w-full bg-white border border-[#1E231D]/15 rounded px-3 py-1.5 text-xs text-[#1E231D]"
                    />
                  </div>
                </div>
                <div className="text-[11px] text-[#7E8377]">
                  Supports domestic Indian RuPay cards, zero international markup.
                </div>
              </div>
            )}

            {/* TAB: NETBANKING */}
            {activeTab === 'netbanking' && (
              <div className="space-y-3 bg-[#EAE3D5]/70 p-4 rounded-sm border border-[#1E231D]/8">
                <span className="text-xs text-[#5F665C]">Popular Indian Banks:</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  {['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Punjab National Bank', 'Kotak Mahindra'].map((b, i) => (
                    <label key={b} className="flex items-center gap-2 p-2 bg-white rounded border border-[#1E231D]/10 cursor-pointer hover:border-[#183D32]">
                      <input type="radio" name="bank" defaultChecked={i === 0} />
                      <span className="text-[11px] text-[#1E231D]">{b}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Action Simulator Button */}
            <div className="mt-5 space-y-3">
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full py-3 bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#D5C299] border-t-transparent rounded-full animate-spin" />
                    <span>Verifying with NPCI / Gateway...</span>
                  </>
                ) : (
                  <>
                    <span>Simulate Payment of ₹{plan.priceINR.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-4 h-4 text-[#B69A65]" />
                  </>
                )}
              </button>

              {/* Prototype Disclaimer */}
              <p className="text-[11px] text-[#7E8377] text-center leading-relaxed font-mono">
                * DEMONSTRATION PROTOTYPE: This simulation activates full membership access in local browser state. No actual money is debited.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
