import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import SiteLogo from '../../assets/site-logo.png';
import {LanguageDropdownComponent} from "../index.ts";
import {useTranslation} from "react-i18next";

const Navbar: React.FC = () => {

    const { t } = useTranslation();

    const menuRef = useRef<HTMLDivElement>(null);
    const menuContentRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const calculateScale = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const radius = Math.sqrt(vw * vw + vh * vh);
        return radius / 2 / 4;
    };

    const toggleMenu = () => {
        if (!menuOpen) {
            const burgerBounds = burgerRef.current?.getBoundingClientRect();

            if (burgerBounds && menuRef.current) {
                gsap.set(menuRef.current, {
                    top: burgerBounds.top + burgerBounds.height / 2,
                    left: burgerBounds.left + burgerBounds.width / 2,
                    xPercent: -200, // Doirani burger tugmasining markaziga joylashtirish uchun
                    yPercent: 0, // Doirani burger tugmasining markaziga joylashtirish uchun
                    transformOrigin: 'center', // Menyu kengayishini markazdan boshlash
                });
            }

            gsap.to(menuRef.current, {
                scale: calculateScale(),
                duration: 0.5,
                ease: 'power4.inOut',
                backdropFilter: 'blur(20px)',
            });

            gsap.to(menuContentRef.current, {
                opacity: 1,
                delay: 0.7,
                duration: 0.4,
            });

            // li elementlar uchun fade-up animatsiyasi
            const liElements = menuContentRef.current?.querySelectorAll('li');
            if (liElements) {
                gsap.fromTo(
                    liElements,
                    { opacity: 0, y: 20 }, // Boshlang'ich holat
                    {
                        opacity: 1,
                        y: 0,
                        delay: 0.4, // Menyu ochilgandan keyin boshlanadi
                        duration: 0.3,
                        stagger: 0.1, // Har bir li uchun ketma-ketlik
                        ease: 'power3.out',
                    }
                );
            }
        } else {
            gsap.to(menuContentRef.current, {
                opacity: 0,
                duration: 1.3,
            });

            gsap.to(menuRef.current, {
                scale: 0,
                delay: 0.5,
                duration: 1.8,
                ease: 'power4.out',
                backdropFilter: 'blur(0px)',
            });
        }

        setMenuOpen(!menuOpen);
    };


    return (
        <nav className="flex items-center w-full z-50 bg-transparent md:h-28 h-20 md:px-0 px-6">
            <div className="relative w-full text-white flex justify-between items-center">
                <Link to="/">
                    <LazyLoadImage
                        alt="logo-site"
                        className="w-28"
                        src={SiteLogo}
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <LanguageDropdownComponent/>
                    <button
                        ref={burgerRef}
                        className="burger flex flex-col justify-between h-3 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <div className="w-10 h-0.5 bg-white"></div>
                        <div className="w-10 h-0.5 bg-white"></div>
                    </button>
                </div>

                <div
                    ref={menuRef}
                    className="fixed top-0 right-0 w-4 h-4 rounded-full scale-0 z-10"
                    style={{backdropFilter: 'blur(0px)'}} // Dastlab blur effekti yo'q
                ></div>

                <div
                    ref={menuContentRef}
                    className={`container fixed mx-auto inset-0 flex items-center justify-center opacity-0 z-10 ${menuOpen ? 'block' : 'hidden'}`}
                >
                    <div
                        className={`absolute top-12 right-4 flex flex-col justify-between cursor-pointer w-10 h-10`}
                        onClick={toggleMenu}>
                        <div
                            className={`w-8 h-0.5 bg-white transition-transform transform rotate-45 translate-y-1.5 absolute top-3 `}></div>

                        <div
                            className={`w-8 h-0.5 bg-white transition-transform transform -rotate-45 -translate-y-1.5 absolute top-6`}></div>
                    </div>
                    <ul className="list-none p-0 m-0 flex flex-col items-center gap-4">
                        <li className="text-2xl md:text-4xl xl:text-6xl text-white font-normal">
                            <Link to="/" onClick={toggleMenu}>{t('main')}</Link>
                        </li>
                        <li className="text-2xl md:text-4xl xl:text-6xl text-white font-normal">
                            <a href="#about-us" onClick={toggleMenu}>{t('about-us')}</a>
                        </li>
                        <li className="text-2xl md:text-4xl xl:text-6xl text-white font-normal">
                            <a href="#news" onClick={toggleMenu}>{t('news')}</a>
                        </li>
                        <li className="text-2xl md:text-4xl xl:text-6xl text-white font-normal">
                            <a href="#partners" onClick={toggleMenu}>{t('partners')}</a>
                        </li>
                        <li className="text-2xl md:text-4xl xl:text-6xl text-white font-normal">
                            <a href="#contacts" onClick={toggleMenu}>{t('about-team')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
