// import React from 'react';

import {useAppSelector} from "../../redux/hooks.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Marquee from "react-fast-marquee";

export default function Component() {

    const {partners} = useAppSelector(state => state.variables)

    return (
        <div
            id={'partners'}
            className="flex flex-col items-center justify-center text-center">
            <div className="flex w-full h-auto">
                <Marquee speed={80} gradient={false} className={'overflow-y-hidden'}>
                    <div
                        className="flex w-full h-auto md:gap-32 sm:gap-24 gap-14 select-none md:mr-32 sm:!mr-24 !mr-14">
                        {partners.map((logo, index) => (
                            <div key={index} className={'w-32 h-14 flex-shrink-0'}>
                                <LazyLoadImage src={logo.icon} alt={logo.icon}
                                               className="w-full h-full mx-4 object-contain"/>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}