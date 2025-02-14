import React from "react"

const BackgroundSVG: React.FC = () => {
  return (
    <svg
      className="fixed blur-3xl opacity-50 left-10"
      height="100vh"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      fill="rgba(79,169,226, 0.5)"
      stroke="rgba(30, 64, 175, 1)"
      strokeWidth="2"
    >
      <path d="
        M50,100 C30,50 120,10 200,20 
        C280,30 370,90 380,160 
        C390,230 300,350 200,370 
        C100,390 20,310 30,200 
        C40,150 70,120 50,100
      " fill="rgba(59, 130, 246, 0.5)">
        <animate 
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
            M50,100 C30,50 120,10 200,20 
            C280,30 370,90 380,160 
            C390,230 300,350 200,370 
            C100,390 20,310 30,200 
            C40,150 70,120 50,100;

            M60,120 C40,70 130,30 210,40 
            C290,50 360,110 370,170 
            C380,240 310,330 210,350 
            C110,370 30,300 40,190 
            C50,140 80,110 60,120;

            M50,100 C30,50 120,10 200,20 
            C280,30 370,90 380,160 
            C390,230 300,350 200,370 
            C100,390 20,310 30,200 
            C40,150 70,120 50,100"
        />
      </path>
    </svg>
  )
}

export default BackgroundSVG;