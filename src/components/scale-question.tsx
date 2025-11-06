import React from 'react';
import svgPaths from '../imports/svg-6r39tdbsgm';
import svgPathsGray from '../imports/svg-xvdp7kdx0k';

interface ScaleQuestionProps {
  question: string;
  value: string | null;
  onChange: (value: string) => void;
  leftLabel: string;
  rightLabel: string;
  leftColor: string;
  rightColor: string;
}

export function ScaleQuestion({ 
  question, 
  value, 
  onChange, 
  leftLabel, 
  rightLabel, 
  leftColor, 
  rightColor 
}: ScaleQuestionProps) {
  const scales = ['1', '2', '3', '4', '5', '6', '7'];
  
  const getButtonStyle = (index: number) => {
    const sizes = [60, 50, 40, 30, 40, 50, 60];
    const size = sizes[index];
    
    if (index < 3) {
      return {
        size,
        border: `rgba(${leftColor}, 0.5)`,
        fill: leftColor,
        isLeftSide: true
      };
    } else if (index > 3) {
      return {
        size,
        border: `rgba(${rightColor}, 0.5)`,
        fill: rightColor,
        isLeftSide: false
      };
    } else {
      return {
        size,
        border: '#d1d5dc',
        fill: '#d1d5dc',
        isLeftSide: null
      };
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[24px] items-start relative shrink-0 w-full max-w-[846px]">
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative text-[#323232] text-[14px] md:text-[16px] w-full">
          {question}
        </p>
      </div>
      
      <div className="relative shrink-0 w-full">
        {/* Desktop layout */}
        <div className="hidden md:flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between pl-0 pr-[0.016px] py-0 relative w-full">
            <div className="relative shrink-0" style={{ width: leftLabel.includes('\n') ? '80px' : 'auto' }}>
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                <div 
                  className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px]"
                  style={{ 
                    color: `rgb(${leftColor})`,
                    whiteSpace: leftLabel.includes('\n') ? 'normal' : 'nowrap'
                  }}
                  dangerouslySetInnerHTML={{ __html: leftLabel.replace(/\n/g, '<br/>') }}
                />
              </div>
            </div>
            
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[47px] items-center relative">
                {scales.map((scale, index) => {
                  const style = getButtonStyle(index);
                  const isSelected = value === scale;
                  
                  return (
                    <button
                      key={scale}
                      onClick={() => onChange(scale)}
                      className="relative shrink-0 cursor-pointer transition-all hover:opacity-80"
                      style={{ width: `${style.size}px`, height: `${style.size}px` }}
                    >
                      {isSelected ? (
                        style.isLeftSide === null ? (
                          // Bouton gris (milieu) sélectionné
                          <div className="absolute inset-[-1.67%_-3.33%_-5%_-3.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <g filter={`url(#filter_gray_${scale})`}>
                                <mask fill="white" id={`path-1-inside-1_${scale}`}>
                                  <path d={svgPathsGray.p3cc7fb00} />
                                </mask>
                                <path d={svgPathsGray.p3cc7fb00} fill="#D1D5DC" shapeRendering="crispEdges" />
                                <path d={svgPathsGray.p5842700} fill="#D1D5DC" mask={`url(#path-1-inside-1_${scale})`} />
                                <path d={svgPathsGray.p32aed2c8} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </g>
                              <defs>
                                <filter 
                                  colorInterpolationFilters="sRGB" 
                                  filterUnits="userSpaceOnUse" 
                                  height="32" 
                                  id={`filter_gray_${scale}`} 
                                  width="32" 
                                  x="0" 
                                  y="0"
                                >
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="0.5" />
                                  <feGaussianBlur stdDeviation="0.5" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        ) : (
                          // Boutons colorés (gauche/droite) sélectionnés
                          <div className="absolute inset-[-1.67%_-3.33%_-5%_-3.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                              <g filter={`url(#filter_${scale})`}>
                                <path 
                                  d={svgPaths.p38825d00} 
                                  fill={`rgb(${style.fill})`} 
                                  shapeRendering="crispEdges" 
                                />
                                <path 
                                  d={svgPaths.pb33f900} 
                                  shapeRendering="crispEdges" 
                                  stroke={`rgb(${style.fill})`} 
                                  strokeWidth="2" 
                                />
                                <path 
                                  d={style.isLeftSide ? svgPaths.p1fe52180 : svgPaths.p183a8000} 
                                  stroke="white" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={style.isLeftSide ? "3" : "4"} 
                                />
                              </g>
                              <defs>
                                <filter 
                                  colorInterpolationFilters="sRGB" 
                                  filterUnits="userSpaceOnUse" 
                                  height="64" 
                                  id={`filter_${scale}`} 
                                  width="64" 
                                  x="0" 
                                  y="0"
                                >
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="1" />
                                  <feGaussianBlur stdDeviation="1" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        )
                      ) : (
                        <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] size-full">
                          <div 
                            aria-hidden="true" 
                            className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                            style={{ borderColor: style.border }}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="relative shrink-0" style={{ width: rightLabel.includes('\n') ? '80px' : 'auto' }}>
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative">
                <div 
                  className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-right"
                  style={{ 
                    color: `rgb(${rightColor})`,
                    whiteSpace: rightLabel.includes('\n') ? 'normal' : 'nowrap'
                  }}
                  dangerouslySetInnerHTML={{ __html: rightLabel.replace(/\n/g, '<br/>') }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col gap-3 w-full">
          {/* Radio buttons */}
          <div className="flex gap-3 items-center justify-center px-2">
            {scales.map((scale, index) => {
              const style = getButtonStyle(index);
              const sizes = [45, 38, 32, 26, 32, 38, 45]; // Tailles réduites pour mobile
              const mobileSize = sizes[index];
              const isSelected = value === scale;
              
              return (
                <button
                  key={scale}
                  onClick={() => onChange(scale)}
                  className="relative shrink-0 cursor-pointer transition-all active:opacity-60"
                  style={{ width: `${mobileSize}px`, height: `${mobileSize}px` }}
                >
                  {isSelected ? (
                    style.isLeftSide === null ? (
                      // Bouton gris (milieu) sélectionné
                      <div className="absolute inset-[-1.67%_-3.33%_-5%_-3.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <g filter={`url(#filter_gray_mobile_${scale})`}>
                            <mask fill="white" id={`path-1-inside-1-mobile_${scale}`}>
                              <path d={svgPathsGray.p3cc7fb00} />
                            </mask>
                            <path d={svgPathsGray.p3cc7fb00} fill="#D1D5DC" shapeRendering="crispEdges" />
                            <path d={svgPathsGray.p5842700} fill="#D1D5DC" mask={`url(#path-1-inside-1-mobile_${scale})`} />
                            <path d={svgPathsGray.p32aed2c8} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                          <defs>
                            <filter 
                              colorInterpolationFilters="sRGB" 
                              filterUnits="userSpaceOnUse" 
                              height="32" 
                              id={`filter_gray_mobile_${scale}`} 
                              width="32" 
                              x="0" 
                              y="0"
                            >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="0.5" />
                              <feGaussianBlur stdDeviation="0.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    ) : (
                      // Boutons colorés (gauche/droite) sélectionnés
                      <div className="absolute inset-[-1.67%_-3.33%_-5%_-3.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                          <g filter={`url(#filter_mobile_${scale})`}>
                            <path 
                              d={svgPaths.p38825d00} 
                              fill={`rgb(${style.fill})`} 
                              shapeRendering="crispEdges" 
                            />
                            <path 
                              d={svgPaths.pb33f900} 
                              shapeRendering="crispEdges" 
                              stroke={`rgb(${style.fill})`} 
                              strokeWidth="2" 
                            />
                            <path 
                              d={style.isLeftSide ? svgPaths.p1fe52180 : svgPaths.p183a8000} 
                              stroke="white" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={style.isLeftSide ? "3" : "4"} 
                            />
                          </g>
                          <defs>
                            <filter 
                              colorInterpolationFilters="sRGB" 
                              filterUnits="userSpaceOnUse" 
                              height="64" 
                              id={`filter_mobile_${scale}`} 
                              width="64" 
                              x="0" 
                              y="0"
                            >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="1" />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    )
                  ) : (
                    <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.35544e+07px] size-full">
                      <div 
                        aria-hidden="true" 
                        className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                        style={{ borderColor: style.border }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Labels below buttons - left and right */}
          <div className="flex items-start justify-between w-full px-2 gap-4">
            {/* Left label */}
            <div className="flex-1 text-left">
              <div 
                className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic text-[12px]"
                style={{ color: `rgb(${leftColor})` }}
                dangerouslySetInnerHTML={{ __html: leftLabel.replace(/\n/g, '<br/>') }}
              />
            </div>
            
            {/* Right label */}
            <div className="flex-1 text-right">
              <div 
                className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic text-[12px]"
                style={{ color: `rgb(${rightColor})` }}
                dangerouslySetInnerHTML={{ __html: rightLabel.replace(/\n/g, '<br/>') }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
