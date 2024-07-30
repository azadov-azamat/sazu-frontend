// import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {LazyLoadImage} from "react-lazy-load-image-component";
import SiteLogo from "../../assets/site-logo.png";
import {Link} from "react-router-dom";

import instagram from '../../assets/icons/instagram.png';
import telegram from '../../assets/icons/telegram.png';
import facebook from '../../assets/icons/facebook.png';

export default function Component() {

    const { ref: footerRef, inView: footerInView } = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    return (
        <div className={'md:h-56 h-72'}>
            <div className="relative">
                {/* Trigger Element: sahifa oxiriga yetganda */}
                <div ref={footerRef} className="absolute bottom-0 left-0 w-full h-1"></div>

                <motion.div
                    initial={{y: '100%'}}
                    animate={{y: footerInView ? '0%' : '100%'}}
                    transition={{duration: 1}}
                    className="text-white p-8 fixed bottom-0 left-0 w-full"
                >
                    <div className="container mx-auto flex md:flex-col flex-row md:items-start items-end md:justify-start justify-between">
                        <Link to={'/'} className={'hidden md:flex'}>
                            <LazyLoadImage
                                alt={"logo-site"}
                                className={'w-28'}
                                src={SiteLogo}/>
                        </Link>
                        <div className="mt-16 flex md:flex-row flex-col justify-start md:items-center items-start md:gap-40 gap-10">
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-purple-700 text-xl">Адрес</span>
                                <span>Улица Нукусская, 48 Ташкент, Узбекистан</span>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-purple-700 text-xl">Телефон номер</span>
                                <a href={'tel:95 313 33 33'}>95 313 33 33</a>
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <span className="text-purple-700 text-xl">Соц. сети</span>
                                <div className={'flex items-center gap-3'}>
                                    <a href="#"><img  src={telegram} alt="telegram-icon" className={'w-9'}/></a>
                                    <a href="#"><img  src={instagram} alt="instagram-icon" className={'w-9'}/></a>
                                    <a href="#"><img  src={facebook} alt="facebook-icon" className={'w-9'}/></a>
                                </div>
                            </div>
                        </div>
                        <Link to={'/'} className={'flex md:hidden'}>
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