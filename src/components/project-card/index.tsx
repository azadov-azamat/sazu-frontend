// @flow
// import * as React from 'react';

import {projectsDataKey} from "../../interface/redux/variable.interface.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useEffect, useRef, useState} from "react";
import gsap from 'gsap';

interface Props extends projectsDataKey {
    total: number;
    index: number;
}

export default function Component(item: Props) {
    const cardRef = useRef(null);
    const [width, setWidth] = useState('770px'); // Default width
    const [squareSize, setSquareSize] = useState<number>(115); // Default width

    const updateWidth = () => {
        if (window.innerWidth >= 1536) {
            setWidth('900px');
        } else if (window.innerWidth >= 1280) {
            setWidth('830px');
        } else if (window.innerWidth >= 768) {
            setWidth('660px');
        } else {
            setSquareSize(65);
            setWidth('90%');
        }
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
            y: -50,
            duration: 0.5,
            width: `calc(${width} + 30px)`,  // Increase width by 30px on hover
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            y: 0,
            width: width,
            duration: 0.5,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        });
    };

    return (
        <a
            href={item.link}
            target={'_blank'}
            ref={cardRef}
            data-aos="zoom-in-down"
            data-aos-duration={item.index + '000'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ top: `${item.index * squareSize}px`, zIndex: (item.index * (-1)) + 20, width: width, }}
            className={`card-${item.index} shadow-md hover:!z-50 transition-transform duration-500 absolute
             flex items-center justify-center bg-white rounded-3xl 2xl:h-[280px] xl:h-[260px] md:h-64 h-40`}
        >
            <LazyLoadImage
                className={'2xl:w-60 xl:w-56 md:w-52 lg:w-44 w-36 object-cover object-center'}
                alt={"project-card-image"}
                src={item.icon}
            />
        </a>
    );
};