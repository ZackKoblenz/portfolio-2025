import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setScrollPercent(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-bar top-0 left-0 w-full h-2 bg-black-900 z-100">
        <div 
          className="h-full" 
          style={{ width: `${scrollPercent}%`, backgroundColor: `rgb(255, 255, 0)` }} 
        />
      </div>
    </>
  );
}