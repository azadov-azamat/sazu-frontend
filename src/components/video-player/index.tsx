// import React from 'react';

import ReactPlayer from "react-player";
import {footerDataKeys} from "../../interface/redux/variable.interface.ts";

export default function Component(item: footerDataKeys) {

    return (
        <section className="video-wrapper xl:w-[850px] md:w-[700px] w-full xl:h-[450px] md:[350px] h-96 rounded-lg overflow-hidden">
            <ReactPlayer
                url={item.video}
                playing={true}
                loop
                controls={false}
                muted
                width="100%"
                height="100%"
                className="react-player w-full h-full rounded-lg"
            />
        </section>
    );
}