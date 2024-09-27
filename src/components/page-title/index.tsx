// @flow
// import * as React from 'react';

type Props = {
    title: string;
    className?: string;
};

export default function Component(props: Props) {
    return (
        <div className={`flex justify-start ${props.className} items-center`}>
            <h3 className={'leading-62 text-white font-bold xl:text-5xl md:text-3xl text-2xl'}>
                {props.title}
            </h3>
        </div>
    );
};