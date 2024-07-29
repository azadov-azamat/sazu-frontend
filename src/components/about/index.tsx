// import React from 'react';

import {PageTitleComponent} from "../index.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import aboutImage from "../../assets/about-section.png";
import Splitting from 'splitting';
import {useEffect, useRef} from "react";

export default function Component() {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        Splitting();

        const updateCharColors = (): void => {
            if (!textRef.current) return;

            const rect: DOMRect = textRef.current.getBoundingClientRect();
            const viewportHeight: number = window.innerHeight;
            const textHeight: number = rect.height;

            // Calculate scroll progress
            let scrollProgress: number = (viewportHeight - rect.top) / (viewportHeight + textHeight);
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            const chars: NodeListOf<HTMLElement> = textRef.current.querySelectorAll('[data-char]');
            chars.forEach((char, index) => {
                const charProgress: number = index / chars.length;
                if (charProgress <= scrollProgress) {
                    char.style.color = 'white';
                } else {
                    char.style.color = 'gray';
                }
            });
        };

        // Initial color update
        updateCharColors();

        // Scroll event listener
        const handleScroll = () => {
            requestAnimationFrame(updateCharColors);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section>
            <PageTitleComponent title={"О нас"}/>
            <div className={'flex md:flex-row flex-col gap-24 items-center mt-8'}>
                <div
                    data-aos="fade-up-right"
                    className={'md:w-[350px] w-3/4'}
                >
                    <LazyLoadImage
                        className={'w-full object-cover object-center'}
                        alt={"about-image"}
                        src={aboutImage}
                    />
                </div>
                <p
                    ref={textRef}
                    className="xl:w-[45%] w-full text-gray-500 font-normal md:text-3xl text-xl leading-9 words chars splitting" data-splitting>
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