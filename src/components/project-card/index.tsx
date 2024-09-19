import {projectsDataKey} from "../../interface/redux/variable.interface.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useRef, useState, useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props extends projectsDataKey {
    total: number;
    index: number;
}

export default function Component(item: Props) {
    const cardRef = useRef(null);
    const [width] = useState('85%'); // Default width

    useEffect(() => {
        gsap.fromTo(cardRef.current,
            { scale: 0.8, y: 60, opacity: 0 },
            {
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.in",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
            duration: 0.5,
            width: `calc(${width} + 50px)`,
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{width: width, }}
            className={`card-${item.index} shadow-md hover:!z-50 transition-transform duration-500  border-none
             flex bg-white rounded-l-[33px] rounded-r-[34px] items-center 2xl:h-[260px] xl:h-[240px] md:h-60 h-44 relative pl-14`}
        >
            <LazyLoadImage
                className={'md:static absolute 2xl:w-60 xl:w-56 md:w-52 object-cover object-center top-0 right-[32%] z-10'}
                alt={"project-card-icon-" + item.id}
                src={item.icon}
            />
            <div className={'w-full md:w-1/2 h-full absolute top-0 right-0 object-contain object-center '}>
                <LazyLoadImage
                    className={'w-full rounded-r-[33px] h-full object-cover object-center blur-sm md:blur-none'}
                    alt={"project-card-image-" + item.id}
                    src={item.image}
                />
            </div>
        </a>
    );
};
