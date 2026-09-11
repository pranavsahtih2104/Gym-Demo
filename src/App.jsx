import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import Toast from './components/Toast';

// Modals
import BookingModal from './components/modals/BookingModal';
import ProgramModal from './components/modals/ProgramModal';
import TrainerModal from './components/modals/TrainerModal';
import ClassModal from './components/modals/ClassModal';
import ArticleModal from './components/modals/ArticleModal';

// Page Views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ProgramsView from './views/ProgramsView';
import TrainersView from './views/TrainersView';
import ClassesView from './views/ClassesView';
import MembershipView from './views/MembershipView';
import FacilitiesView from './views/FacilitiesView';
import JournalView from './views/JournalView';
import FaqView from './views/FaqView';
import ContactView from './views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  // Modal States
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState(null);
  const [preselectedTrainer, setPreselectedTrainer] = useState(null);

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Toast System
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'programs', 'trainers', 'classes', 'membership', 'facilities', 'journal', 'faq', 'contact'].includes(hash)) {
        setCurrentView(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (viewId) => {
    setCurrentView(viewId);
    window.location.hash = viewId === 'home' ? '' : `#${viewId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (program = null, trainer = null) => {
    setPreselectedProgram(program);
    setPreselectedTrainer(trainer);
    setBookingModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Sticky Navigation */}
      <Navbar 
        currentView={currentView}
        navigateTo={navigateTo}
        openBookingModal={handleOpenBookingModal}
      />

      {/* Main View Router */}
      <main style={{ flex: '1 0 auto' }}>
        {currentView === 'home' && (
          <HomeView 
            navigateTo={navigateTo}
            openBookingModal={handleOpenBookingModal}
            openProgramModal={(p) => setSelectedProgram(p)}
            openTrainerModal={(t) => setSelectedTrainer(t)}
            openClassModal={(c) => setSelectedClass(c)}
            openArticleModal={(a) => setSelectedArticle(a)}
            showToast={addToast}
          />
        )}

        {currentView === 'about' && (
          <AboutView 
            navigateTo={navigateTo}
            openBookingModal={handleOpenBookingModal}
            openTrainerModal={(t) => setSelectedTrainer(t)}
          />
        )}

        {currentView === 'programs' && (
          <ProgramsView 
            openProgramModal={(p) => setSelectedProgram(p)}
            openBookingModal={handleOpenBookingModal}
          />
        )}

        {currentView === 'trainers' && (
          <TrainersView 
            openTrainerModal={(t) => setSelectedTrainer(t)}
            openBookingModal={handleOpenBookingModal}
          />
        )}

        {currentView === 'classes' && (
          <ClassesView 
            openClassModal={(c) => setSelectedClass(c)}
            openBookingModal={handleOpenBookingModal}
          />
        )}

        {currentView === 'membership' && (
          <MembershipView 
            openBookingModal={handleOpenBookingModal}
            showToast={addToast}
          />
        )}

        {currentView === 'facilities' && (
          <FacilitiesView 
            openBookingModal={handleOpenBookingModal}
          />
        )}

        {currentView === 'journal' && (
          <JournalView 
            openArticleModal={(a) => setSelectedArticle(a)}
          />
        )}

        {currentView === 'faq' && (
          <FaqView 
            navigateTo={navigateTo}
            openBookingModal={handleOpenBookingModal}
          />
        )}

        {currentView === 'contact' && (
          <ContactView 
            openBookingModal={handleOpenBookingModal}
            showToast={addToast}
          />
        )}

        {/* Fallback to HomeView if currentView is invalid */}
        {!['home', 'about', 'programs', 'trainers', 'classes', 'membership', 'facilities', 'journal', 'faq', 'contact'].includes(currentView) && (
          <HomeView 
            navigateTo={navigateTo}
            openBookingModal={handleOpenBookingModal}
            openProgramModal={(p) => setSelectedProgram(p)}
            openTrainerModal={(t) => setSelectedTrainer(t)}
            openClassModal={(c) => setSelectedClass(c)}
            openArticleModal={(a) => setSelectedArticle(a)}
            showToast={addToast}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer 
        navigateTo={navigateTo}
        openBookingModal={handleOpenBookingModal}
        showToast={addToast}
      />

      {/* Mobile Sticky Bar */}
      <StickyMobileCta 
        openBookingModal={handleOpenBookingModal}
      />

      {/* Global Toast Alert Overlay */}
      <Toast 
        toasts={toasts}
        removeToast={removeToast}
      />

      {/* Modals */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedProgram={preselectedProgram}
        preselectedTrainer={preselectedTrainer}
        showToast={addToast}
      />

      <ProgramModal 
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookConsultation={(progTitle) => handleOpenBookingModal(progTitle)}
      />

      <TrainerModal 
        trainer={selectedTrainer}
        isOpen={!!selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        onBookWithTrainer={(trainerName) => handleOpenBookingModal(null, trainerName)}
      />

      <ClassModal 
        classItem={selectedClass}
        isOpen={!!selectedClass}
        onClose={() => setSelectedClass(null)}
        showToast={addToast}
      />

      <ArticleModal 
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        showToast={addToast}
      />

    </div>
  );
}
