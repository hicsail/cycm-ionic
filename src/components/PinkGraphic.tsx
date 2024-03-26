import React from 'react'

export default function PinkGraphic() {
  return (
    <div className="w-full flex flex-col  md:flex-row md:justify-around justify-between">
      <img src="/purple-info.svg" className="w-1/2 md:w-auto mb-4 md:mb-0" />
      <div className="w-full md:w-[517px]">
        <div className="text-[#101066] font-semibold text-center md:text-left">
          <div className="text-2xl md:text-[100px] leading-tight md:leading-[151.0px] tracking-tighter md:tracking-[-10.00px] mb-2 md:mb-0">
            1 in 5
          </div>
          <p className="text-sm md:text-[22px] tracking-tight md:tracking-[0.84px] leading-tight md:leading-[28.6px]">
            high school students seriously considered attempting suicide
          </p>
        </div>
      </div>
    </div>
  )
}
