import React, { useState } from 'react';
import svgPaths from '../imports/svg-6r39tdbsgm';

interface DemographicsData {
  age: string;
  education: string;
  region: string;
  acceptContact: boolean;
  email: string | null;
}

interface DemographicsPageProps {
  onComplete: (data: DemographicsData) => void;
  onBack: () => void;
}

export function DemographicsPage({ onComplete, onBack }: DemographicsPageProps) {
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [region, setRegion] = useState('');
  const [acceptContact, setAcceptContact] = useState(false);
  const [email, setEmail] = useState('');

  const ageRanges = [
    '18-24 ans',
    '25-34 ans',
    '35-44 ans',
    '45-54 ans',
    '55-64 ans',
    '65 ans et plus'
  ];

  const educationLevels = [
    'Bac ou moins',
    'Bac+2/3',
    'Bac+5',
    'Doctorat'
  ];

  const regions = [
    'Auvergne-Rhône-Alpes',
    'Bourgogne-Franche-Comté',
    'Bretagne',
    'Centre-Val de Loire',
    'Corse',
    'Grand Est',
    'Hauts-de-France',
    'Île-de-France',
    'Normandie',
    'Nouvelle-Aquitaine',
    'Occitanie',
    'Pays de la Loire',
    "Provence-Alpes-Côte d'Azur",
    'Guadeloupe',
    'Martinique',
    'Guyane',
    'La Réunion',
    'Mayotte'
  ];

  // Validation : si acceptContact est true, email doit être rempli et valide
  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const canProceed = age !== '' && education !== '' && region !== '' && 
    (!acceptContact || (email !== '' && isEmailValid(email)));

  const handleSubmit = () => {
    if (canProceed) {
      onComplete({ 
        age, 
        education, 
        region, 
        acceptContact,
        email: acceptContact ? email : null
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 flex items-center justify-center">
      <div className="bg-white relative rounded-[14px] w-full max-w-[940px]">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start px-[16px] md:px-[21px] py-[20px] md:py-[25px] relative size-full">
            
            {/* Header */}
            <div className="min-h-[70px] relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[6px] flex flex-col pb-0 pt-[16px] md:pt-[24px] px-[12px] md:px-[24px] relative w-full">
                <div className="relative shrink-0">
                  <p className="font-['Arial:Regular',sans-serif] leading-[1.3] not-italic text-[24px] md:text-[32px] text-neutral-950">
                    Quelques informations
                  </p>
                </div>
                <div className="relative shrink-0">
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] md:leading-[24px] not-italic text-[#717182] text-[14px] md:text-[16px]">
                    Pour mieux comprendre votre profil
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start px-[12px] md:px-[24px] py-0 relative">
                
                {/* Age */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#323232] text-[14px] md:text-[16px]">
                    Quelle est votre tranche d'âge ?
                  </label>
                  <div className="relative w-full">
                    <select
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      style={{ paddingTop: '14px', paddingBottom: '14px' }}
                      className="bg-white border border-gray-200 rounded-[71px] px-[24px] pr-[48px] font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[#323232] outline-none focus:border-[#008e5c] hover:border-gray-400 transition-colors duration-200 w-full cursor-pointer appearance-none"
                    >
                      <option value="">Sélectionnez votre tranche d'âge</option>
                      {ageRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#323232] text-[14px] md:text-[16px]">
                    Quel est votre niveau d'études ?
                  </label>
                  <div className="relative w-full">
                    <select
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      style={{ paddingTop: '14px', paddingBottom: '14px' }}
                      className="bg-white border border-gray-200 rounded-[71px] px-[24px] pr-[48px] font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[#323232] outline-none focus:border-[#008e5c] hover:border-gray-400 transition-colors duration-200 w-full cursor-pointer appearance-none"
                    >
                      <option value="">Sélectionnez votre niveau d'études</option>
                      {educationLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Region */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#323232] text-[14px] md:text-[16px]">
                    Dans quelle région habitez-vous ?
                  </label>
                  <div className="relative w-full">
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      style={{ paddingTop: '14px', paddingBottom: '14px' }}
                      className="bg-white border border-gray-200 rounded-[71px] px-[24px] pr-[48px] font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[#323232] outline-none focus:border-[#008e5c] hover:border-gray-400 transition-colors duration-200 w-full cursor-pointer appearance-none"
                    >
                      <option value="">Sélectionnez votre région</option>
                      {regions.map((reg) => (
                        <option key={reg} value={reg}>{reg}</option>
                      ))}
                    </select>
                    <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Contact Checkbox */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full pt-[8px]">
                  {/* Titre de la question */}
                  <label className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#323232] text-[14px] md:text-[16px]">
                    Acceptez-vous de recevoir des informations par email ?
                  </label>
                  
                  {/* Checkbox avec texte */}
                  <div className="content-stretch flex items-center gap-[16px] relative shrink-0 w-full">
                    <input
                      type="checkbox"
                      id="acceptContact"
                      checked={acceptContact}
                      onChange={(e) => {
                        setAcceptContact(e.target.checked);
                        if (!e.target.checked) {
                          setEmail('');
                        }
                      }}
                      className="w-[18px] h-[18px] rounded-[4px] border border-gray-200 text-[#008e5c] cursor-pointer accent-[#008e5c] shrink-0"
                    />
                    <label 
                      htmlFor="acceptContact"
                      className="font-['Arial:Regular',sans-serif] leading-[1.5] not-italic text-[#323232] text-[14px] md:text-[16px] cursor-pointer flex-1"
                    >
                      Oui, je souhaite recevoir des informations par email
                    </label>
                  </div>

                  {/* Email Input - affiché seulement si checkbox cochée */}
                  {acceptContact && (
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrez votre email"
                        style={{ paddingTop: '14px', paddingBottom: '14px' }}
                        className={`bg-white border rounded-[71px] px-[24px] font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[#323232] placeholder:text-gray-400 outline-none hover:border-gray-400 transition-colors duration-200 w-full ${
                          email !== '' && !isEmailValid(email)
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-200 focus:border-[#008e5c]'
                        }`}
                      />
                      {email !== '' && !isEmailValid(email) && (
                        <p className="font-['Arial:Regular',sans-serif] leading-[1.4] not-italic text-red-500 text-[12px] md:text-[13px]">
                          Veuillez entrer une adresse e-mail valide
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-between px-[12px] md:px-[24px] py-0 relative shrink-0 w-full">
                {/* Desktop: Button avec texte "Retour" */}
                <button
                  onClick={onBack}
                  className="hidden md:flex bg-gray-100 box-border content-stretch gap-[8px] h-[40px] items-center justify-center px-[24px] py-0 relative rounded-[71px] shrink-0 hover:bg-gray-200 transition-colors"
                >
                  <div className="h-[22px] relative shrink-0 w-[23px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                      <path d={svgPaths.pa1d5600} fill="#323232" />
                    </svg>
                  </div>
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[14px] text-nowrap whitespace-pre">
                    Retour
                  </p>
                </button>

                {/* Mobile: Boutons côte à côte */}
                <div className="flex md:hidden items-center gap-3 w-full">
                  <button
                    onClick={onBack}
                    className="bg-gray-100 relative rounded-[71px] size-[40px] hover:bg-gray-200 active:bg-gray-300 transition-colors flex items-center justify-center shrink-0"
                  >
                    <div className="h-[22px] relative shrink-0 w-[23px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                        <path d={svgPaths.pa1d5600} fill="#323232" />
                      </svg>
                    </div>
                  </button>

                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed}
                    className={`box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center pl-[24px] pr-[20px] py-0 relative rounded-[71px] flex-1 transition-colors ${
                      canProceed 
                        ? 'bg-[#008e5c] hover:bg-[#007a4f] active:bg-[#006a42] cursor-pointer' 
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                      Continuer
                    </p>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-[180deg]">
                        <div className="h-[22px] relative w-[23px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                            <path d={svgPaths.pa1d5600} fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Desktop: Bouton Continuer */}
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  className={`hidden md:flex box-border content-stretch gap-[8px] h-[40px] items-center justify-center pl-[24px] pr-[20px] py-0 relative rounded-[71px] shrink-0 transition-colors ${
                    canProceed 
                      ? 'bg-[#008e5c] hover:bg-[#007a4f] cursor-pointer' 
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                    Continuer
                  </p>
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-[180deg]">
                      <div className="h-[22px] relative w-[23px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                          <path d={svgPaths.pa1d5600} fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}