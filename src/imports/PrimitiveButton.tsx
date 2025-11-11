import svgPaths from "./svg-xvdp7kdx0k";

export default function PrimitiveButton() {
  return (
    <div className="relative size-full" data-name="Primitive.button">
      <div className="absolute inset-[-1.67%_-3.33%_-5%_-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g filter="url(#filter0_d_3_408)" id="Primitive.button">
            <mask fill="white" id="path-1-inside-1_3_408">
              <path d={svgPaths.p3cc7fb00} />
            </mask>
            <path d={svgPaths.p3cc7fb00} fill="var(--fill-0, #D1D5DC)" shapeRendering="crispEdges" />
            <path d={svgPaths.p5842700} fill="var(--stroke-0, #D1D5DC)" mask="url(#path-1-inside-1_3_408)" />
            <path d={svgPaths.p32aed2c8} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_3_408" width="32" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.5" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_408" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_408" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}