// import React from 'react';

import {PageTitleComponent} from "../index.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
// import aboutImage from "../../assets/about-section.png";
import Splitting from 'splitting';
import {useEffect, useRef} from "react";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../redux/hooks.ts";

gsap.registerPlugin(ScrollTrigger);

export default function Component() {

    const {t} = useTranslation()

    const {about} = useAppSelector(state => state.variables);
    const textRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (about?.text) {
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
        }
    }, [about]);

    useEffect(() => {
        if (about?.image && imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                {scale: 1},
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
    }, [about]);

    return (
        <section id={'about-us'}>
            <PageTitleComponent title={t('about-us')}/>
            <div className={'flex md:flex-row flex-col gap-24 items-center mt-8'}>

                <div
                    ref={imageRef}
                    className={'md:w-[350px] w-3/4'}
                >
                    <LazyLoadImage
                        loading={'lazy'}
                        className={'w-full object-cover object-center mediaFill parallaxImage revealStaggered'}
                        alt={"about-image"}
                        style={{opacity: 0.9}}
                        src={about?.image}
                    />
                </div>
                <p
                    ref={textRef}
                    className="xl:w-[45%] w-full text-gray-500 px-6 md:px-0 font-normal md:text-3xl text-xl leading-9 words chars splitting"
                    data-splitting>
                    {about?.text}
                </p>
            </div>
        </section>
    );
}