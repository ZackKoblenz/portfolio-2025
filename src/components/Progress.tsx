import React, { useEffect, useState } from 'react'

function Progress() {

    const [count, setCount] = useState(0)

    let end = 100;
    let duration = 1500;
    useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);


  return (
    <div className="absolute top-1/2 bottom-1/2 w-screen h-screen">
    <h1 className='flex justify-center mb-6'>Loading Your New Hire's Portfolio</h1>
    <div className='flex justify-center'>
        <progress className="progress progress-primary w-[50%]" value={count} max="100"></progress>
    </div>
    </div>
  )
}

export default Progress