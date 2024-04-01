import React from "react";

export default function MobileGraphic() {
  return (
    <div>
      <div className="w-[564px] h-[1097px]">
        <div className="fixed w-[566px] h-[1097px] top-0 left-0">
          <div className="relative w-[564px] h-[1097px] rounded-[30px]">
            <p className="absolute w-[502px] top-[242px] left-[54px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[200px] tracking-[0.84px] leading-[200px]">
              <span className="tracking-[1.68px] leading-[186.0px]">
                18 <br />
              </span>
              <span className="text-[109px] tracking-[0.92px] leading-[101.4px]">
                BILLION
                <br />
              </span>
              <span className="text-[48px] tracking-[0.40px] leading-[62.4px]">
                views have been garnered by #mentalhealth <br />
                on TikTok.
                <br />
              </span>
              <span className="text-[22px] tracking-[0.18px] leading-[28.6px]">
                {"  "}
              </span>
            </p>
            <div className="absolute w-[564px] h-[1097px] top-0 left-0 rounded-[30px] border-[17px] border-solid border-white" />
            <div className="absolute w-[224px] h-[51px] top-[4px] left-[170px] bg-white rounded-[9px]" />
            <img
              className="absolute w-[536px] h-[132px] top-[956px] left-[15px]"
              alt="Subtract"
              src="subtract.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
