import React, { useState } from 'react';
import { User, CreditCard, School, Save, Check } from 'lucide-react';
import { StudentInfo } from '../types';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<StudentInfo>({
    firstName: '',
    lastName: '',
    nina: '',
    phone: '',
    email: '',
    bacSeries: '',
    bacYear: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pré-inscription simulée réussie !</h2>
        <p className="text-gray-600 mb-6">
          Votre dossier a été enregistré localement. Dans une application réelle, vous recevriez maintenant votre numéro de dossier pour procéder au paiement des frais d'inscription via Orange Money ou Moov Money.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Nouvelle inscription
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-emerald-700 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <School className="w-8 h-8 text-yellow-300" />
            Simulation Pré-inscription
          </h2>
          <p className="text-emerald-100 mt-2">
            Remplissez ce formulaire pour simuler une inscription sur Campus Mali.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Section: Identité */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-600" />
              Informations Personnelles
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="Ex: Moussa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="Ex: Traoré"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Numéro NINA</label>
                <input
                  type="text"
                  name="nina"
                  required
                  value={formData.nina}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="Numéro à 14 chiffres"
                />
                <p className="text-xs text-gray-500 mt-1">Indispensable pour l'identification.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="moussa@exemple.com"
                />
              </div>
            </div>
          </div>

          {/* Section: Académique */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <School className="w-5 h-5 text-emerald-600" />
              Parcours Académique
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Série du Bac</label>
                <select
                  name="bacSeries"
                  required
                  value={formData.bacSeries}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Sélectionner</option>
                  <option value="TSE">TSE (Sciences Exactes)</option>
                  <option value="TSEXP">TSEXP (Sciences Exp.)</option>
                  <option value="TSECO">TSECO (Sciences Eco)</option>
                  <option value="TSS">TSS (Sciences Sociales)</option>
                  <option value="LL">LL (Langues et Littérature)</option>
                  <option value="TAL">TAL (Terminale Arts et Lettres)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Année du Bac</label>
                <input
                  type="number"
                  name="bacYear"
                  required
                  min="2015"
                  max="2025"
                  value={formData.bacYear}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="Ex: 2024"
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <CreditCard className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Après cette étape, vous devrez payer les frais d'inscription (5000 FCFA pour la plupart des filières) via paiement mobile.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-md flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Enregistrer la pré-inscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};