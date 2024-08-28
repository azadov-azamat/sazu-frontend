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
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {createSubscribe} from "../../redux/reducers/variable.ts";

export default function Component() {

    const {t} = useTranslation();

    const {ref: footerRef, inView: footerInView} = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    return (
        <div className={'md:h-56 sm:h-80 h-[25rem]'}>
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
                        className="container relative mx-auto flex md:flex-col flex-row md:items-start items-end
                         md:justify-start justify-between">
                        <Link to={'/'} className={'hidden md:flex'}>
                            <LazyLoadImage
                                loading={'lazy'}
                                alt={"logo-site"}
                                className={'w-28'}
                                src={SiteLogo}/>
                        </Link>
                        <div
                            className="2xl:mt-16 mt-10 w-full flex md:flex-row flex-col flex-wrap justify-start md:items-center
                            items-start lg:gap-40 2xl:gap-32 gap-10">
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-primary-purple text-xl">{t('address')}</span>
                                <a href={'https://yandex.uz/maps/10335/tashkent/house/YkAYdAJmTkwDQFprfX55cH9qYg==/?ll=69.256794%2C41.281396&z=17'} target={'_blank'}>{t ('address-company')}</a>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-primary-purple text-xl">{t('phone-number')}</span>
                                <a href={'tel:95 313 33 33'}>+998 95 313 33 33</a>
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <span className="text-primary-purple text-xl">{t('social-network')}</span>
                                <div className={'flex items-center gap-3'}>
                                    <a target={'_blank'} href="https://t.me/+nBdEWxV0oMYxNDZi">
                                        <img loading={'lazy'} src={telegram} alt="telegram-icon" className={'w-9'}/>
                                    </a>
                                    <a href="https://www.instagram.com/sazu_uz" target={'_blank'}>
                                        <img src={instagram} alt="instagram-icon" className={'w-9'}/>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61557165297636&mibextid=ZbWKwL">
                                        <img src={facebook} alt="facebook-icon" className={'w-9'}/>
                                    </a>
                                </div>
                            </div>
                            <div className={'md:w-auto lg:hidden 2xl:flex w-full h-full flex md:items-end items-start'}>
                                <FormFooter/>
                            </div>
                        </div>
                        <Link to={'/'}
                              className={'flex absolute md:bottom-0 md:top-auto bottom-auto top-0 right-0 md:hidden'}>
                            <LazyLoadImage
                                loading={'lazy'}
                                alt={"logo-site"}
                                className={'w-28'}
                                src={SiteLogo}/>
                        </Link>
                        <div className={'lg:flex 2xl:hidden hidden mt-10'}>
                            <FormFooter/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export function FormFooter() {

    const {t} = useTranslation();
    const dispatch = useAppDispatch()
    const {subscribeLoading} = useAppSelector(state => state.variables)

    async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // @ts-ignore
        const email = e.target[0].value;

        await dispatch(createSubscribe({email}));
        // @ts-ignore
        e.target[0].value = ''
    }

    return (
        <form onSubmit={handleSubscribe}
              className="w-full flex flex-wrap md:flex-nowrap gap-2">
            <input
                type="email"
                className="xl:w-60 flex-1 sm:flex-auto md:w-52 w-auto px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-purple text-primary-black"
                placeholder={t('enter-email')}
                required
            />
            <button
                type="submit"
                disabled={subscribeLoading}
                className="bg-primary-purple sm:flex-auto flex-1 text-white px-4 py-2 rounded-md"
            >
                {t('subscribe')}
            </button>
        </form>
    )
}