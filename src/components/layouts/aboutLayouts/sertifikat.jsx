import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'
import dicodingImg from '../../../../public/assets/imgSertifikat/javascript-kursus.jpg'
import camp404Img from '../../../../public/assets/imgSertifikat/webprogramming-kursus.jpg'

export default function Sertifikat() {
    return (
        <div className='pt-10 flex flex-col gap-3'>
            <h1 className="text-3xl text-black">Sertifikat</h1>
            <div className='flex justify-center w-full'>
                <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showStatus={false} className='md:w-[55%] w-full text-center flex justify-center items-center flex-col'>
                    <div className='border'>
                        <img src={dicodingImg} alt='sertifikat'/>
                    </div>
                    <div className='border'>
                        <img src={camp404Img} alt='sertifikat'/>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}