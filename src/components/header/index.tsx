// import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

import {Navigation, Autoplay} from 'swiper/modules';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useEffect, useRef} from "react";
import {getCarouselData} from "../../redux/reducers/variable.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";


export default function Component() {

    const dispatch = useAppDispatch();

    const {carousels} = useAppSelector(state => state.variables);
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch(getCarouselData());
    }, []);

    return (
        <header id={'header'} className={'w-full flex items-center justify-center'}>
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
                speed={1500}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
            >
                {
                    carousels.map((carousel, key) => (
                        <SwiperSlide key={key} className={'w-full'}>
                            <a href={carousel.link} target={'_blank'}>
                                <LazyLoadImage
                                    effect="blur"
                                    loading={'lazy'}
                                    rel={'preload'}
                                    wrapperProps={{
                                        style: {transitionDelay: "1s"},
                                    }}
                                    className={'w-full md:h-[600px] h-[200px] object-cover object-center'}
                                    alt={"carousel-data" + carousel.image}
                                    src={carousel.image}
                                />
                            </a>
                        </SwiperSlide>
                    ))
                }
                <div ref={nextRef} data-aos="fade-right" data-aos-duration="3000"
                     className="swiper-button-next md:!w-12 w-8 mr-4 !text-white">
                    {/*<img src={ArrowRight} alt="swiper-arrow-right"/>*/}
                </div>
                <div ref={prevRef} data-aos="fade-left" data-aos-duration="3000"
                     className="swiper-button-prev md:!w-12 w-8 ml-4 !text-white">
                    {/*<img src={ArrowLeft} alt="swiper-arrow-left"/>*/}
                </div>
            </Swiper>
        </header>
    );
}