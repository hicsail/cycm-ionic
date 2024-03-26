import React from 'react'

export default function SocialInfographics() {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center h-screen">
        <div className="flex-1 max-w-[50%] p-4">
          {/* Assuming this div contains the "18 billion" text graphic */}
          <img src="/mobile-info.svg" alt="18 Billion" className="w-full h-auto" />
        </div>
        <div className="flex flex-col flex-1 max-w-[50%] space-y-4 p-4">
          {/* Assuming these divs contain the other two graphics, adjust as necessary */}
          <div className="w-full">
            <img src="/clock.svg" alt="Graphic 1" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src="/battery.svg" alt="Graphic 2" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
