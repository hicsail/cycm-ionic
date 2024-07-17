import React from "react";

export default function PaddedHeaderText() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen px-12 md:px-0">
        <div className="p-4 max-w-4xl w-full">
          <h1 className="margin-left: 0 text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4 text-center margin-left: 0">
            Supporting Teen Mental Health
          </h1>
          <br />
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            The Center for Young Colorful Minds at Boston Medical Center grew
            from a generous donation to provide mental health support for girls
            of color in Boston. Guided by this mission, CYCM expanded to support
            mental health and outreach efforts for youth inclusive of all
            backgrounds and experiences.
          </p>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            We are a team comprised of licensed clinicians, public health
            experts, and community youth. Harnessing our various areas of
            expertise, we design engaging content and programs to help teens and
            young adults navigate common mental health struggles.
          </p>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            We're not just here to share information; we're here to build
            meaningful connections. We center youth engagement and feedback when
            designing our content to make effective and accurate content without
            sounding like a textbook or a pamphlet. By partnering with existing
            community programs, we're turning up the volume on accurate mental
            health info, ensuring it reaches every corner of our vibrant
            communities.
          </p>
        </div>
      </div>
    </div>
  );
}
