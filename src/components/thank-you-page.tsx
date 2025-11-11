import React from 'react';
import imgImage2 from "figma:asset/d624002040288554f13e2fff51f86d02f8e57526.png";

export function ThankYouPage() {
  return (
    <div className="bg-white relative rounded-[14px] w-full max-w-[940px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[21px] py-[51px] relative size-full">
          <div className="h-[360px] relative shrink-0 w-[539px]">
            <img 
              alt="Merci" 
              className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgImage2} 
            />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[360px] w-[539px]" />
          </div>
          <div className="relative shrink-0 w-[846px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start relative w-[846px]">
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                <p className="font-['Arial:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323232] text-[24px] text-center w-[551px]">
                  Cela nous sera d'une grande utilité pour envisager une solution pour cette période difficile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
