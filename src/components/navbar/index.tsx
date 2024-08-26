import SiteLogo from '../../assets/site-logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useRef } from "react";
import { gsap } from 'gsap';
import { LanguageDropdownComponent } from "../index.ts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        const menuElement = menuRef.current;
        const burgerElement = burgerRef.current!; // Non-null assertion operator

        if (menuElement && burgerElement) {
            // Get the position of the burger icon
            const burgerRect = burgerElement.getBoundingClientRect();

            const tl = gsap.timeline();

            if (!isOpen) {
                // Set the initial position and shape (circle wrapping around the burger icon)
                tl.set(menuElement, {
                    x: burgerRect.left, // Position the menu where the burger icon is
                    y: burgerRect.top,  // Position the menu where the burger icon is
                    width: `${burgerRect.width}px`,
                    height: `${burgerRect.height}px`,
                    borderRadius: '50%',
                    display: 'block',
                    opacity: 1,
                    position: 'fixed', // Ensure it's fixed to the viewport
                    transformOrigin: 'center center',
                });

                // Hide menu items initially
                gsap.set('.menu-list li', { opacity: 0 });

                // Animate the expansion diagonally towards the bottom-left corner
                tl.to(menuElement, {
                    duration: 1.5,
                    x: 0, // Move to the left side of the screen
                    y: 0, // Move to the top of the screen
                    width: '100vw', // Full viewport width
                    height: '100vh', // Full viewport height
                    borderRadius: '0%', // Smoothly transition to 0%
                    ease: 'power2.out',
                    backdropFilter: 'blur(10px)',
                    onComplete: () => {
                        // Fade-up animation for menu items after the menu has expanded
                        gsap.fromTo(
                            '.menu-list li',
                            { y: 50, opacity: 0 }, // Start below and invisible
                            {
                                y: 0, // Move to natural position
                                opacity: 1, // Fade in
                                duration: 0.8, // Duration of animation
                                ease: 'power3.out', // Ease for a smooth effect
                                stagger: 0.1, // Stagger the appearance of the items
                            }
                        );
                    },
                });
            } else {
                // Animate the collapse back into a small circle at the burger icon position
                tl.to('.menu-list li', {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                })
                    .to(menuElement, {
                        duration: 1.5,
                        x: burgerRect.left, // Move back to the burger icon position
                        y: burgerRect.top,
                        width: `${burgerRect.width}px`,
                        height: `${burgerRect.height}px`,
                        borderRadius: '50%',
                        opacity: 0,
                        ease: 'power2.in',
                        display: 'none',
                        backdropFilter: 'blur(0px)',
                    });
            }
        }
    };

    return (
        <nav className="absolute w-full flex justify-between items-center z-50 bg-transparent mt-9 px-6">
            <Link to="/">
                <LazyLoadImage
                    alt="logo-site"
                    className="w-28"
                    src={SiteLogo}
                />
            </Link>
            <div className="flex items-center gap-4">
                <LanguageDropdownComponent />
                <div
                    ref={burgerRef}
                    className="burger flex flex-col justify-between h-3 cursor-pointer z-[1000]"
                    onClick={toggleMenu}
                >
                    <div className="w-10 h-0.5 bg-white"></div>
                    <div className="w-10 h-0.5 bg-white"></div>
                </div>
            </div>

            {/* Overlay Menu */}
            <div
                ref={menuRef}
                className={`menu z-[1000] fixed inset-0 bg-gray-300 bg-opacity-50 backdrop-blur transform ${isOpen ? 'flex justify-center' : 'hidden'}`}
            >
                <div className="container mx-auto relative flex items-center justify-center h-full">
                    <div
                        className={`absolute top-12 right-4 flex flex-col justify-between cursor-pointer w-10 h-10`}
                        onClick={toggleMenu}>
                        <div
                            className={`w-8 h-0.5 bg-white transition-transform transform rotate-45 translate-y-1.5 absolute top-3 `}></div>

                        <div
                            className={`w-8 h-0.5 bg-white transition-transform transform -rotate-45 -translate-y-1.5 absolute top-6`}></div>
                    </div>

                    <ul className="menu-list list-none p-0 m-0 flex flex-col items-center gap-4">
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
                            <a href="#contacts" onClick={toggleMenu}>{t('contacts')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
