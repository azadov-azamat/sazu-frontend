// import React from 'react';

import ReactPlayer from "react-player";

export default function Component({video, autoplay = true, controls = false}: {video: string, autoplay?: boolean, controls?: boolean}) {

    return (
        <section className="video-wrapper xl:w-[850px] md:w-[700px] w-full xl:h-[450px] md:[350px] sm:h-80 h-[280px] rounded-lg overflow-hidden">
            <ReactPlayer
                url={video}
                playing={autoplay}
                loop
                controls={controls}
                muted
                width="100%"
                height="100%"
                className="react-player w-full h-full rounded-lg"
            />
        </section>
    );
}