import {LayoutProps} from "./layout.props";
import {FooterSection, NavbarSection, VideoPlayerSection} from "../components";
import { useEffect } from 'react';
// import { gsap } from 'gsap';
import bgVideo from '../assets/background/animation-back.mp4'
import AOS from "aos";
import {useAppSelector} from "../redux/hooks.ts";

function Layout({children}: LayoutProps): JSX.Element {

    // const detailsClass= ' falling-element absolute z-[-1] bottom-0 w-56 h-52 bg-no-repeat bg-[length:225px_200px]';
    const {footer} = useAppSelector(state => state.variables)

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    // useEffect(() => {
    //     gsap.fromTo(
    //         '.falling-element',
    //         { y: -300, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 2,
    //             stagger: 0.5,
    //         }
    //     );
    // }, []);

    return (
        <div className={'flex relative w-full h-auto justify-center items-center md:px-3 px-6'}>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                autoPlay
                loop
                muted
                data-aos="fade-in"
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className={'flex flex-col relative w-full h-auto container'}>
                <NavbarSection/>
                <main className={'w-full h-auto'}>
                    {children}
                </main>
                {/*<div className={'bg-first-pattern top-[14%] right-0' + detailsClass}/>*/}
                {/*<div className={'bg-second-pattern top-[30%] !-left-20' + detailsClass}/>*/}
                {/*<div className={'bg-thirty-pattern top-[35%] right-1' + detailsClass}/>*/}
                {/*<div className={'bg-fourth-pattern bottom-[30%] left-0' + detailsClass}/>*/}
                {/*<div className={'bg-fifth-pattern bottom-[13%] right-10' + detailsClass}/>*/}
                <div className={'flex items-center md:px-0 px-6 justify-center md:mt-32 mt-20 md:mb-32 mb-20'}>
                    <VideoPlayerSection video={footer?.video || ""}/>
                </div>
                <FooterSection/>
            </div>
        </div>
    );
}

export default Layout;