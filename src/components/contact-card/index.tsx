// import React from 'react';

import {contactDataKey} from "../../interface/redux/variable.interface.ts";
// import {useTranslation} from "react-i18next";
// import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Component({name, image, profession, text}: contactDataKey) {
    // const {t} = useTranslation()

    return (
        <div className="relative w-full xl:h-[440px] md:h-[360px] sm:h-80 sm:mt-0 mt-24 h-96 bg-black rounded-xl shadow-lg group">
            <img
                src={image}
                alt={name}
                loading={'lazy'}
                className="!w-full !h-full transition duration-500 object-cover  object-top
                group-hover:blur-sm ease-in-out group-hover:scale-95 rounded-[11px]"
            />
            <div
                className="sm:absolute static inset-0 flex flex-col justify-end p-4 transition-all duration-500 sm:bg-gradient-to-t bg-transparent from-black
                via-transparent to-transparent group-hover:bg-opacity-0 rounded-[10px]">
                <h3
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="text-white text-xl font-bold">{name}</h3>
                <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="text-gray-400 truncate">{profession}</p>
            </div>
            <div
                className="absolute inset-0 p-4 flex flex-col justify-center items-center transition-opacity duration-500 opacity-0
                group-hover:opacity-100 bg-black bg-opacity-70 rounded-xl">
                <h3 className="text-white text-2xl font-bold mb-2">{name}</h3>
                <p className="text-gray-300 text-center truncate-multiline">{text ? text : ''}</p>
                {/*<a href={'#contacts'} onClick={onSelect} className="border-none text-primary-purple !font-bold mt-4 inline-block">{t ("more")}</a>*/}
            </div>
        </div>
    );
}