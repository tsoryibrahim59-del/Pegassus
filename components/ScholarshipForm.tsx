import React, { useState } from 'react';
import { GraduationCap, Wand2, Loader2, FileText, AlertCircle } from 'lucide-react';
import { improveText } from '../services/geminiService';

export const ScholarshipForm: React.FC = () => {
  const [motivationLetter, setMotivationLetter] = useState('');
  const [isImproving, setIsImproving] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Gemini AI Feature: Rewrite content
  const handleAiImprove = async () => {
    if (!motivationLetter.trim()) return;
    
    setIsImproving(true);
    try {
      const improved = await improveText(motivationLetter);
      setMotivationLetter(improved);
    } catch (e) {
      console.error(e);
      alert("Erreur lors de l'amélioration du texte.");
    } finally {
      setIsImproving(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showResult) {
     return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center mt-10">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="w-10 h-10 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Demande de Bourse Soumise</h2>
        <p className="text-gray-600 mb-6">
          Votre demande a été simulée avec succès. N'oubliez pas de déposer les pièces physiques (copies légalisées) au guichet du CENOU le plus proche.
        </p>
        <button 
          onClick={() => {setShowResult(false); setMotivationLetter('');}}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-emerald-800 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-yellow-300" />
            Demande de Bourse Nationale
          </h2>
          <p className="text-emerald-200 mt-2">
            Formulaire simplifié pour la demande d'allocation d'études.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 border-b pb-2">Informations Académiques</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Université / Grande École</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                        <option>Université des Sciences, des Techniques et des Technologies de Bamako (USTTB)</option>
                        <option>Université des Lettres et des Sciences Humaines de Bamako (ULSHB)</option>
                        <option>Université des Sciences Sociales et de Gestion de Bamako (USSGB)</option>
                        <option>Université de Ségou</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cycle</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                        <option>Licence</option>
                        <option>Master</option>
                        <option>Doctorat</option>
                    </select>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 border-b pb-2">Situation Sociale</h3>
                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                    <input type="checkbox" id="aid" className="mt-1 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" />
                    <label htmlFor="aid" className="text-sm text-gray-600 cursor-pointer">
                        Je certifie que mes parents n'ont pas de revenus fixes et je souhaite postuler pour la bourse entière.
                    </label>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                    <input type="checkbox" id="residence" className="mt-1 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500" />
                    <label htmlFor="residence" className="text-sm text-gray-600 cursor-pointer">
                        Je demande également une chambre en cité universitaire (si disponible).
                    </label>
                </div>
            </div>
          </div>

          {/* AI Enhanced Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Lettre de Motivation
                </h3>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium border border-yellow-200">
                    Important
                </span>
            </div>
            
            <div className="relative">
                <textarea
                    value={motivationLetter}
                    onChange={(e) => setMotivationLetter(e.target.value)}
                    rows={8}
                    className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-y"
                    placeholder="Madame, Monsieur, je sollicite cette bourse car..."
                />
                
                {/* Floating AI Button */}
                <div className="absolute bottom-4 right-4">
                    <button
                        type="button"
                        onClick={handleAiImprove}
                        disabled={isImproving || !motivationLetter.trim()}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-all ${
                            isImproving || !motivationLetter.trim()
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:scale-105'
                        }`}
                        title="Utiliser l'IA pour corriger et améliorer votre lettre"
                    >
                        {isImproving ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Amélioration...
                            </>
                        ) : (
                            <>
                                <Wand2 className="w-4 h-4" />
                                Améliorer avec IA
                            </>
                        )}
                    </button>
                </div>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                L'IA Gemini analysera votre texte pour corriger les fautes et le rendre plus professionnel.
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
                type="submit"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-md"
            >
                Soumettre la demande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};