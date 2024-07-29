// importrt React, {useEffect} from 'react';

import {AboutSection, HeaderSection} from "../../components";

export default function Controller() {

    return (
        <div className={'flex flex-col gap-14'}>
            <HeaderSection/>
            <AboutSection/>
        </div>
    );
}