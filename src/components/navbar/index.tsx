// import React from 'react';
import SiteLogo from '../../assets/site-logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Component() {
    return (
        <nav className={'absolute z-10 bg-transparent mt-9 px-6'}>
            <LazyLoadImage
                alt={"logo-site"}
                src={SiteLogo} />

            <div className={'flex gap-4'}>

            </div>
        </nav>
    );
}