import React, { useRef } from 'react'
import pfp from '../assets/pfp.jpeg'
import jslogo from '../assets/jslogo.webp'
import reactlogo from '../assets/react.png'
import angular from '../assets/angular.png'
import tailwind from '../assets/tailwind.png'
import vite from '../assets/vite.png'
import node from '../assets/node.png'
import java from '../assets/java.webp'
import spring from '../assets/spring.png'
import sql from '../assets/mysql.png'
function Technologies() {
    const containerRef = useRef();

    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
        const ele = containerRef.current;
        if (!ele) {
            return;
        }
        const startPos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        const handleMouseMove = (e: React.MouseEvent) => {
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            ele.scrollTop = startPos.top - dy;
            ele.scrollLeft = startPos.left - dx;
            updateCursor(ele);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            resetCursor(ele);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, []);

    const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
        const ele = containerRef.current;
        if (!ele) {
            return;
        }
        const touch = e.touches[0];
        const startPos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: touch.clientX,
            y: touch.clientY,
        };

        const handleTouchMove = (e: React.TouchEvent) => {
            const touch = e.touches[0];
            const dx = touch.clientX - startPos.x;
            const dy = touch.clientY - startPos.y;
            ele.scrollTop = startPos.top - dy;
            ele.scrollLeft = startPos.left - dx;
            updateCursor(ele);
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            resetCursor(ele);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    }, []);

    const updateCursor = (ele) => {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';
    };

    const resetCursor = (ele) => {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
    };


  return (
<div className="my-0 overflow-x-scroll overflow-y-hidden items-center justify-center content-center cursor-grab" >
  <div className="flex flex-row overflow-x-scroll overflow-y-hidden items-center snap-x scroll-pl-[200px]  " ref={containerRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
    <div className={`flex first4 items-center md:translate-x-32`}>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 my-16 hover:-translate-y-1 hover:scale-101 rotate-y-180 '>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80  snap-start scroll-ml-12">
        <img
        src={jslogo}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>Javascript</h2>
        <p>Dynamic Content Language</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront flex justify-center content-center align-middle items-center origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80  snap-start">
        <img
        src={reactlogo}
        draggable="false"
        className="p-8" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>React</h2>
        <p>Front-end Javascript Framework</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront flex justify-center content-center align-middle items-center origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80  snap-start">
        <img
        src={angular}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>Angular</h2>
        <p>Front-end Javascript Framework</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80  snap-start">
        <img
        src={vite}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>Vite</h2>
        <p>Javascript development server</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div className='flex second4 items-center md:translate-x-32'>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront justify-center content-center align-middle items-center origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80 snap-start">
        <img
        src={tailwind}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-blue-500/80 to-sky-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>Tailwind</h2>
        <p>CSS framework</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront flex justify-center content-center align-middle items-center origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-red-500/80 to-fuchsia-500/80  snap-start">
        <img
        src={node}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-red-500/80 to-fuchsia-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>Node</h2>
        <p>Server-side Javascript runtime</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront flex justify-center content-center align-middle items-center origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-emerald-500/80 to-green-500/80  snap-start">
        <img
        src={java}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-emerald-500/80 to-green-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>Java</h2>
        <p>Object Oriented Programming Language</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront flex justify-center content-center align-middle items-center origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-pink-500/80 to-fuchsia-500/80  snap-start">
        <img
        src={spring}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-r from-pink-500/80 to-fuchsia-500/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>SpringBoot</h2>
        <p>Java Framework</p>
        </div>
      </div>
    </div>
    </div>
    <div className='flipcard flex origin-center perspective-[1000px] h-[200px] w-[200px] transition delay-150 duration-300 ease-in-out m-8 hover:-translate-y-1 hover:scale-101 rotate-y-180'>
    <div className="flipcardinner relative transform-3d transition delay-150 duration-300 ease-in-out w-full h-full hover:rotate-x-180">
      <div className="flipcardfront flex justify-center content-center align-middle items-center origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-t from-cyan-500/80 to-white/80  snap-start">
        <img
        src={sql}
        draggable="false"
        className="p-8 rotate-y-180" />
      </div>
      <div className="flipcardback flex origin-center backface-hidden rounded-lg h-full w-full absolute shadow-2xl bg-linear-to-t from-cyan-500/80 to-white/80 snap-start rotate-y-180 text-center align-middle justify-center content-middle">
        <div className='justify-center content-center align-middle items-center rotate-x-180'>
        <h2>MySQL</h2>
        <p>Database language</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div> 
</div>
  )
}

export default Technologies
