// import React from 'react';

import {NewsCardComponent, PageTitleComponent} from "../index.ts";
import {useAppSelector} from "../../redux/hooks.ts";
import {trackWindowScroll} from "react-lazy-load-image-component";
import {useTranslation} from "react-i18next";

function Component({scrollPosition}: any) {

    const {t} = useTranslation()

    const {news} = useAppSelector(state => state.variables);

    return (
        <section id={'news'}>
            <PageTitleComponent title={t ('news')}/>
            <div className="flex flex-wrap gap-8 md:mt-8 mt-4 md:justify-between justify-center">
                {
                    news.slice(0, 4).map((item, index) => (<NewsCardComponent key={index} {...item} scrollPosition={scrollPosition} />))
                }
            </div>
        </section>
    );
}

export default trackWindowScroll(Component)