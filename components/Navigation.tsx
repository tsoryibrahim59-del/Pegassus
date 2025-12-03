import React from 'react';
import { Home, FileText, GraduationCap, BookOpen, Menu, X } from 'lucide-react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  currentView, 
  onChangeView,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  
  const navItems = [
    { id: AppView.HOME, label: 'Accueil', icon: Home },
    { id: AppView.REGISTRATION, label: 'Pré-inscription', icon: FileText },
    { id: AppView.SCHOLARSHIP, label: 'Demande Bourse', icon: GraduationCap },
    { id: AppView.GUIDE, label: 'Guide Pratique', icon: BookOpen },
  ];

  return (
    <nav className="bg-emerald-700 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onChangeView(AppView.HOME)}>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-emerald-800 font-bold">
              M
            </div>
            <span className="font-bold text-xl tracking-tight">Campus Mali Assistant</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onChangeView(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentView === item.id
                      ? 'bg-emerald-800 text-yellow-300'
                      : 'text-white hover:bg-emerald-600'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-emerald-700 pb-3 px-2 pt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onChangeView(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentView === item.id
                  ? 'bg-emerald-800 text-yellow-300'
                  : 'text-white hover:bg-emerald-600'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};