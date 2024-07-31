// import React from 'react';

import {ContactCardComponent, PageTitleComponent} from "../index.ts";
import {useAppSelector} from "../../redux/hooks.ts";
import { motion } from 'framer-motion';
import {contactCardDataProps} from "../../interface/redux/variable.interface.ts";
import {useState} from "react";

export default function Component() {


    const {contacts} = useAppSelector(state => state.variables);

    const [selectedProfile, setSelectedProfile] = useState<null | contactCardDataProps>(contacts[0]);

    return (
        <section>
            <PageTitleComponent title={"Контакты"} className={'justify-center'}/>
            <div>
                {selectedProfile && (
                    <motion.div
                        initial={{opacity: 0, y: -200}}
                        animate={{opacity: 1, y: 0}}
                        className="md:w-[700px] w-full xl:h-[490px] md:h-[350px] h-auto flex sm:flex-row flex-col items-center gap-8 p-8 mx-auto mt-8"
                    >
                        <img src={selectedProfile.image} alt={selectedProfile.name}
                             className="w-96 h-full object-cover object-center rounded-lg mb-4 transition-transform duration-500 ease-in-out hover:scale-95"/>
                        <div className={'w-auto flex flex-col justify-center h-full'}>
                            <h2 className="text-4xl font-bold text-white">{selectedProfile.name}</h2>
                            <h4 className="text-2xl text-gray-400 my-4">{selectedProfile.position}</h4>
                            <p className="text-gray-400 text-base">{selectedProfile.description}</p>
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
                {contacts.map((profile: contactCardDataProps, index: number) => (
                    <ContactCardComponent
                        key={index}
                        image={profile.image}
                        name={profile.name}
                        position={profile.position}
                        description={profile.description}
                        onSelect={() => setSelectedProfile(profile)}
                    />
                ))}
            </motion.div>
        </section>
    );
}