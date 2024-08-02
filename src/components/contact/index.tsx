// import React from 'react';

import {ContactCardComponent, PageTitleComponent} from "../index.ts";
import {useAppSelector} from "../../redux/hooks.ts";
import {motion} from 'framer-motion';
import {contactDataKey} from "../../interface/redux/variable.interface.ts";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Component() {

    const {t} = useTranslation()

    const {contacts} = useAppSelector(state => state.variables);

    const [selectedProfile] = useState<null | contactDataKey>(contacts && contacts?.boss);

    return (
        <section id={'contacts'}>
            <PageTitleComponent title={t('contacts')} className={'justify-center'}/>
            <div>
                {selectedProfile && (
                    <motion.div
                        initial={{opacity: 0, y: -200}}
                        animate={{opacity: 1, y: 0}}
                        className="md:w-[700px] w-full xl:h-[490px] md:h-[350px] h-auto flex sm:flex-row flex-col items-center gap-8 p-8 mx-auto mt-8"
                    >
                        <LazyLoadImage
                            loading={'lazy'}
                            src={selectedProfile.image}
                            alt={selectedProfile.name}
                            className="w-96 h-full object-cover object-center rounded-lg mb-4 transition-transform duration-500 ease-in-out hover:scale-95"
                        />
                        <div className={'w-auto flex flex-col justify-center h-full'}>
                            <h3 className="text-4xl font-bold text-white">{selectedProfile.name}</h3>
                            <h4 className="text-2xl text-gray-400 my-4">{selectedProfile.profession}</h4>
                            <p className="text-gray-400 text-base">{selectedProfile.text}</p>
                        </div>
                    </motion.div>
                )}
            </div>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:px-6 px-6 mt-8"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
            >
                {contacts && contacts?.workers.map((profile: contactDataKey, index: number) => (
                    <ContactCardComponent
                        key={index}
                        {...profile}
                    />
                ))}
            </motion.div>
        </section>
    );
}