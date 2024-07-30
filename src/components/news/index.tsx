// import React from 'react';

import {NewsCardComponent, PageTitleComponent} from "../index.ts";
import {useAppSelector} from "../../redux/hooks.ts";
import {trackWindowScroll} from "react-lazy-load-image-component";

function Component({scrollPosition}: any) {
    const {news} = useAppSelector(state => state.variables);

    return (
        <section>
            <PageTitleComponent title={"Новости"}/>
            <div className="flex flex-wrap gap-8 mt-8 md:justify-between justify-center">
                {
                    news.map((item, index) => (<NewsCardComponent key={index} {...item} scrollPosition={scrollPosition} />))
                }
            </div>
        </section>
    );
}

export default trackWindowScroll(Component)