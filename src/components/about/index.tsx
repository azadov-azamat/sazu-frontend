// import React from 'react';

import {PageTitleComponent} from "../index.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import aboutImage from "../../assets/about-section.png";
import Splitting from 'splitting';
import {useEffect, useRef} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
    const textRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

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

    useEffect(() => {
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { scale: 1 },
                {
                    scale: 1.2,
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <section>
            <PageTitleComponent title={"О нас"}/>
            <div className={'flex md:flex-row flex-col gap-24 items-center mt-8'}>

                <div
                    ref={imageRef}
                    className={'md:w-[350px] w-3/4'}
                >
                    <LazyLoadImage
                        className={'w-full object-cover object-center mediaFill parallaxImage revealStaggered'}
                        alt={"about-image"}
                        style={{opacity: 0.9}}
                        src={aboutImage}
                    />
                </div>
                <p
                    ref={textRef}
                    className="xl:w-[45%] w-full text-gray-500 px-6 md:px-0 font-normal md:text-3xl text-xl leading-9 words chars splitting"
                    data-splitting>
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