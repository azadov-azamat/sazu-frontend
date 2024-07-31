// import React from 'react';

import {useAppSelector} from "../../redux/hooks.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Component() {

    const {partners} = useAppSelector(state => state.variables)

    return (
        <div
            id={'partners'}
            className="flex flex-col items-center justify-center text-center">
            <div className="flex w-full overflow-hidden">
                <div className="flex gap-32 w-[200%] whitespace-nowrap animate-scroll select-none">
                    {partners.map((logo, index) => (
                        <div key={index} className={'w-28 h-12 flex-shrink-0'}>
                            <LazyLoadImage src={logo.icon} alt={logo.icon}
                                 className="w-full h-full mx-4 object-contain"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}