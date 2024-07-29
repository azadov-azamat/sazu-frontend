// importrt React, {useEffect} from 'react';

import {
    AboutSection,
    HeaderSection,
    NewsSection,
    PartnersSection,
    ProjectCardComponent
} from "../../components";
import {useAppSelector} from "../../redux/hooks.ts";
import {useEffect} from "react";
import AOS from "aos";

export default function Controller() {

    const {projects} = useAppSelector(state => state.variables)

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={'flex flex-col gap-24'}>
            <HeaderSection/>
            <div className="relative flex justify-center items-center h-[710px]">
                {
                    projects.map((project, index) => (
                        <ProjectCardComponent {...project} index={index} total={projects.length} key={index}/>
                    ))
                }
            </div>
            <AboutSection/>
            <PartnersSection/>
            <NewsSection/>

            <div>

            </div>
        </div>
    );
}