import svgPaths from "./svg-0m84oy7s5q";

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

export default function Button() {
  return (
    <div className="bg-gray-100 relative rounded-[71px] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-0 relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}