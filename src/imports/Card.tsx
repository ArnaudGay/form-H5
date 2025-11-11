import svgPaths from "./svg-6r39tdbsgm";

function CardTitle() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">L’étude sur le deuil plus justement accompagné</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="[grid-area:2_/_1] relative shrink-0" data-name="CardDescription">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] text-nowrap top-[-2px] whitespace-pre">Nous voulons savoir ce que vous en pensez. Votre avis compte beaucoup pour nous.</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[70px] relative shrink-0 w-[894px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[16px_minmax(0px,_1fr)] h-[70px] pb-0 pt-[24px] px-[24px] relative w-[894px]">
        <CardTitle />
        <CardDescription />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[72.75px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[14px] text-nowrap whitespace-pre">Progression</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[14px] text-nowrap whitespace-pre">0 / 15 sujets</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container1() {
  return <div className="bg-[#030213] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="bg-[rgba(3,2,19,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip pr-[846px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container1 />
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-[846px]" data-name="App">
      <Container />
      <PrimitiveDiv />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex gap-[10px] h-[28px] items-center justify-center p-[10px] relative rounded-[60px] shrink-0 w-[112px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[14px] text-nowrap whitespace-pre">Sujet n°1</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#323232] text-[24px] w-[846px]">Je veux faire en sorte que mes proches n’aient pas à gérer seuls de nombreuses démarches compliquées ou imprévues après mon décès.</p>
    </div>
  );
}

function QuestionScale() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[846px]" data-name="QuestionScale">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#323232] text-[16px] w-[846px]">{`Quelle est l'importance de ce besoin pour vous ?`}</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[80px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6176ff] text-[14px] w-[79px]">Très important</p>
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Primitive.button">
      <div className="absolute inset-[-1.67%_-3.33%_-5%_-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <g filter="url(#filter0_d_3_373)" id="Primitive.button">
            <path d={svgPaths.p38825d00} fill="var(--fill-0, #6176FF)" shapeRendering="crispEdges" />
            <path d={svgPaths.pb33f900} shapeRendering="crispEdges" stroke="var(--stroke-0, #6176FF)" strokeWidth="2" />
            <path d={svgPaths.p1fe52180} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="filter0_d_3_373" width="64" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_373" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_373" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[50px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(97,118,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(97,118,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[30px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(207,128,0,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[50px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(207,128,0,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[60px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(207,128,0,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[47px] items-center relative">
        <PrimitiveButton />
        <PrimitiveButton1 />
        <PrimitiveButton2 />
        <PrimitiveButton3 />
        <PrimitiveButton4 />
        <PrimitiveButton5 />
        <PrimitiveButton6 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-[80px]">
        <div className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#cf8000] text-[14px] text-nowrap text-right whitespace-pre">
          <p className="mb-0">Très peu</p>
          <p>{` important`}</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[0.016px] py-0 relative w-full">
          <Text2 />
          <Frame1 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function QuestionScale1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[132px] items-start relative shrink-0 w-[846px]" data-name="QuestionScale">
      <Paragraph1 />
      <Container2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#323232] text-[16px] w-[846px]">Quel est votre niveau de satisfaction actuel ?</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[54.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[54.422px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6176ff] text-[14px] text-nowrap whitespace-pre">Très satisfait</p>
      </div>
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="relative rounded-[3.35544e+07px] shrink-0 size-[60px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(97,118,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[50px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(97,118,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(97,118,255,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[30px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(207,128,0,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton12() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] shrink-0 size-[50px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(207,128,0,0.5)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PrimitiveButton13() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Primitive.button">
      <div className="absolute inset-[-1.67%_-3.33%_-5%_-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <g filter="url(#filter0_d_3_382)" id="Primitive.button">
            <mask fill="white" id="path-1-inside-1_3_382">
              <path d={svgPaths.p38825d00} />
            </mask>
            <path d={svgPaths.p38825d00} fill="var(--fill-0, #CF8000)" shapeRendering="crispEdges" />
            <path d={svgPaths.pf7fb900} fill="var(--stroke-0, #CF8000)" fillOpacity="0.5" mask="url(#path-1-inside-1_3_382)" />
            <path d={svgPaths.p183a8000} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="filter0_d_3_382" width="64" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_382" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_382" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[47px] items-center relative">
        <PrimitiveButton7 />
        <PrimitiveButton8 />
        <PrimitiveButton9 />
        <PrimitiveButton10 />
        <PrimitiveButton11 />
        <PrimitiveButton12 />
        <PrimitiveButton13 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative">
        <div className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#cf8000] text-[14px] text-center text-nowrap whitespace-pre">
          <p className="mb-0">{`Très peu `}</p>
          <p>satisfait</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[0.016px] py-0 relative w-full">
          <Text4 />
          <Frame3 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function QuestionScale2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[132px] items-start relative shrink-0 w-[846px]" data-name="QuestionScale">
      <Paragraph2 />
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[22px] relative shrink-0 w-[23px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
        <g id="Frame">
          <path d={svgPaths.pa1d5600} fill="var(--fill-0, #323232)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[24px] py-0 relative rounded-[71px] shrink-0" data-name="Button">
      <Frame />
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#323232] text-[14px] text-nowrap whitespace-pre">Retour</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[22px] relative w-[23px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
        <g id="Frame">
          <path d={svgPaths.pa1d5600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#008e5c] box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center pl-[24px] pr-[20px] py-0 relative rounded-[71px] shrink-0" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Suivant</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0">
      <QuestionScale1 />
      <div className="h-0 relative shrink-0 w-[846px]">
        <div className="absolute inset-[-0.5px_-0.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 847 1">
            <path d="M846.5 0.5H0.5" id="Vector 2" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <QuestionScale2 />
      <Frame4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame5 />
      <QuestionScale />
      <Frame2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-0 relative">
        <App />
        <Container4 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[21px] py-[25px] relative size-full">
          <CardHeader />
          <CardContent />
        </div>
      </div>
    </div>
  );
}