// importrt React, {useEffect} from 'react';

import {
    AboutSection,
    ContactSection,
    NewsSection,
    PartnersSection,
    VideoPlayerSection
} from "../../components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {useEffect} from "react";
import AOS from "aos";
import {getNewsData} from "../../redux/reducers/variable.ts";
import {useParams} from "react-router";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Controller() {

    const {id} = useParams()
    const dispatch = useAppDispatch();
    const {news, footer} = useAppSelector(state => state.variables)

    const currentNews = news.find((_, index) => index === Number(id));

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        dispatch(getNewsData());
    }, []);

    return (
        <div className={'flex flex-col md:gap-32 gap-20'}>
            <div className={'text-white'}>
                <h2 className={'block font-bold text-center text-3xl mt-28 mb-4'}>{currentNews?.title}</h2>
                <div className={'float-left lg:w-1/2 w-full md:h-[32rem] h-64 mb-4 rounded-lg overflow-hidden md:px-0 px-6'}>
                    <LazyLoadImage
                        className={'w-full h-full object-contain object-center'}
                        src={currentNews?.image} alt={currentNews?.title}
                    />
                </div>
                <p className={'font-normal text-lg mt-4 leading-8 indent-4 md:px-0 px-6'}>
                    {currentNews?.description}
                </p>
            </div>
            <NewsSection/>
            <AboutSection/>
            <PartnersSection/>
            <ContactSection/>
            <div className={'flex items-center md:px-0 px-6 justify-center'}>
                <VideoPlayerSection video={footer?.video || ""}/>
            </div>
            <div>

            </div>
        </div>
    );
}