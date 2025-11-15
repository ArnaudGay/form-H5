import React from 'react';

interface IntroPageProps {
  onStart: () => void;
}

export function IntroPage({ onStart }: IntroPageProps) {
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
                    Bienvenue dans cette étude
                  </p>
                </div>
                <div className="relative shrink-0">
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] md:leading-[24px] not-italic text-[#717182] text-[14px] md:text-[16px]">
                    7 minutes pour nous aider à mieux vous accompagner sur le sujet du deuil
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start px-[12px] md:px-[24px] py-0 relative">
                <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                  Nous sommes étudiants en Master 2 et menons une recherche sur les besoins des personnes qui souhaitent préparer leur succession et organiser leurs dernières volontés.<br /> Ce questionnaire est la première étape d'un projet visant à développer une solution concrète.
                </p>
                
                <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                  Nous avons tous connu, de près ou de loin, le moment difficile où nous perdons un proche. Ces instants d'une grande vulnérabilité nous affectent chacun différemment.<br /> C'est de ce constat qu'est née notre démarche : trouver les moyens d'accompagner les gens dans ces moments complexes.
                </p>
                
                <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                  À travers ce questionnaire, nous vous invitons à évaluer l'importance de différents aspects liés à l'après-décès — l'annonce, les formalités administratives, la gestion du patrimoine, la succession, les animaux, etc. — ainsi que votre satisfaction vis-à-vis de l'accompagnement actuellement disponible.<br /> Vos réponses nous guideront pour identifier les priorités sur lesquelles agir.
                </p>
                
                <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                  Aborder ce sujet n'est jamais facile, mais cette démarche permet d'anticiper sereinement les aspects administratifs, légaux et personnels qui vous tiennent à cœur.<br /> Merci sincèrement de votre confiance et du temps que vous nous accordez.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start justify-start px-[12px] md:px-[24px] py-0 relative">
                <button
                  onClick={onStart}
                  className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center pl-[24px] pr-[20px] py-0 relative rounded-[71px] shrink-0 bg-[#008e5c] hover:bg-[#007a4f] active:bg-[#006a42] cursor-pointer transition-colors"
                >
                  <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                    Commencer
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
