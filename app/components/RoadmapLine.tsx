"use client";

import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, animate, cubicBezier } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const RoadmapLine = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    setViewportHeight(window.innerHeight);

    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Normalisasi progress berdasarkan tinggi viewport
  const normalizedProgress = useTransform(scrollYProgress, (latest) => {
    return latest * viewportHeight; // Menyesuaikan dengan tinggi layar
  });

  // Gunakan useMotionValue agar bisa digunakan dengan useTransform
  const progress = useMotionValue(0);

  // Event listener untuk update progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    progress.set(latest);
  });

  useEffect(() => {
    progress.on("change", (val) => {
      console.log(val)
      if (val >= 0.193) {
        animate(".q1circle", { scale: 1.5 }, { duration: 0.2, ease: "easeIn" })
        animate(".q1text", { opacity: 1, y: -50 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.193) {
        animate(".q1circle", { scale: 1 }, { duration: 0.2, ease: "easeOut" })
        animate(".q1text", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }
      
      if (val >= 0.226) {
        animate(".q1smallcircle", { scale: 1.2 }, { duration: 0.2, ease: "easeIn" })
        animate(".q1deschead", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q1desc", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.226) {
        animate(".q1smallcircle", { scale: 1 }, { duration: 0.2, ease: "easeOut" })
        animate(".q1deschead", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q1desc", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.33) {
        animate(".q1smallcircle2", { scale: 1.2 }, { duration: 0.2, ease: "easeIn" })
        animate(".q1deschead2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q1desc2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.33) {
        animate(".q1smallcircle2", { scale: 1 }, { duration: 0.2, ease: "easeOut" })
        animate(".q1deschead2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q1desc2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.36) {
        animate(".q1smallcircle3", { scale: 1.2 }, { duration: 0.2, ease: "easeIn" })
        animate(".q1deschead3", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q1desc3", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.36) {
        animate(".q1smallcircle3", { scale: 1 }, { duration: 0.2, ease: "easeOut" })
        animate(".q1deschead3", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q1desc3", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.441) {
        animate(".q2circle", { scale: 1.5 }, { duration: 0.2, ease: "easeIn" })
        animate(".q2text", { opacity: 1, y: -50 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.441) {
        animate(".q2circle", { scale: 1 }, { duration: 0.2, ease: "easeOut" })
        animate(".q2text", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.459) {
        animate(".q2smallcircle", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q2deschead", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q2desc", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.459) {
        animate(".q2smallcircle", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q2deschead", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q2desc", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }
      
      if (val >= 0.5019) {
        animate(".q2smallcircle2", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q2deschead2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q2desc2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.5019) {
        animate(".q2smallcircle2", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q2deschead2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q2desc2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.5245) {
        animate(".q2smallcircle3", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q2deschead3", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q2desc3", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.5245) {
        animate(".q2smallcircle3", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q2deschead3", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q2desc3", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }
      
      if (val >= 0.5928) {
        animate(".q3smallcircle", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q3deschead", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q3desc", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.5928) {
        animate(".q3smallcircle", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q3deschead", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q3desc", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.6255) {
        animate(".q3smallcircle2", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q3deschead2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q3desc2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.6255) {
        animate(".q3smallcircle2", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q3deschead2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q3desc2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }
      
      if (val >= 0.6859) {
        animate(".q3smallcircle3", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q3deschead3", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q3desc3", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.6859) {
        animate(".q3smallcircle3", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q3deschead3", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q3desc3", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }
      
      if (val >= 0.7558) {
        animate(".q4smallcircle", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q4deschead", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q4desc", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.7558) {
        animate(".q4smallcircle", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q4deschead", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q4desc", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }
      
      if (val >= 0.7855) {
        animate(".q4smallcircle2", { scale: 1.2, fill: '#3b82f6' }, { duration: 0.2, ease: "easeIn" })
        animate(".q4deschead2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
        animate(".q4desc2", { opacity: 1, y: 0 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.7855) {
        animate(".q4smallcircle2", { scale: 1, fill: '#6b7280' }, { duration: 0.2, ease: "easeOut" })
        animate(".q4deschead2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
        animate(".q4desc2", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.5794) {
        animate(".q3circle", { scale: 1.5 }, { duration: 0.2, ease: "easeIn" })
        animate(".q3text", { opacity: 1, y: -50 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.5794) {
        animate(".q3circle", { scale: 1 }, { duration: 0.2, ease: "easeOut" })
        animate(".q3text", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }

      if (val >= 0.718) {
        animate(".q4circle", { scale: 1.5 }, { duration: 0.2, ease: "easeIn" })
        animate(".q4text", { opacity: 1, y: -50 }, { duration: 0.2, ease: "easeIn" })
      } else if (val < 0.718) {
        animate(".q4circle", { scale: 1 }, { duration: 0.2, ease: "easeOut" })
        animate(".q4text", { opacity: 0, y: 0 }, { duration: 0.2, ease: "easeOut" })
      }
    })
  }, [])

  // Animasi horizontal roadmap (geser ke kanan saat scroll ke bawah)
  const translateX = useTransform(progress, [0, 1], ["-10vw", "-600vw"]);
  const pathLength = useTransform(progress, [0, 1], [0, 1], {
    ease: cubicBezier(.74,.36,.59,1),
  });
  // const pathLength = useTransform(normalizedProgress, [0, viewportHeight], [0, 1]);
  const offsetX = useTransform(progress, [0, 1], ["-00vw", "-20vw"]);

  // Animasi warna teks berdasarkan progress scroll
  const q1Color = useTransform(progress, (latest) => (latest >= 0.193 ? "#3b82f6" : "#6b7280"));
  const q2Color = useTransform(progress, (latest) => (latest >= 0.441 ? "#3b82f6" : "#6b7280"));
  const q3Color = useTransform(progress, (latest) => (latest >= 0.5794 ? "#3b82f6" : "#6b7280"));
  const q4Color = useTransform(progress, (latest) => (latest >= 0.718 ? "#3b82f6" : "#6b7280"));
  
  const q1smallcircle = useTransform(progress, (latest) => (latest >= 0.226 ? "#3b82f6" : "#6b7280"));
  const q1smallcircle2 = useTransform(progress, (latest) => (latest >= 0.335 ? "#3b82f6" : "#6b7280"));
  const q1smallcircle3 = useTransform(progress, (latest) => (latest >= 0.36 ? "#3b82f6" : "#6b7280"));

  const q1line = useTransform(progress, (latest) => (latest >=  0.198 ? 550 : 420 ))
  const q1line2 = useTransform(progress, (latest) => (latest >=  0.33 ? 250 : 380 ))
  const q1line3 = useTransform(progress, (latest) => (latest >=  0.36 ? 600 : 470 ))
  
  const q2line = useTransform(progress, (latest) => (latest >=  0.459 ? 600 : 470 ))
  const q2line2 = useTransform(progress, (latest) => (latest >=  0.5019 ? 250 : 380 ))
  const q2line3 = useTransform(progress, (latest) => (latest >=  0.5245 ? 600 : 470 ))

  const q3line = useTransform(progress, (latest) => (latest >=  0.5928 ? 600 : 470 ))
  const q3line2 = useTransform(progress, (latest) => (latest >=  0.6255 ? 800 : 670 ))
  const q3line3 = useTransform(progress, (latest) => (latest >=  0.6859 ? 600 : 470 ))
  
  const q4line = useTransform(progress, (latest) => (latest >=  0.7558 ? 250 : 380 ))
  const q4line2 = useTransform(progress, (latest) => (latest >=  0.7855 ? 7000 : 6600 ))
  return (
    <div ref={ref} className="relative h-[600vh] flex flex-col items-center">
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
      <div className="sticky top-10 w-screen overflow-hidden">
        <motion.div style={{ x: translateX, marginLeft: offsetX }} className="flex w-[600vw]">
        <svg
          width="100%" 
          height="100vh" 
          viewBox="0 -50 4000 1000" 
        >
            <motion.path
              d="M -1000 400 L 1000 400 L 1200 450 L 2000 400 L 2200 450 L 2700 400 L 3000 450 L 3800 400 L 4000 450 L 4500 650 L 5500 450 L 6000 400 L 6500 400 L 6600 700 L 6600 1500"
              stroke="rgb(59, 130, 246)"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="6000"
              strokeDashoffset="6000"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ pathLength }}
            />
            <path
              d="M -1000 400 L 1000 400 L 1200 450 L 2000 400 L 2200 450 L 2700 400 L 3000 450 L 3800 400 L 4000 450 L 4500 650 L 5500 450 L 6000 400 L 6500 400 L 6600 700 L 6600 1500"
              stroke="rgba(59, 130, 246, 0.3)" /* Warna lebih redup */
              strokeWidth="4"
              fill="transparent"
            />

            {/* Dots dan Labels */}
            <motion.circle className="q1circle" cx="0" cy="400" r="10" fill={q1Color} />
            <motion.text className="q1text" x="-20" y="350" fontSize="36" fill={q1Color} style={{ fontWeight: 'bold' }}>
              Phase 0
            </motion.text>
            <motion.text className="q1text" x="-20" y="380" fontSize="24" style={{ fill: 'white', fontWeight: 'semibold' }}>
              Fundamental Programming
            </motion.text>

            <motion.circle
              className="q1smallcircle"
              cx="200"
              cy="400"
              r="10"
              style={{ fill: q1smallcircle }}
            />
            <motion.text
              className="q1deschead"
              x="210"
              y="480"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Memulai Belajar
            </motion.text>
            <motion.text
              className="q1desc"
              x="210"
              y="520"
              fontSize="24"
              fill="#3b82f6"
            >
              Tahap dimana seseorang belajar pemrograman
            </motion.text>
            <motion.text
              className="q1desc"
              x="210"
              y="550"
              fontSize="24"
              fill="#3b82f6"
            >
              seperti anak kecil pertama kali belajar naik sepeda
            </motion.text>
            <motion.line x1="200" y1="420" x2="200" y2={q1line} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />
            
            <motion.circle
              className="q1smallcircle2"
              cx="1000"
              cy="400"
              r="10"
              fill={q1smallcircle2}
            />
            <motion.text
              className="q1deschead2"
              x="1010"
              y="280"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
              opacity={0}
            >
              Live Code
            </motion.text>
            <motion.text
              className="q1desc2"
              x="1010"
              y="320"
              fontSize="24"
              fill="#3b82f6"
            >
              Ujian untuk pembuktian
            </motion.text>
            <motion.text
              className="q1desc2"
              x="1010"
              y="350"
              fontSize="24"
              fill="#3b82f6"
            >
              kalau kamu bisa ngoding
            </motion.text>
            <motion.line x1="1000" y1="380" x2="1000" y2={q1line2} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />

            <motion.circle
              className="q1smallcircle3"
              cx="1200"
              cy="450"
              r="10"
              style={{ fill: q1smallcircle3 }}
            />
            <motion.text
              className="q1deschead3"
              x="1210"
              y="530"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Preparation Phase 1
            </motion.text>
            <motion.text
              className="q1desc3"
              x="1210"
              y="570"
              fontSize="24"
              fill="#3b82f6"
            >
              Tugas Sebelum kamu
            </motion.text>
            <motion.text
              className="q1desc3"
              x="1210"
              y="600"
              fontSize="24"
              fill="#3b82f6"
            >
              masuk ke phase 1
            </motion.text>
            <motion.line x1="1200" y1="470" x2="1200" y2={q1line3} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />
            
            <motion.circle
              className="q2circle"
              cx="2000"
              cy="400"
              r="10"
              style={{ fill: q2Color }}
            />
            <motion.text
              className="q2text"
              x="1980" y="370" fontSize="36"
              style={{ fill: q2Color, fontWeight: 'bold' }}
              opacity={0}
            >
              Phase 1
            </motion.text>
            <motion.text
              className="q2text"
              x="1980" y="400" fontSize="24"
              style={{ fill: 'white', fontWeight: 'semibold' }}
              opacity={0}
            >
              Memulai menjadi Backend Developer
            </motion.text>
            
           
            <motion.circle
              className="q2smallcircle"
              cx="2200"
              cy="450"
              r="10"
            />
            <motion.text
              className="q2deschead"
              x="2210"
              y="530"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
              opacity={0}
            >
              Kesusahan di minggu pertama?
            </motion.text>
            <motion.text
              className="q2desc"
              x="2210"
              y="570"
              fontSize="24"
              fill="#3b82f6"
            >
              Tenang, hanya minggu pertama yang sulit
            </motion.text>
            <motion.text
              className="q2desc"
              x="2210"
              y="600"
              fontSize="24"
              fill="#3b82f6"
            >
              sehabis itu akan benar-benar belajar backend
            </motion.text>
            <motion.line x1="2200" y1="470" x2="2200" y2={q2line} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />
          
            <motion.circle
              className="q2smallcircle2"
              cx="2700"
              cy="400"
              r="10"
            />
            <motion.text
              className="q2deschead2"
              x="2710"
              y="280"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Selamat Berjuang :)
            </motion.text>
            <motion.text
              className="q2desc2"
              x="2710"
              y="320"
              fontSize="24"
              fill="#3b82f6"
            >
              Kamu akan belajar banyak stack Backend
            </motion.text>
            <motion.text
              className="q2desc2"
              x="2710"
              y="350"
              fontSize="24"
              fill="#3b82f6"
            >
              yang digunakan di industri saat ini
            </motion.text>
            <motion.line x1="2700" y1="380" x2="2700" y2={q2line2} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />
          
          
            <motion.circle
              className="q2smallcircle3"
              cx="3000"
              cy="450"
              r="10"
            />
            <motion.text
              className="q2deschead3"
              x="3010"
              y="530"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Group Project
            </motion.text>
            <motion.text
              className="q2desc3"
              x="3010"
              y="570"
              fontSize="24"
              fill="#3b82f6"
            >
              Menyelesaikan project bersama teman seperjuanganmu
            </motion.text>
            <motion.text
              className="q2desc3"
              x="3010"
              y="600"
              fontSize="24"
              fill="#3b82f6"
            >
              untuk lulus phase 1 dan melanjutkan ke phase 2
            </motion.text>
            <motion.line x1="3000" y1="470" x2="3000" y2={q2line3} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />

            <motion.circle
              className="q3circle"
              cx="3800"
              cy="400"
              r="10"
              style={{ fill: q3Color }}
            />
            <motion.text
              className="q3text"
              x="3800" y="370" fontSize="36"
              style={{ fill: q3Color, fontWeight: 'bold' }}
              opacity={0}
            >
              Phase 2
            </motion.text>
            <motion.text
              className="q3text"
              x="3800" y="400" fontSize="24"
              style={{ fill: 'white', fontWeight: 'semibold' }}
              opacity={0}
            >
              Memulai menjadi Frontend Developer
            </motion.text>

            <motion.circle
              className="q3smallcircle"
              cx="4000"
              cy="450"
              r="10"
            />
            <motion.text
              className="q3deschead"
              x="4010"
              y="530"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Group Project Setiap Minggu
            </motion.text>
            <motion.text
              className="q3desc"
              x="4010"
              y="570"
              fontSize="24"
              fill="#3b82f6"
            >
              Menyelesaikan project bersama teman seperjuanganmu
            </motion.text>
            <motion.text
              className="q3desc"
              x="4010"
              y="600"
              fontSize="24"
              fill="#3b82f6"
            >
              namun kali ini setiap minggu sekali dan totalnya 5x group project
            </motion.text>
            <motion.line x1="4000" y1="470" x2="4000" y2={q3line} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />

            <motion.circle
              className="q3smallcircle2"
              cx="4500"
              cy="650"
              r="10"
            />
            <motion.text
              className="q3deschead2"
              x="4510"
              y="730"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Final Group Project
            </motion.text>
            <motion.text
              className="q3desc2"
              x="4510"
              y="770"
              fontSize="24"
              fill="#3b82f6"
            >
              Multiplayer Games mungkin sulit, namun
            </motion.text>
            <motion.text
              className="q3desc2"
              x="4510"
              y="800"
              fontSize="24"
              fill="#3b82f6"
            >
              bila lulus portfolio mu sudah sangat keren
            </motion.text>
            <motion.line x1="4500" y1="670" x2="4500" y2={q3line2} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />

            <motion.circle
              className="q3smallcircle3"
              cx="5500"
              cy="450"
              r="10"
            />
            <motion.text
              className="q3deschead3"
              x="5510"
              y="530"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Sudah Siap Untuk kerja
            </motion.text>
            <motion.text
              className="q3desc3"
              x="5510"
              y="570"
              fontSize="24"
              fill="#3b82f6"
            >
              Selamat karena sudah berjuang dan sabar dalam belajar
            </motion.text>
            <motion.text
              className="q3desc3"
              x="5510"
              y="600"
              fontSize="24"
              fill="#3b82f6"
            >
              Kamu sudah menguasai skill Fullstack Developer
            </motion.text>
            <motion.line x1="5500" y1="470" x2="5500" y2={q3line3} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />

            <motion.circle
              className="q4circle"
              cx="6000"
              cy="400"
              r="10"
              style={{ fill: q4Color }}
            />
            <motion.text
              className="q4text"
              x="6000" y="370" fontSize="36"
              style={{ fill: q4Color, fontWeight: 'bold' }}
              opacity={0}
            >
              Phase 3
            </motion.text>
            <motion.text
              className="q4text"
              x="6000" y="400" fontSize="24"
              style={{ fill: 'white', fontWeight: 'semibold' }}
              opacity={0}
            >
              Memulai menjadi Web3 Developer
            </motion.text>

            <motion.circle
              className="q4smallcircle"
              cx="6500"
              cy="400"
              r="10"
            />
            <motion.text
              className="q4deschead"
              x="6510"
              y="280"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Oops! Phase 3 belum tersedia :(
            </motion.text>
            <motion.text
              className="q4desc"
              x="6510"
              y="320"
              fontSize="24"
              fill="#3b82f6"
            >
              Kami masih meneliti apa saja kurikulum materi yang diperlukan
            </motion.text>
            <motion.text
              className="q4desc"
              x="6510"
              y="350"
              fontSize="24"
              fill="#3b82f6"
            >
              untuk phase 3 agar cocok untuk orang Indonesia yang ingin menjadi web 3 developer
            </motion.text>
            <motion.line x1="6500" y1="380" x2="6500" y2={q4line} stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />


            <motion.circle
              className="q4smallcircle2"
              cx="6600"
              cy="700"
              r="10"
            />
            <motion.text
              className="q4deschead2"
              x="6720"
              y="740"
              fontSize="36"
              fill="#FFF"
              fontWeight="bold"
            >
              Cooming Soon!
            </motion.text>
            <motion.text
              className="q4desc2"
              x="6720"
              y="780"
              fontSize="24"
              fill="#3b82f6"
            >
              Stay tune di Randome Para Nolep
            </motion.text>
            <motion.text
              onClick={() => { window.open('https://discord.gg/ufbRBRTKN8', '_blank')}}
              className="q4desc2"
              x="6720"
              y="810"
              fontSize="24"
              fill="#3b82f6"
              style={{ cursor: 'pointer', textDecoration: 'underline'}}
            >
              Join discordnya sekarang 😈
            </motion.text>
            <motion.line x1="6600" y1="700" x2={q4line2} y2="700" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="10 10" />

          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapLine;
