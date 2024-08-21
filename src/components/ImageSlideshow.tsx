const ImageSlideshow = () => {
    return (
        <div className="w-full relative text-center mt-20 md:-mb-32">
          <img src='cycm.png' alt="Image Slideshow" className="object-cover w-full brightness-75 max-h-[48rem]" />
          <div className="absolute z-10 top-1/2 left-1/2" style={{transform: "translate(-50%, -50%)"}}>
            <div className="text-2xl md:text-5xl lg:text-6xl font-bold text-white">EMPOWERING TEENS WITH MENTAL HEALTH RESOURCES</div>
            <div className="text-sm lg:text-xl text-white font-bold">DISCOVER A WEALTH OF ARTICLES, TOOLS, AND SUPPORT FOR TEENAGE MENTAL HEALTH.</div>
          </div>
        </div>
    )
}

export default ImageSlideshow;