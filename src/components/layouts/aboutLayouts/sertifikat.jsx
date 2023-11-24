import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Sertifikat() {
    return (
        <div className='pt-10 flex flex-col gap-3'>
            <h1 className="text-3xl text-black">Sertifikat</h1>
            <div className='flex justify-center w-full'>
                <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showStatus={false} className='md:w-[75%] h-auto w-full text-center flex justify-center items-center flex-col'>
                    <div className='border'>
                        <img src="../../../../public/assets/imgSertifikat/javascript-kursus.jpg" />
                    </div>
                    <div className='border'>
                        <img src="../../../../public/assets/imgSertifikat/webprogramming-kursus.jpg" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}