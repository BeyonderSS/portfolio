"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { NumberTicker } from "../magicui/number-ticker";

function Preloader({ onComplete }) {
  const [showText, setShowText] = useState(false);
  
  // Split text into spans
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char opacity-0 inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // Step 1: Show NumberTicker for 3.2 seconds
    tl.to(".number-ticker", {
      opacity: 1,
      duration: 0.3,
    })
      .to(".number-ticker", {
        opacity: 0,
        duration: 1,
        delay: 2.9,
        ease: "power1.inOut",
        onComplete: () => setShowText(true),
      }).then("hello-world", {
        duration: 0.8,
        opacity: 0,
        y: 80,
        rotationX: 180,
        scale: 0,
        transformOrigin: "50% 50%",
        ease: "back.out",
        stagger: 0.05,
        
     })
    // Step 3: Tilt and move out
    tl.to(".preloader", {
      rotate: 15,
      y: "-100vh",
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, [onComplete, showText]);

  return (
    <div className="preloader fixed inset-0 flex flex-col items-center justify-center  text-2xl font-bold">
      {!showText ? (
        <NumberTicker
          value={100}
          className="number-ticker text-8xl font-medium tracking-tighter "
        />
      ) : (
        <p className="hello-world text-8xl ">Hello, World</p>
      )}
    </div>
  );
}

export default Preloader;
