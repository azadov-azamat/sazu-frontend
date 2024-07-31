// importrt React, {useEffect} from 'react';

import {
    AboutSection, ContactSection,
    HeaderSection,
    NewsSection,
    PartnersSection,
    ProjectCardComponent, VideoPlayerSection
} from "../../components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {useEffect} from "react";
import AOS from "aos";
import {getCarouselData} from "../../redux/reducers/variable.ts";

export default function Controller() {

    const dispatch = useAppDispatch();
    const {projects} = useAppSelector(state => state.variables)

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        dispatch(getCarouselData());
    }, []);

    return (
        <div className={'flex flex-col md:gap-32 gap-20'}>
            <HeaderSection/>
            <div className="relative flex justify-center items-center md:h-[710px] h-96">
                {
                    projects.map((project, index) => (
                        <ProjectCardComponent {...project} index={index} total={projects.length} key={index}/>
                    ))
                }
            </div>
            <AboutSection/>
            <PartnersSection/>
            <NewsSection/>
            <ContactSection/>
            <div className={'flex items-center justify-center'}>
                <VideoPlayerSection/>
            </div>
            <div>

            </div>
        </div>
    );
}