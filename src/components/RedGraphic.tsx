import React from 'react'

export default function RedGraphic() {
  return (
    <div className="w-full flex flex-col items-center md:flex-row md:justify-around">
    <img src="/pie-graphic.svg" className="w-1/4 md:w-auto mb-4 md:mb-0" />
    <div className="w-full md:w-[517px]">
      <div className="text-[#101066] font-semibold text-left">
        <div className="text-2xl md:text-[100px] leading-tight md:leading-[151.0px] tracking-tighter md:tracking-[-10.00px] mb-2 md:mb-0">
          1 / 3
        </div>
        <p className="text-sm md:text-[22px] tracking-tight md:tracking-[0.84px] leading-tight md:leading-[28.6px]">
          of higher schoolers have <br className="hidden md:inline" /> experienced poor mental health
        </p>
      </div>
    </div>
  </div>
  )
}
