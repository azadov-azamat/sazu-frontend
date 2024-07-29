// import React from 'react';

import AdsImage from '../../assets/img.png';
import ArrowRight from '../../assets/arrow-right.png';
import ArrowLeft from '../../assets/arrow-left.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from 'swiper/modules';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useRef} from "react";


export default function Component() {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    return (
        <header className={'w-full h-auto'}>
            <Swiper
                modules={[Navigation, Autoplay]}
                className={'w-full'}
                slidesPerView={1}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                }}
                loop
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7].map((_, key) => (
                        <SwiperSlide key={key} className={'w-full'}>
                            <LazyLoadImage
                                className={'w-full h-[700px] object-cover object-center'}
                                alt={"logo-site"}
                                src={AdsImage}/>
                        </SwiperSlide>
                    ))
                }
                <div ref={nextRef} className="swiper-button-next !w-12 mr-4 after:hidden">
                    <img src={ArrowRight} alt="swiper-arrow-right"/>
                </div>
                <div ref={prevRef} className="swiper-button-prev !w-12 ml-4 after:hidden">
                    <img src={ArrowLeft} alt="swiper-arrow-left"/>
                </div>
            </Swiper>
        </header>
    );
}