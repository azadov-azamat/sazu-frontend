// import React from 'react';
import {newsDataKeys} from "../../interface/redux/variable.interface.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface NewCardProps extends newsDataKeys {
    scrollPosition: any,
}

export default function Component(item: NewCardProps) {

    return (
        <div
            data-aos="flip-down"
            className="md:w-80 w-3/4 relative h-[500px] p-5 bg-white text-black rounded-[20px] overflow-hidden group">
            <div className={'w-full h-[260px] relative'}>
                <LazyLoadImage
                    scrollPosition={item.scrollPosition}
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}
                    className="w-full h-full object-contain object-center absolute inset-0
                     transition-transform duration-400 ease-in-out transform scale-100 group-hover:scale-105 rotate-0 group-hover:rotate-3
                     "
                    src={item.image} alt={item.title}
                />
            </div>

            <div className="mt-6">

                <p className={'leading-5 font-normal text-gray-700 !text-base truncate-multiline'}>
                    <span className={'text-black font-bold'}> {item.title} - </span>
                    {item.desc}</p>
            </div>
            <a href="#"
               className="absolute bottom-5 text-purple-800 underline !font-bold mt-4 inline-block">подробнее</a>
        </div>
    );
}