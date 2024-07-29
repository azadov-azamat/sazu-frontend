// import React from 'react';

import {NewsCardComponent, PageTitleComponent} from "../index.ts";
import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {
    const {news} = useAppSelector(state => state.variables);

    return (
        <section>
            <PageTitleComponent title={"Новости"}/>
            <div className="flex flex-wrap gap-8 mt-8 md:justify-between justify-center">
                {
                    news.map((item, index) => (<NewsCardComponent key={index} {...item} />))
                }
            </div>
        </section>
    );
}