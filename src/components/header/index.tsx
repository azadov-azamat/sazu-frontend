// import React from 'react';

import AdsImage from '../../assets/draft/header-image.png';
// import ArrowRight from '../../assets/arrow-right.png';
// import ArrowLeft from '../../assets/arrow-left.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from 'swiper/modules';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useRef} from "react";


export default function Component() {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    return (
        <header className={'w-full flex items-center justify-center'}>
            <Swiper
                modules={[Navigation, Autoplay]}
                className={'w-full'}
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                }}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7].map((_, key) => (
                        <SwiperSlide key={key} className={'w-full'}>
                            <LazyLoadImage
                                effect="blur"
                                wrapperProps={{
                                    // If you need to, you can tweak the effect transition using the wrapper style.
                                    style: {transitionDelay: "1s"},
                                }}
                                className={'w-full md:h-[700px] h-[70vh] object-cover object-center'}
                                alt={"logo-site"}
                                src={AdsImage}/>
                        </SwiperSlide>
                    ))
                }
                <div ref={nextRef} data-aos="fade-right" data-aos-duration="3000" className="swiper-button-next !w-12 mr-4 ">
                    {/*<img src={ArrowRight} alt="swiper-arrow-right"/>*/}
                </div>
                <div ref={prevRef} data-aos="fade-left" data-aos-duration="3000" className="swiper-button-prev !w-12 ml-4 ">
                    {/*<img src={ArrowLeft} alt="swiper-arrow-left"/>*/}
                </div>
            </Swiper>
        </header>
    );
}