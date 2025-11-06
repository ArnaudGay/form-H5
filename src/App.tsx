import React, { useState } from 'react';
import svgPaths from './imports/svg-6r39tdbsgm';
import { ScaleQuestion } from './components/scale-question';
import { ThankYouPage } from './components/thank-you-page';

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

const subjects: Subject[] = [
  {
    id: 1,
    title: "Sujet n°1",
    mainQuestion: "Je veux faire en sorte que mes proches n'aient pas à gérer seuls de nombreuses démarches compliquées ou imprévues après mon décès.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 2,
    title: "Sujet n°2",
    mainQuestion: "Je veux que mes proches sachent où trouver mes dernières volontés sans stress ni confusion.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 3,
    title: "Sujet n°3",
    mainQuestion: "Je veux pouvoir réfléchir et préparer ma mort sans ressentir de gêne, de peur ou de tabou.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 4,
    title: "Sujet n°4",
    mainQuestion: "Je veux être sûr que mes volontés seront respectées par les institutions et mes proches.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 5,
    title: "Sujet n°5",
    mainQuestion: "Je veux anticiper les décisions médicales de fin de vie avant de ne plus pouvoir les exprimer.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 6,
    title: "Sujet n°6",
    mainQuestion: "Je veux que mes proches disposent d'un guide clair leur indiquant toutes les démarches à effectuer après mon décès.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 7,
    title: "Sujet n°7",
    mainQuestion: "Je veux pouvoir facilement organiser et laisser à mes proches tout ce qui leur sera utile après mon décès.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 8,
    title: "Sujet n°8",
    mainQuestion: "Je veux disposer d'un espace unique où rassembler tous mes documents importants liés à ma fin de vie.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 9,
    title: "Sujet n°9",
    mainQuestion: "Je veux que toute ma démarche d'anticipation soit claire, simple et sécurisée.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 10,
    title: "Sujet n°10",
    mainQuestion: "Je veux que mes données numériques soient gérées et transmises selon mes choix.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 11,
    title: "Sujet n°11",
    mainQuestion: "Je veux me sentir apaisé en sachant que rien d'essentiel n'a été oublié dans ma préparation.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 12,
    title: "Sujet n°12",
    mainQuestion: "Je veux éviter à mes proches tout conflit possible après mon décès.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 13,
    title: "Sujet n°13",
    mainQuestion: "Je veux accéder facilement à des informations simples et concrètes sur ce que je dois préparer avant ma mort.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 14,
    title: "Sujet n°14",
    mainQuestion: "Je veux comprendre les coûts réels liés à la mort pour mieux les prévoir.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 15,
    title: "Sujet n°15",
    mainQuestion: "Je veux rédiger mon testament ou exprimer mes volontés sans rencontrer d'obstacles administratifs ou financiers.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 16,
    title: "Sujet n°16",
    mainQuestion: "Je veux pouvoir planifier sereinement mes aspects financiers liés au décès.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  },
  {
    id: 17,
    title: "Sujet n°17",
    mainQuestion: "Je veux comprendre clairement les implications légales de mes choix de fin de vie.",
    importanceQuestion: "Quelle est l'importance de ce besoin pour vous ?",
    satisfactionQuestion: "Quel est votre niveau de satisfaction actuel ?"
  }
];

export default function App() {
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

  const handleValidate = () => {
    setIsCompleted(true);
  };

  const handleBack = () => {
    if (currentSubjectIndex > 0) {
      setCurrentSubjectIndex(prev => prev - 1);
    }
  };

  const currentAnswers = answers[currentSubject.id] || { importance: null, satisfaction: null };
  const isLastSubject = currentSubjectIndex === subjects.length - 1;
  const canProceed = currentAnswers.importance !== null && currentAnswers.satisfaction !== null;

  // Afficher la page de remerciement si complété
  if (isCompleted) {
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
