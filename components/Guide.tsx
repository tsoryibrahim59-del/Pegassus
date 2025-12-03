import React from 'react';
import { BookOpen, AlertTriangle, CreditCard, Monitor, CheckCircle } from 'lucide-react';

export const Guide: React.FC = () => {
  const steps = [
    {
      title: "1. Création du compte Campus Mali",
      icon: Monitor,
      content: "Allez sur campusmali.ml. Cliquez sur 'Nouveau bachelier'. Vous aurez besoin de votre numéro de place au Bac et de votre date de naissance. Un numéro de dossier vous sera attribué."
    },
    {
      title: "2. Paiement des frais",
      icon: CreditCard,
      content: "Une fois le numéro de dossier obtenu, payez les frais (5000 FCFA généralement) via Orange Money ou Moov Money. Gardez précieusement le SMS de confirmation."
    },
    {
      title: "3. Choix des filières",
      icon: BookOpen,
      content: "Connectez-vous à nouveau. Vous pourrez choisir 3 filières par ordre de préférence. Attention : vos notes du Bac déterminent votre admissibilité dans certaines facultés (Médecine, ENI, etc.)."
    },
    {
      title: "4. Validation",
      icon: CheckCircle,
      content: "Validez votre choix. Imprimez votre fiche de pré-inscription. C'est ce document qui prouve votre enregistrement."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Guide Pratique de l'Étudiant</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Les étapes clés pour réussir votre rentrée universitaire au Mali sans stress.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-emerald-300 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                <step.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              {step.content}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex gap-4">
        <div className="shrink-0">
          <AlertTriangle className="w-8 h-8 text-yellow-600" />
        </div>
        <div>
          <h4 className="font-bold text-yellow-800 text-lg mb-2">Conseils Importants pour la Bourse</h4>
          <ul className="list-disc list-inside space-y-2 text-yellow-900/80 text-sm">
            <li>L'âge limite pour la bourse entière est généralement de 25 ans.</li>
            <li>Les étudiants inscrits à titre "professionnel" (cours du soir payants) ne sont pas éligibles à la bourse nationale.</li>
            <li>Le compte bancaire doit être ouvert au nom de l'étudiant (Ecobank est souvent partenaire du CENOU).</li>
            <li>Pour toute question complexe, utilisez notre <strong>Assistant Chatbot</strong> en bas à droite !</li>
          </ul>
        </div>
      </div>
    </div>
  );
};