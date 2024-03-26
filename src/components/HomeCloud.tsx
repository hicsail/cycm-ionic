import React from 'react'
import './Cloud.css';
// .cloud {
//   height: 464px;
//   width: 1436px;
// }

// .cloud .overlap-group {
//   height: 464px;
//   position: relative;
// }

// .cloud .vector {
//   height: 389px;
//   left: 76px;
//   position: absolute;
//   top: 61px;
//   width: 1284px;
// }

// .cloud .teens-need-header {
//   height: 464px;
//   left: 0;
//   position: absolute;
//   top: 0;
//   width: 1436px;
// }

// .cloud .teens-need-mental {
//   color: #101066;
//   font-family: "Montserrat-Bold", Helvetica;
//   font-size: 64px;
//   font-weight: 700;
//   left: 146px;
//   letter-spacing: 0.84px;
//   line-height: 69.1px;
//   position: absolute;
//   text-align: center;
//   top: 180px;
//   width: 1144px;
// }

// .cloud .img {
//   height: 72px;
//   left: 801px;
//   position: absolute;
//   top: 266px;
//   width: 79px;
// }

// .cloud .vector-2 {
//   height: 88px;
//   left: 939px;
//   position: absolute;
//   top: 162px;
//   width: 91px;
// }

// .cloud .vector-3 {
//   height: 85px;
//   left: 397px;
//   position: absolute;
//   top: 153px;
//   width: 84px;
// }

// get styles in variables
const cloud = {
  height: 464,
  width: 1436,
}

const overlapGroup = {
  height: 464,
  position: 'relative',
}

const vector = {
  height: 389,
  left: 76,
  position: 'absolute',
  top: 61,
  width: 1284,
}

const teensNeedHeader = {
  height: 464,
  left: 0,
  position: 'absolute',
  top: 0,
  width: 1436,
}

const teensNeedMental = {
  color: '#101066',
  fontFamily: 'Montserrat-Bold, Helvetica',
  fontSize: 64,
  fontWeight: 700,
  left: 146,
  letterSpacing: 0.84,
  lineHeight: 69.1,
  position: 'absolute',
  textAlign: 'center',
  top: 180,
  width: 1144,
}

const img = {
  height: 72,
  left: 801,
  position: 'absolute',
  top: 266,
  width: 79,
}

const vector2 = {
  height: 88,
  left: 939,
  position: 'absolute',
  top: 162,
  width: 91,
}

const vector3 = {
  height: 85,
  left: 397,
  position: 'absolute',
  top: 153,
  width: 84,
}

export default function HomeCloud() {
  return (
    <div className="relative mx-auto w-full max-w-[1436px] px-4 sm:px-6 lg:px-8">
      <div className="relative h-auto">
        <img className=" h-auto max-h-[389px] left-[5%] top-[5%] w-full max-w-[1284px]" alt="Vector" src="/cloud.svg" />
      </div>
    </div>
  )
}








