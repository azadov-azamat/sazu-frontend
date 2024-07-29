// import React from 'react';
import {newsDataKeys} from "../../interface/redux/variable.interface.ts";

export default function Component(item: newsDataKeys) {

    return (
        <div className="w-80 h-[460px] p-5 bg-white text-black rounded-[20px] overflow-hidden">
            <img src={item.image} alt={item.title}
                 className="w-full h-[260px] object-contain border-primary-gray rounded-[20px]"
            />
            <div className="mt-6">

                    <p className={'leading-5 font-normal text-gray-700 !text-base truncate-multiline'}>
                        <span className={'text-black font-bold'}> {item.title}</span> -
                        {item.desc}</p>
            </div>
            <a href="#" className="text-purple-800 underline !font-bold mt-4 inline-block">подробнее</a>
        </div>
    );
}