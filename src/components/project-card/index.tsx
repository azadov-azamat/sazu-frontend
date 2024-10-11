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
    const [width, setWidth] = useState('85%'); // Default width
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setWidth('100%');
                setIsMobile(true);
            } else {
                setWidth('85%');
                setIsMobile(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
       if (!isMobile) {
           gsap.to(cardRef.current, {
               duration: 0.5,
               width: `calc(${width} + 50px)`,
               boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
           });
       }
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
             flex bg-white rounded-l-[25px] md:rounded-l-[33px] rounded-r-[25px] md:rounded-r-[34px] items-center 
             2xl:h-[260px] xl:h-[240px] md:h-60 sm:h-44 h-32 relative `}
        >
            <div className={'w-1/2 md:w-1/3 flex items-center justify-center'}>
                <LazyLoadImage
                    className={'2xl:w-60 xl:w-56 md:w-52 sm:w-44 w-32 object-cover object-center'}
                    alt={"project-card-icon-" + item.id}
                    src={item.icon}
                />
            </div>
            <div className={'w-1/2 md:w-2/3 h-full absolute top-0 right-0 object-contain object-center '}>
                <LazyLoadImage
                    className={'w-full rounded-[24px] h-full object-cover object-center'}
                    alt={"project-card-image-" + item.id}
                    src={isMobile ? item.image_mobile : item.image}
                />
            </div>
        </a>
    );
};