// import React from 'react';

import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {
    const {partners} = useAppSelector(state => state.variables)

    return (
        <div className="flex items-center justify-center text-center">
            <div className="flex w-full overflow-hidden">
                <div className="flex gap-32 whitespace-nowrap animate-marquee">
                    {partners.map((logo, index) => (
                        <img key={index} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                    {partners.map((logo, index) => (
                        <img key={index + partners.length} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                </div>
            </div>
        </div>
    );
}