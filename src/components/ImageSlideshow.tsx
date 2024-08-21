import React, { useEffect, useState } from 'react';

const slides = ["cycm.png", "cycm-empower.png", "pic1.png"];

const ImageSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, [slides.length]);

    return (
        <div className="w-full relative text-center mt-20 md:-mb-32 overflow-hidden">
          <img src={slides[currentSlide]} alt="Image Slideshow" className="object-cover w-full h-96 md:h-[32rem] lg:h-[40rem] xl:h-[44rem] 2xl:h-[48rem] overflow-hidden brightness-50" />
          <div className="absolute z-10 top-1/2 left-1/2" style={{transform: "translate(-50%, -50%)"}}>
            <div className="text-2xl md:text-5xl lg:text-6xl font-bold text-white">EMPOWERING TEENS WITH MENTAL HEALTH RESOURCES</div>
            <div className="text-sm lg:text-xl text-white font-bold">DISCOVER A WEALTH OF ARTICLES, TOOLS, AND SUPPORT FOR TEENAGE MENTAL HEALTH.</div>
          </div>
        </div>
    )
}

export default ImageSlideshow;