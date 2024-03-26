import React from 'react'

export default function
  () {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center">
      <img src="/blue-info.svg" className="w-1/2 md:w-auto mb-4 md:mb-0" />
      <div className="w-full md:w-[523px]">
        <div className="text-[#101066] font-semibold text-center md:text-left">
          <div className="text-2xl md:text-[100px] leading-tight md:leading-[151.0px] tracking-tighter md:tracking-[-10.00px] mb-2 md:mb-0">
            4 in 10
          </div>
          <p className="text-sm md:text-[22px] tracking-tight md:tracking-[0.84px] leading-tight md:leading-[28.6px]">
            high school students felt <br className="hidden md:inline" /> persistently sad or hopeless
          </p>
        </div>
      </div>
    </div>
  )
}
