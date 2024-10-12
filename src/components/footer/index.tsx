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
    const {footer} = useAppSelector(state => state.variables);

    const {ref: footerRef, inView: footerInView} = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    return (
        <div className={'md:h-60 sm:h-[28rem] lg:h-[16rem] h-[20rem]'}>
            <div className="relative w-full h-full">
                <div ref={footerRef} className="absolute  -bottom-40 h-[3rem] left-0 w-full"></div>

                <motion.div
                    initial={{y: '100%'}}
                    animate={{y: footerInView ? '0%' : '100%'}}
                    transition={{duration: 0.7}}
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
                            className="2xl:mt-16 mt-20 w-full flex md:flex-row flex-col flex-wrap justify-start md:items-center
                            items-start lg:gap-40 2xl:gap-32 sm:gap-10 gap-5">
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-primary-purple text-xl">{t('address')}</span>
                                <a href={footer?.address_link}
                                   target={'_blank'}>{footer?.address}</a>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <span className="text-primary-purple text-xl">{t('phone-number')}</span>
                                <a href={`tel:${footer?.phone_number}`}>{footer?.phone_number}</a>
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <span className="text-primary-purple text-xl">{t('social-network')}</span>
                                <div className={'flex items-center gap-3'}>
                                    <a target={'_blank'} href={footer?.telegram_link}>
                                        <img loading={'lazy'} src={telegram} alt="telegram-icon" className={'w-9'}/>
                                    </a>
                                    <a href={footer?.instagram_link} target={'_blank'}>
                                        <img src={instagram} alt="instagram-icon" className={'w-9'}/>
                                    </a>
                                    <a href={footer?.facebook_link} target={'_blank'}>
                                        <img src={facebook} alt="facebook-icon" className={'w-9'}/>
                                    </a>
                                </div>
                            </div>
                            <div className={'md:w-auto lg:hidden 2xl:flex w-full h-full flex md:items-end items-start'}>
                                <FormFooter/>
                            </div>
                        </div>
                        <Link to={'/'}
                              className={'flex absolute md:bottom-0 md:top-auto bottom-auto top-0 left-0 md:hidden'}>
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