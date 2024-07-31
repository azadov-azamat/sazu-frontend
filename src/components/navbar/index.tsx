// import React from 'react';
import SiteLogo from '../../assets/site-logo.png';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import React from "react";
import {gsap} from 'gsap';
import {LanguageDropdownComponent} from "../index.ts";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Component() {

    const {t} = useTranslation()
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            const tl = gsap.timeline();
            tl.to('.menu', {duration: 1, y: 0, opacity: 1, display: 'flex'}) // Menyu divini sekinroq chiqarish
                .fromTo('.menu-list', {x: '-100%', opacity: 0}, {x: 0, opacity: 1, duration: 0.5, delay: 0.2}); // Menyu listni chiqarish
        } else {
            const tl = gsap.timeline();
            tl.to('.menu-list', {x: '-100%', opacity: 0, duration: 0.5}) // Menyu listni yashirish
                .to('.menu', {duration: 0.5, y: '-100%', opacity: 0, display: 'none'}); // Menyu divini yashirish
        }
    };

    return (
        <nav className={'absolute w-full flex justify-between items-center z-50 bg-transparent mt-9 px-6'}>
            <Link to={'/'}>
                <LazyLoadImage
                    alt={"logo-site"}
                    className={'w-28'}
                    src={SiteLogo}/>
            </Link>
            <div className={'flex items-center gap-4'}>
                <LanguageDropdownComponent/>
                <div className="burger flex flex-col justify-between h-3 cursor-pointer" onClick={toggleMenu}>
                    <div className="w-10 h-0.5 bg-white"></div>
                    <div className="w-10 h-0.5 bg-white"></div>
                </div>
            </div>
            <div
                className={`menu z-[1000] fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 transform -translate-y-full backdrop-blur justify-center ${isOpen ? 'flex justify-center' : 'hidden'}`}>
                <div className={'container relative flex items-center justify-start'}>
                    <div
                        className={`absolute top-12 right-4 flex flex-col justify-between cursor-pointer w-10 h-10`}
                        onClick={toggleMenu}>
                        <div
                            className={`w-8 h-0.5 bg-white transition-transform transform rotate-45 translate-y-1.5 absolute top-3 `}></div>

                        <div
                            className={`w-8 h-0.5 bg-white transition-transform transform -rotate-45 -translate-y-1.5 absolute top-6`}></div>
                    </div>

                    <ul className="menu-list w-full list-none p-0 m-0 flex flex-col md:items-start items-center gap-1">
                        <li className="2xl:text-6xl md:text-4xl text-2xl text-white font-normal">
                            <Link to={'/'}>
                                {t ('main')}
                            </Link>
                        </li>
                        <li className="2xl:text-6xl md:text-4xl text-2xl text-white font-normal">
                            <a href="#about-us">
                                {t ('about-us')}
                            </a>
                        </li>
                        <li className="2xl:text-6xl md:text-4xl text-2xl text-white font-normal">
                            <a href="#news">
                                {t ('news')}
                            </a>
                        </li>
                        <li className="2xl:text-6xl md:text-4xl text-2xl text-white font-normal">
                            <a href="#partners">
                                {t ('partners')}
                            </a>
                        </li>
                        <li className="2xl:text-6xl md:text-4xl text-2xl text-white font-normal">
                            <a href="#contacts">
                                {t  ('contacts')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}