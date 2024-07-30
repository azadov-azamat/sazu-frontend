// @flow
// import * as React from 'react';

type Props = {
    title: string;
    className?: string;
};

export default function Component(props: Props) {
    return (
        <div className={`flex justify-start ${props.className} items-center px-6 md:px-0`}>
            <h5 className={'leading-62 text-white font-bold xl:text-5xl md:text-3xl text-2xl'}>
                {props.title}
            </h5>
        </div>
    );
};