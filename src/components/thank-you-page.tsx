import React from 'react';

export function ThankYouPage() {
  return (
    <div className="bg-white relative rounded-[14px] w-full max-w-[940px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start px-[16px] md:px-[21px] py-[20px] md:py-[25px] relative size-full">
          
          {/* Header */}
          <div className="min-h-[70px] relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[6px] flex flex-col pb-0 pt-[16px] md:pt-[24px] px-[12px] md:px-[24px] relative w-full">
              <div className="relative shrink-0">
                <p className="font-['Arial:Regular',sans-serif] leading-[1.3] not-italic text-[24px] md:text-[32px] text-neutral-950">
                  Merci du fond du cœur pour votre confiance et votre temps.
                </p>
              </div>
              <div className="relative shrink-0">
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] md:leading-[24px] not-italic text-[#717182] text-[14px] md:text-[16px]">
                  L'étude sur le deuil plus justement accompagné
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start px-[12px] md:px-[24px] py-0 relative">
              <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                Votre expertise et votre perspective sont précieuses pour nous. Si vous êtes disposé, nous aimerions beaucoup vous recontacter tout au long de ce projet pour vous consulter à nouveau. Votre engagement pourrait contribuer de manière significative à la création d'une solution réellement utile.
              </p>
              
              <div className="content-stretch flex flex-col gap-[16px] md:gap-[20px] relative w-full">
                <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                  On cherche à échanger rapidement avec quelques personnes comme toi (10 min max, à distance ou sur place) pour <strong>mieux comprendre ton expérience</strong>.
                </p>
                <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                  👉 Souhaites-tu être recontacté·e pour un test utilisateur ?
                </p>
              </div>

              {/* Calendly Link */}
              <div className="bg-[#f5f5f5] border border-gray-200 rounded-[12px] px-[20px] md:px-[24px] py-[20px] md:py-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[12px] relative">
                  <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px]">
                    Si oui, tu peux directement réserver un créneau ici :
                  </p>
                  <a 
                    href="https://calendly.com/arnaud_gay/contribution-projet-etudiant?month=2025-11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[16px] md:text-[18px] text-[#008e5c] hover:text-[#007a4f] underline break-all"
                  >
                    https://calendly.com/arnaud_gay/contribution-projet-etudiant?month=2025-11
                  </a>
                  <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[14px] md:text-[15px] text-[#717182] italic">
                    (Pas de préparation nécessaire, c'est juste une courte discussion !)
                  </p>
                </div>
              </div>

              {/* Share Section */}
              <div className="content-stretch flex flex-col gap-[16px] md:gap-[20px] relative w-full">
                <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px] w-full">
                  Tu peux aussi <strong>partager ce questionnaire</strong> à des ami·es qui vivent la même situation :
                </p>
                
                <div className="bg-[#f5f5f5] border border-gray-200 rounded-[12px] px-[20px] md:px-[24px] py-[20px] md:py-[24px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[12px] relative">
                    <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[#323232] text-[16px] md:text-[18px]">
                      🔗 <a 
                        href="https://form.arnaudgay.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[16px] md:text-[18px] text-[#008e5c] hover:text-[#007a4f] underline"
                      >
                        https://form.arnaudgay.fr
                      </a>
                    </p>
                    <p className="font-['Arial:Regular',sans-serif] leading-[1.6] md:leading-[1.7] not-italic text-[14px] md:text-[15px] text-[#717182] italic">
                      (plus on a de réponses, plus nos résultats sont fiables 🙏)
                    </p>
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