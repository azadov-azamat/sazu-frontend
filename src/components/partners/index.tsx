// import React from 'react';

import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {
    const {partners} = useAppSelector(state => state.variables)

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="flex w-full overflow-hidden">
                <div className="flex gap-32 whitespace-nowrap animate-marquee select-none">
                    {partners.map((logo, index) => (
                        <img key={index} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                    {partners.map((logo, index) => (
                        <img key={index + partners.length} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                    {partners.map((logo, index) => (
                        <img key={index + (partners.length * 2)} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                </div>
            </div>
            <div className="flex w-full overflow-hidden mt-4">
                <div className="flex gap-32 whitespace-nowrap animate-marquee-reverse select-none">
                    {partners.map((logo, index) => (
                        <img key={index} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                    {partners.map((logo, index) => (
                        <img key={index + partners.length} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                    {partners.map((logo, index) => (
                        <img key={index + (partners.length * 2)} src={logo.img} alt={logo.name} className="h-16 mx-4"/>
                    ))}
                </div>
            </div>
        </div>
    );
}