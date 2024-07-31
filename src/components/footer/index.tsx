import React from 'react';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {LazyLoadImage} from "react-lazy-load-image-component";
import SiteLogo from "../../assets/site-logo.png";
import {Link} from "react-router-dom";

import instagram from '../../assets/icons/instagram.png';
import telegram from '../../assets/icons/telegram.png';
import facebook from '../../assets/icons/facebook.png';
import {useTranslation} from "react-i18next";

export default function Component() {

    const {t} = useTranslation();
    const {ref: footerRef, inView: footerInView} = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // @ts-ignore
        const email = e.target[0].value;

        console.log('Subscribed with email:', email);
    }

    return (
        <div className={'md:h-56 h-72'}>
            <div className="relative">
                {/* Trigger Element: sahifa oxiriga yetganda */}
                <div ref={footerRef} className="absolute bottom-0 left-0 w-full h-1"></div>

                <motion.div
                    initial={{y: '100%'}}
                    animate={{y: footerInView ? '0%' : '100%'}}
                    transition={{duration: 1}}
                    className="text-white p-8 fixed bottom-0 left-0 w-full bg-[#141313]"
                >
                    <div
                        className="container relative mx-auto flex md:flex-col flex-row md:items-start items-end md:justify-start justify-between">
                        <Link to={'/'} className={'hidden md:flex'}>
                            <LazyLoadImage
                                alt={"logo-site"}
                                className={'w-28'}
                                src={SiteLogo}/>
                        </Link>
                        <div
                            className="mt-16 w-full flex md:flex-row flex-col flex-wrap justify-start md:items-center items-start md:gap-40 gap-10">
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-purple-700 text-xl">{t('address')}</span>
                                <span>Улица Нукусская, 48 Ташкент, Узбекистан</span>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-purple-700 text-xl">{t('phone-number')}</span>
                                <a href={'tel:95 313 33 33'}>+998 95 313 33 33</a>
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <span className="text-purple-700 text-xl">{t('social-network')}</span>
                                <div className={'flex items-center gap-3'}>
                                    <a href="#"><img src={telegram} alt="telegram-icon" className={'w-9'}/></a>
                                    <a href="#"><img src={instagram} alt="instagram-icon" className={'w-9'}/></a>
                                    <a href="#"><img src={facebook} alt="facebook-icon" className={'w-9'}/></a>
                                </div>
                            </div>
                            <div className={'md:w-auto w-full h-full flex md:items-end items-start'}>
                                <form onSubmit={handleSubscribe}
                                      className="w-full flex flex-wrap md:flex-nowrap gap-2">
                                    <input
                                        type="email"
                                        className="xl:w-60 flex-1 sm:flex-auto md:w-52 w-auto px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-800 text-primary-black"
                                        placeholder={t('enter-email')}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-purple-700 sm:flex-auto flex-1 text-white px-4 py-2 rounded-md"
                                    >
                                        {t('subscribe')}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <Link to={'/'} className={'flex absolute sm:bottom-0 sm:top-auto bottom-auto top-0 right-0 md:hidden'}>
                            <LazyLoadImage
                                alt={"logo-site"}
                                className={'w-28'}
                                src={SiteLogo}/>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}