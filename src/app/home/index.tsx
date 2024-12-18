// importrt React, {useEffect} from 'react';

import {
    AboutSection,
    ContactSection,
    HeaderSection,
    NewsSection,
    PartnersSection,
    ProjectCardComponent
} from "../../components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {useEffect} from "react";
import AOS from "aos";
import {getNewsData} from "../../redux/reducers/variable.ts";

export default function Controller() {

    const dispatch = useAppDispatch();
    const {projects} = useAppSelector(state => state.variables)

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        dispatch(getNewsData({page: 1}));
    }, []);

    return (
        <div className={'flex flex-col md:gap-32 sm:gap-20 gap-14'}>
            <HeaderSection/>
            <div className="flex flex-col gap-4 items-center min-h-[400px]">
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
        </div>
    );
}