import React from 'react';
import { AppView } from '../types';
import { ArrowRight, CheckCircle2, Clock, Calendar } from 'lucide-react';

interface HomeProps {
  onChangeView: (view: AppView) => void;
}

export const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
            <svg width="400" height="400" viewBox="0 0 200 200">
                <path fill="#FCD34D" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.8,2.2C83.1,16.1,73.1,28.8,63.1,40.4C53.1,52,43.1,62.5,31.4,68.9C19.7,75.3,6.3,77.6,-5.8,75.7C-17.9,73.8,-30.7,67.7,-41.8,59.3C-52.9,50.9,-62.3,40.2,-68.9,28C-75.5,15.8,-79.3,2.1,-76.8,-10.4C-74.3,-22.9,-65.5,-34.2,-54.8,-42.6C-44.1,-51,-31.5,-56.5,-18.9,-63.9C-6.3,-71.3,6.3,-80.6,20.5,-82.4C34.7,-84.2,50.5,-78.5,45.7,-76.3Z" transform="translate(100 100)" />
            </svg>
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Bienvenue sur le portail d'aide Campus Mali
          </h1>
          <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
            Gérez votre pré-inscription et vos demandes de bourses universitaires en toute simplicité.
            Notre assistant IA est là pour vous guider à chaque étape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onChangeView(AppView.REGISTRATION)}
              className="bg-yellow-400 text-emerald-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center"
            >
              Pré-inscription
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => onChangeView(AppView.SCHOLARSHIP)}
              className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-400 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-800/50 transition-colors flex items-center justify-center"
            >
              Demander une bourse
            </button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Délais & Dates</h3>
          <p className="text-gray-600 text-sm">
            Les inscriptions pour l'année 2024-2025 sont ouvertes jusqu'au 30 Novembre. Ne tardez pas !
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Documents Requis</h3>
          <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
            <li>Numéro NINA</li>
            <li>Relevés de notes du Bac</li>
            <li>Photos d'identité numériques</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Suivi Dossier</h3>
          <p className="text-gray-600 text-sm">
            Vous pouvez consulter l'état de votre demande de bourse directement sur le site du CENOU après dépôt.
          </p>
        </div>
      </div>

      {/* Recent News or Updates Simulation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Actualités Campus</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { title: "Ouverture des réclamations bourses", date: "Il y a 2 jours", tag: "Bourse" },
            { title: "Mise à jour de la procédure d'inscription FSEG", date: "Il y a 5 jours", tag: "Inscription" },
            { title: "Disponibilité des cartes bancaires CENOU", date: "Il y a 1 semaine", tag: "CENOU" },
          ].map((news, i) => (
            <div key={i} className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between items-center group">
              <div>
                <h4 className="font-medium text-gray-800 group-hover:text-emerald-700 transition-colors">{news.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{news.date}</p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                {news.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};