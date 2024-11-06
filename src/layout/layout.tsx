import {LayoutProps} from "./layout.props";
import {FooterSection, NavbarSection, VideoPlayerSection} from "../components";
import { useEffect } from 'react';
import bgVideo from '../assets/background/animation-back.mp4'
import AOS from "aos";
import {useAppSelector} from "../redux/hooks.ts";

function Layout({children}: LayoutProps): JSX.Element {

    const {footer} = useAppSelector(state => state.variables)

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <div className={'flex relative w-full h-auto justify-center items-center md:px-3 px-4 1024-1100:px-12 1280-1380:px-14 1535-1650:px-16'}>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                autoPlay
                loop
                muted
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className={'flex flex-col relative w-full h-auto container'}>
                <NavbarSection/>
                <main className={'w-full h-auto'}>
                    {children}
                </main>
                <div className={'flex items-center md:px-0 px-6 justify-center md:mt-32 sm:mt-20 mt-16'}>
                    <VideoPlayerSection video={footer?.video || ""}/>
                </div>
                <FooterSection/>
            </div>
        </div>
    );
}

export default Layout;