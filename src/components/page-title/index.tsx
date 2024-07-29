// @flow
// import * as React from 'react';

type Props = {
    title: string;
};

export default function Component(props: Props) {
    return (
        <div className={'flex justify-start items-center px-6 md:px-0'}>
            <h5 className={'leading-62 text-white font-bold text-5xl'}>
                {props.title}
            </h5>
        </div>
    );
};