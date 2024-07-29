// importrt React, {useEffect} from 'react';

import {AboutSection, HeaderSection, NewsSection, PartnersSection, SiteLoadingComponent} from "../../components";

export default function Controller() {

    return (
        <div className={'flex flex-col gap-24'}>
            <SiteLoadingComponent/>
            <HeaderSection/>
            <AboutSection/>
            <PartnersSection/>
            <NewsSection/>

            <div>

            </div>
        </div>
    );
}