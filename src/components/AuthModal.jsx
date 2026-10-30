import React, { useState } from 'react';
import { X, Smartphone, Mail, Lock, User, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess
}) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [authType, setAuthType] = useState('phone'); // 'phone' | 'email'
  const [phone, setPhone] = useState('98765 43210');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleDemoLogin = () => {
    onLoginSuccess && onLoginSuccess({
      name: 'Aarav Sharma',
      email: 'aarav.sharma@studyvault.in',
      city: 'New Delhi',
      membershipTier: 'Academic Year Vault'
    });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authType === 'phone' && !otpSent) {
      setOtpSent(true);
      return;
    }
    handleDemoLogin();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121915]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#F4F0E8] border border-[#B69A65]/50 shadow-2xl rounded-sm overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#183D32] text-[#F4F0E8] flex items-center justify-between border-b border-[#B69A65]/30">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69A65]">
              STUDENT SANCTUARY ACCESS
            </span>
            <h3 className="font-serif text-xl text-[#F4F0E8] mt-0.5">
              {mode === 'login' ? 'Enter Your Study Vault' : 'Create Scholar Account'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[#D5C299] hover:text-white hover:bg-white/10 rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick Demo Access Banner */}
          <div className="mb-5 p-3 bg-[#EAE3D5] border border-[#B69A65]/40 rounded-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#183D32]">Demonstration Quick Access</p>
                <p className="text-[11px] text-[#5F665C]">Sign in instantly as an active scholar</p>
              </div>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="px-3 py-1.5 bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] text-xs font-bold rounded-sm shadow-sm"
              >
                1-Click Demo Login
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs font-mono mb-4 border-b border-[#1E231D]/10 pb-3">
            <button
              onClick={() => { setAuthType('phone'); setOtpSent(false); }}
              className={`flex items-center gap-1.5 pb-1 border-b-2 transition-all ${
                authType === 'phone'
                  ? 'border-[#183D32] text-[#183D32] font-semibold'
                  : 'border-transparent text-[#7E8377]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Indian Mobile (+91)
            </button>
            <button
              onClick={() => setAuthType('email')}
              className={`flex items-center gap-1.5 pb-1 border-b-2 transition-all ${
                authType === 'email'
                  ? 'border-[#183D32] text-[#183D32] font-semibold'
                  : 'border-transparent text-[#7E8377]'
              }`}
            >
              <Mail className="w-3.5 h-3.5" /> Email Address
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-[11px] font-mono text-[#5F665C] mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#7E8377] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    defaultValue="Aarav Sharma"
                    className="w-full pl-9 pr-3 py-2 bg-white border border-[#1E231D]/15 rounded text-xs text-[#1E231D] focus:outline-none focus:border-[#183D32]"
                  />
                </div>
              </div>
            )}

            {authType === 'phone' ? (
              <div>
                <label className="block text-[11px] font-mono text-[#5F665C] mb-1">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-xs font-mono bg-[#EAE3D5] text-[#183D32] border border-r-0 border-[#1E231D]/15 rounded-l">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white border border-[#1E231D]/15 rounded-r text-xs text-[#1E231D] focus:outline-none focus:border-[#183D32]"
                  />
                </div>

                {otpSent && (
                  <div className="mt-3 animate-in fade-in">
                    <label className="block text-[11px] font-mono text-[#5F665C] mb-1">
                      Enter 4-Digit OTP (Hint: use any 4 digits, e.g. 1234)
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="••••"
                      className="w-full px-3 py-2 bg-white border border-[#183D32] rounded text-center tracking-widest font-mono text-base text-[#183D32]"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <label className="block text-[11px] font-mono text-[#5F665C] mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="aarav.sharma@studyvault.in"
                  className="w-full px-3 py-2 bg-white border border-[#1E231D]/15 rounded text-xs text-[#1E231D] focus:outline-none focus:border-[#183D32]"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-[#183D32] hover:bg-[#123027] text-[#F4F0E8] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              {authType === 'phone' && !otpSent
                ? 'Send Verification OTP'
                : mode === 'login'
                ? 'Authorize & Enter Vault'
                : 'Complete Registration'}
            </button>
          </form>

          {/* Toggle mode */}
          <div className="mt-4 pt-3 border-t border-[#1E231D]/10 text-center">
            {mode === 'login' ? (
              <p className="text-xs text-[#5F665C]">
                New to StudyVault?{' '}
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className="text-[#183D32] font-semibold hover:underline"
                >
                  Create an account
                </button>
              </p>
            ) : (
              <p className="text-xs text-[#5F665C]">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-[#183D32] font-semibold hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
