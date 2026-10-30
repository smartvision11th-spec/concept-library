import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import PaymentModal from './components/PaymentModal';
import AuthModal from './components/AuthModal';

import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ResourceDetailPage from './pages/ResourceDetailPage';
import MembershipPage from './pages/MembershipPage';
import DashboardPage from './pages/DashboardPage';
import WorkspacePage from './pages/WorkspacePage';

import { RESOURCES, MEMBERSHIP_PLANS, INITIAL_USER } from './data/mockData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedResource, setSelectedResource] = useState(RESOURCES[0]);
  const [bookmarkedIds, setBookmarkedIds] = useState(INITIAL_USER.savedResourceIds || []);
  const [user, setUser] = useState(INITIAL_USER);
  
  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState(MEMBERSHIP_PLANS[1]); // default Annual

  // Scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleSelectResource = (resource) => {
    setSelectedResource(resource);
    setCurrentPage('resource-detail');
  };

  const handleOpenReader = (resource) => {
    if (resource) {
      setSelectedResource(resource);
    }
    setCurrentPage('workspace');
  };

  const handleToggleBookmark = (id) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleOpenPayment = (plan) => {
    setSelectedPlanForPayment(plan || MEMBERSHIP_PLANS[1]);
    setIsPaymentOpen(true);
  };

  const handleSuccessfulPayment = (plan) => {
    setUser(prev => ({
      ...prev,
      membershipTier: plan.name,
      expiryDate: plan.id === 'patron' ? 'Perpetual Lifetime' : 'October 2027'
    }));
  };

  const handleLoginSuccess = (userData) => {
    setUser(prev => ({
      ...prev,
      ...userData
    }));
  };

  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#1E231D] selection:bg-[#B69A65]/30 selection:text-[#183D32]">
      {/* Editorial Navigation (hidden during fullscreen workspace if in focus mode) */}
      {currentPage !== 'workspace' && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
          user={user}
          savedCount={bookmarkedIds.length}
        />
      )}

      {/* Main Routed Page Content */}
      <main>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectResource={handleSelectResource}
            onOpenReader={handleOpenReader}
            onOpenPayment={handleOpenPayment}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentPage === 'explore' && (
          <ExplorePage
            onSelectResource={handleSelectResource}
            onOpenReader={handleOpenReader}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentPage === 'resource-detail' && (
          <ResourceDetailPage
            resource={selectedResource}
            onBack={() => setCurrentPage('explore')}
            onOpenReader={handleOpenReader}
            isBookmarked={bookmarkedIds.includes(selectedResource?.id)}
            onToggleBookmark={handleToggleBookmark}
            onOpenPayment={handleOpenPayment}
            membershipPlan={MEMBERSHIP_PLANS[1]}
          />
        )}

        {currentPage === 'membership' && (
          <MembershipPage
            onOpenPayment={handleOpenPayment}
            currentPlanId="annual"
          />
        )}

        {currentPage === 'dashboard' && (
          <DashboardPage
            user={user}
            onOpenReader={handleOpenReader}
            onSelectResource={handleSelectResource}
            onOpenPayment={handleOpenPayment}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'workspace' && (
          <WorkspacePage
            resource={selectedResource}
            onBack={() => setCurrentPage(selectedResource ? 'resource-detail' : 'explore')}
            onNavigate={handleNavigate}
            isBookmarked={bookmarkedIds.includes(selectedResource?.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </main>

      {/* Global Interactive Modals */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResource={handleSelectResource}
        onOpenReader={handleOpenReader}
      />

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        plan={selectedPlanForPayment}
        onSuccessfulPayment={handleSuccessfulPayment}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
