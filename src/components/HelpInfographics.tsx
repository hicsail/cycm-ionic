import React from 'react'
import BlueGraphic from './BlueGraphic'
import CenterDescriptionCards from './CenterDescriptionCards'
import HomeCloud from './HomeCloud'
import PinkGraphic from './PinkGraphic'
import RedGraphic from './RedGraphic'

export default function HelpInfographics() {
  return (
    <div className="flex flex-col items-center space-y-8 mb-[118px]">
      <div className="w-full max-w-4xl mx-auto my-44">
        <HomeCloud />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto" style={{
        marginBottom: '144px'
      }}>
        <RedGraphic />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto my-24" style={{
        marginBottom: '144px'
      }}>
        <PinkGraphic />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto my-24" style={{
        marginBottom: '144px'
      }}>
        <BlueGraphic />
      </div>
    </div>
  )
}
