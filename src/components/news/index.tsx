// import React from 'react';

import {NewsCardComponent, PageTitleComponent} from "../index.ts";
import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {
    const {news} = useAppSelector(state => state.variables);

    return (
        <section>
            <PageTitleComponent title={"Новости"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {
                    news.map((item, index) => (<NewsCardComponent key={index} {...item} />))
                }
            </div>
        </section>
    );
}