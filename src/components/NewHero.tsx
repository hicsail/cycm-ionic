import { IonButton } from '@ionic/react'
import React from 'react'

export default function NewHero() {
  return (
    <div className="flex justify-center items-center bg-[url('/union.svg')] bg-cover h-screen">
      <div className="text-center p-4">
        <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
          EMPOWERING TEENS <br /> WITH MENTAL HEALTH RESOURCES
        </h1>
        <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-tight mb-8">
          DISCOVER A WEALTH OF ARTICLES, TOOLS, AND SUPPORT <br /> FOR TEENAGE MENTAL HEALTH.
        </p>
        <div className="flex justify-center space-x-2">
          <img src="pic1-home.png" className="w-1/3 h-auto" alt="Rectangle" />
          <img src="pic2.png" className="w-1/3 h-auto" alt="Rectangle" />
          <img src="pic3.png" className="w-1/3 h-auto" alt="Rectangle" />
        </div>
      </div>
    </div>
  )
}
