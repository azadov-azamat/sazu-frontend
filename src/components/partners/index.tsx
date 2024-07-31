// import React from 'react';

import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {
    const {partners} = useAppSelector(state => state.variables)

    return (
        <div
            id={'partners'}
            className="flex flex-col items-center justify-center text-center">
            <div className="flex w-full overflow-hidden">
                <div className="flex gap-32 whitespace-nowrap animate-marquee select-none">
                    {partners.map((logo, index) => (
                        <div key={index} className={'w-28 h-12'}>
                            <img src={logo.img} alt={logo.name}
                                 className="w-full h-full mx-4 object-contain"/>
                        </div>
                    ))}
                    {partners.map((logo, index) => (
                        <div key={index + partners.length} className={'w-28 h-12'}>
                            <img src={logo.img} alt={logo.name}
                                 className="w-full h-full mx-4 object-contain"/>
                        </div>
                    ))}
                    {partners.map((logo, index) => (
                        <div key={index + (partners.length * 2)} className={'w-28 h-12'}>
                            <img src={logo.img} alt={logo.name}
                                 className="w-full h-full mx-4 object-contain"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}