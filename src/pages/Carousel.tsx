import React from 'react'

function Carousel() {
  return (
    <>
    <div className='flex justify-center overflow-x-auto'>
        <div className='preview bg-base-100 relative flex w-[90%]'>
            <div className="carousel w-[full] h-fit">
                <div id="slide1" className="carousel-item relative w-full h-fit flex align-center">
                    <img
                    src={kobot}
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-fit">
                    <img
                    src={points}
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-fit">
                    <img
                    src={generator}
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                    <div id="slide4" className="carousel-item relative w-full h-fit">
                        <img
                        src={koth}
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
    </div></>
  )
}

export default Carousel