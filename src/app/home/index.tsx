// importrt React, {useEffect} from 'react';

import {AboutSection, HeaderSection, NewsSection, PartnersSection, ProjectCardComponent} from "../../components";
import {useAppSelector} from "../../redux/hooks.ts";

export default function Controller() {

    const {projects} = useAppSelector(state => state.variables)

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