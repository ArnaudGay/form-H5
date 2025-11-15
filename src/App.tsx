import React, { useState } from 'react';
import svgPaths from './imports/svg-6r39tdbsgm';
import { ScaleQuestion } from './components/scale-question';
import { ThankYouPage } from './components/thank-you-page';
import { IntroPage } from './components/introduction-page';
import { DemographicsPage } from './components/demographic-questionnaire';
import { submitQuestionnaireData } from './services/submissionService';

interface Subject {
  id: number;
  title: string;
  mainQuestion: string;
  importanceQuestion: string;
  satisfactionQuestion: string;
}

interface Answers {
  [subjectId: number]: {
    importance: string | null;
    satisfaction: string | null;
  };
}

interface DemographicsData {
  age: string;
  education: string;
  region: string;
  acceptContact: boolean;
  email: string | null;
}

const subjects: Subject[] = [
    {
    id: 1,
    title: "Sujet n°1",
    mainQuestion: "Je veux être aidé pour débloquer rapidement les fonds nécessaires et accomplir toutes les démarches liées au paiement des obsèques et à la succession.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 2,
    title: "Sujet n°2",
    mainQuestion: "Je veux disposer d’une solution pour régler sans attendre les premiers frais d’obsèques, sans devoir avancer d’argent ou m’endetter.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 3,
    title: "Sujet n°3",
    mainQuestion: "Je veux être accompagné pour effectuer, sans rien oublier ni doubler, toutes les résiliations et démarches administratives après le décès de mon proche.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 4,
    title: "Sujet n°4",
    mainQuestion: "Je veux que les démarches administratives soient simples, centralisées et accessibles en ligne.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 5,
    title: "Sujet n°5",
    mainQuestion: "Je veux organiser l’inhumation ou la crémation dans les délais légaux, avec un accompagnement pour coordonner tous les acteurs concernés.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 6,
    title: "Sujet n°6",
    mainQuestion: "Je veux bénéficier d’un interlocuteur unique ou d’un service dédié qui m’accompagne du début à la fin du processus.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 7,
    title: "Sujet n°7",
    mainQuestion: "Je veux accéder rapidement à toutes les informations utiles (guide, liste de démarches, prestataires), sans avoir à chercher partout.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 8,
    title: "Sujet n°8",
    mainQuestion: "Je veux savoir quoi faire des comptes et des données numériques, et être accompagné pour respecter les dernières volontés tout en sécurisant les accès et données.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 9,
    title: "Sujet n°9",
    mainQuestion: "Je veux que les démarches successorales soient rendues transparentes, avec un suivi clair pour chaque étape jusqu’à la clôture.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 10,
    title: "Sujet n°10",
    mainQuestion: "Je veux que le processus de déclaration du décès soit facilité et automatisé auprès des différents organismes.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 11,
    title: "Sujet n°11",
    mainQuestion: "Je veux pouvoir comparer facilement les devis des services funéraires pour choisir sereinement, sans risque de surpayer et dans le respect des volontés de mon proche.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 12,
    title: "Sujet n°12",
    mainQuestion: "Je veux être accompagné dans les démarches auprès des banques afin d’éviter les blocages et résoudre les interrogations sur les comptes et la succession.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 13,
    title: "Sujet n°13",
    mainQuestion: "Je veux regrouper, stocker et partager tous les documents relatifs à la succession et aux démarches après décès dans un espace sécurisé en ligne.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 14,
    title: "Sujet n°14",
    mainQuestion: "Je veux être guidé pour rassembler tous les documents nécessaires auprès des différents assureurs afin de percevoir le capital le plus rapidement possible.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 15,
    title: "Sujet n°15",
    mainQuestion: "Je veux comprendre en détail les différentes étapes à suivre pour ne rien oublier et être rassuré.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'intro' | 'demographics' | 'questionnaire' | 'thankyou'>('intro');
  const [demographicsData, setDemographicsData] = useState<DemographicsData | null>(null);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentSubject = subjects[currentSubjectIndex];
  const totalSubjects = subjects.length;
  
  // Calculer le nombre de sujets complétés
  const completedSubjects = Object.keys(answers).filter(key => {
    const answer = answers[parseInt(key)];
    return answer.importance !== null && answer.satisfaction !== null;
  }).length;

  const progressPercentage = (completedSubjects / totalSubjects) * 100;

  const handleImportanceChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentSubject.id]: {
        ...prev[currentSubject.id],
        importance: value,
        satisfaction: prev[currentSubject.id]?.satisfaction || null
      }
    }));
  };

  const handleSatisfactionChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentSubject.id]: {
        ...prev[currentSubject.id],
        importance: prev[currentSubject.id]?.importance || null,
        satisfaction: value
      }
    }));
  };

  const handleNext = () => {
    if (currentSubjectIndex < subjects.length - 1) {
      setCurrentSubjectIndex(prev => prev + 1);
    }
  };

  const handleValidate = async () => {
    // Préparer les données à envoyer
    if (!demographicsData) {
      console.error('Demographics data is missing');
      setCurrentPage('thankyou');
      return;
    }

    // Convertir les réponses en format pour Supabase
    const answersArray = Object.entries(answers).map(([subjectId, answer]) => ({
      subjectId: parseInt(subjectId),
      importance: answer.importance,
      satisfaction: answer.satisfaction,
    }));

    const submissionData = {
      demographics: demographicsData,
      answers: answersArray,
      submittedAt: new Date().toISOString(),
    };

    // Envoyer les données à Supabase
    try {
      const result = await submitQuestionnaireData(submissionData);
      if (!result.success) {
        console.error('Error submitting data:', result.error);
        // On continue quand même pour afficher la page de remerciement
      }
    } catch (error) {
      console.error('Unexpected error submitting data:', error);
      // On continue quand même pour afficher la page de remerciement
    }

    setCurrentPage('thankyou');
  };

  const handleBack = () => {
    if (currentSubjectIndex > 0) {
      setCurrentSubjectIndex(prev => prev - 1);
    }
  };

  const currentAnswers = answers[currentSubject.id] || { importance: null, satisfaction: null };
  const isLastSubject = currentSubjectIndex === subjects.length - 1;
  const canProceed = currentAnswers.importance !== null && currentAnswers.satisfaction !== null;

  const handleStartQuestionnaire = () => {
    setCurrentPage('demographics');
  };

  const handleDemographicsComplete = (data: DemographicsData) => {
    setDemographicsData(data);
    setCurrentPage('questionnaire');
  };

  const handleBackToIntro = () => {
    setCurrentPage('intro');
  };

  // Afficher la page d'introduction
  if (currentPage === 'intro') {
    return <IntroPage onStart={handleStartQuestionnaire} />;
  }

  // Afficher la page démographique
  if (currentPage === 'demographics') {
    return <DemographicsPage onComplete={handleDemographicsComplete} onBack={handleBackToIntro} />;
  }

  // Afficher la page de remerciement si complété
  if (currentPage === 'thankyou') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
        <ThankYouPage />
      </div>
    );
  }

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
                  <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic text-[14px] md:text-[16px] text-neutral-950">
                    L'étude sur le deuil plus justement accompagné
                  </p>
                </div>
                <div className="relative shrink-0">
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] md:leading-[24px] not-italic text-[#717182] text-[14px] md:text-[16px]">
                    Nous voulons savoir ce que vous en pensez. Votre avis compte beaucoup pour nous.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start px-[12px] md:px-[24px] py-0 relative">
                
                {/* Progress */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full">
                    <div className="h-[20px] relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative">
                        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[14px] text-nowrap whitespace-pre">
                          Progression
                        </p>
                      </div>
                    </div>
                    <div className="relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[14px] text-nowrap whitespace-pre">
                          {completedSubjects} / {totalSubjects} sujets
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(3,2,19,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip py-0 relative rounded-[3.35544e+07px] shrink-0 w-full">
                    <div 
                      className="bg-[#008e5c] h-[8px] shrink-0 transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Questions */}
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  
                  {/* Subject badge */}
                  <div className="bg-gray-100 box-border content-stretch flex gap-[10px] h-[28px] items-center justify-center p-[10px] relative rounded-[60px] shrink-0">
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[13px] md:text-[14px] text-nowrap whitespace-pre">
                      {currentSubject.title}
                    </p>
                  </div>

                  {/* Main question */}
                  <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                      <p className="font-['Arial:Regular',sans-serif] leading-[1.4] md:leading-[1.5] not-italic relative text-[#323232] text-[18px] md:text-[24px] w-full">
                        {currentSubject.mainQuestion}
                      </p>
                    </div>
                  </div>

                  {/* Questions with scales */}
                  <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] items-center md:items-end relative shrink-0 w-full">
                    <ScaleQuestion
                      question={currentSubject.importanceQuestion}
                      value={currentAnswers.importance}
                      onChange={handleImportanceChange}
                      leftLabel="Très important"
                      rightLabel={"Très peu\nimportant"}
                      leftColor="97, 118, 255"
                      rightColor="207, 128, 0"
                    />

                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute inset-[-0.5px_-0.06%]">
                        <svg className="block w-full h-[1px]" fill="none" preserveAspectRatio="none" viewBox="0 0 847 1">
                          <path d="M846.5 0.5H0.5" stroke="#EEEEEE" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <ScaleQuestion
                      question={currentSubject.satisfactionQuestion}
                      value={currentAnswers.satisfaction}
                      onChange={handleSatisfactionChange}
                      leftLabel="Très satisfait"
                      rightLabel={"Très peu\nsatisfait"}
                      leftColor="97, 118, 255"
                      rightColor="207, 128, 0"
                    />

                    {/* Navigation buttons */}
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                      {/* Desktop: Button avec texte "Retour" */}
                      {currentSubjectIndex > 0 && (
                        <button
                          onClick={handleBack}
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
                      )}
                      
                      {currentSubjectIndex === 0 && (
                        <div className="hidden md:block" />
                      )}

                      {/* Mobile: Boutons côte à côte */}
                      <div className="flex md:hidden items-center gap-3 w-full">
                        {currentSubjectIndex > 0 && (
                          <button
                            onClick={handleBack}
                            className="bg-gray-100 relative rounded-[71px] size-[40px] hover:bg-gray-200 active:bg-gray-300 transition-colors flex items-center justify-center shrink-0"
                          >
                            <div className="h-[22px] relative shrink-0 w-[23px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                                <path d={svgPaths.pa1d5600} fill="#323232" />
                              </svg>
                            </div>
                          </button>
                        )}

                        <button
                          onClick={isLastSubject ? handleValidate : handleNext}
                          disabled={!canProceed}
                          className={`box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center pl-[24px] pr-[20px] py-0 relative rounded-[71px] flex-1 transition-colors ${
                            canProceed 
                              ? 'bg-[#008e5c] hover:bg-[#007a4f] active:bg-[#006a42] cursor-pointer' 
                              : 'bg-gray-300 cursor-not-allowed'
                          }`}
                        >
                          <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                            {isLastSubject ? 'Valider' : 'Suivant'}
                          </p>
                          {!isLastSubject && (
                            <div className="flex items-center justify-center relative shrink-0">
                              <div className="flex-none rotate-[180deg]">
                                <div className="h-[22px] relative w-[23px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                                    <path d={svgPaths.pa1d5600} fill="white" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}
                        </button>
                      </div>

                      {/* Desktop: Bouton Suivant/Valider */}
                      <button
                        onClick={isLastSubject ? handleValidate : handleNext}
                        disabled={!canProceed}
                        className={`hidden md:flex box-border content-stretch gap-[8px] h-[40px] items-center justify-center pl-[24px] pr-[20px] py-0 relative rounded-[71px] shrink-0 transition-colors ${
                          canProceed 
                            ? 'bg-[#008e5c] hover:bg-[#007a4f] cursor-pointer' 
                            : 'bg-gray-300 cursor-not-allowed'
                        }`}
                      >
                        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                          {isLastSubject ? 'Valider' : 'Suivant'}
                        </p>
                        {!isLastSubject && (
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="flex-none rotate-[180deg]">
                              <div className="h-[22px] relative w-[23px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                                  <path d={svgPaths.pa1d5600} fill="white" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}