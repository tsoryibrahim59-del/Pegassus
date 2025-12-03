import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { RegistrationForm } from './components/RegistrationForm';
import { ScholarshipForm } from './components/ScholarshipForm';
import { Guide } from './components/Guide';
import { ChatBot } from './components/ChatBot';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home onChangeView={setCurrentView} />;
      case AppView.REGISTRATION:
        return <RegistrationForm />;
      case AppView.SCHOLARSHIP:
        return <ScholarshipForm />;
      case AppView.GUIDE:
        return <Guide />;
      default:
        return <Home onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <Navigation 
        currentView={currentView} 
        onChangeView={setCurrentView}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {renderView()}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Assistant Campus Mali. Ceci est une application de démonstration.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-600">Confidentialité</a>
              <a href="#" className="hover:text-emerald-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot available on all pages */}
      <ChatBot />
    </div>
  );
};

export default App;