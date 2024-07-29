// import React from 'react';

import {PageTitleComponent} from "../index.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import aboutImage from "../../assets/about-section.png";

export default function Component() {
    return (
        <section>
            <PageTitleComponent title={"О нас"}/>
            <div className={'flex gap-24 items-center mt-8'}>
                <div className={'w-[350px]'}>
                    <LazyLoadImage
                        className={'w-full object-cover object-center'}
                        alt={"about-image"}
                        src={aboutImage}
                    />
                </div>
                <p className="xl:w-[45%] w-full text-white font-normal text-3xl leading-9">
                    Sazu - это команда опытных специалистов в сфере маркетинга, которые специализируются
                    на продвижении жилых комплексов. Мы обладаем глубоким пониманием рынка
                    недвижимости и используем инновационные методы, чтобы создавать эффективные
                    маркетинговые кампании, которые привлекают внимание потенциальных покупателей и
                    способствуют росту продаж.
                </p>
            </div>
        </section>
    );
}