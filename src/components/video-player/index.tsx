// import React from 'react';

import ReactPlayer from "react-player";

export default function Component() {

    return (
        <section className="video-wrapper xl:w-[850px] md:w-[700px] w-full xl:h-[450px] md:[350px] h-96 md:px-0 px-6 rounded-lg overflow-hidden">
            <ReactPlayer
                url={"https://youtu.be/uv1IRvbCC6Q?si=EByqTlVIp0nIKVp4"}
                playing={true}
                loop
                controls={false}
                muted
                width="100%"
                height="100%"
                className="react-player"
            />
        </section>
    );
}