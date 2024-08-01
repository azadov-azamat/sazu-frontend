import {LayoutProps} from "./layout.props";
import {FooterSection, NavbarSection} from "../components";
import { useEffect } from 'react';
import { gsap } from 'gsap';

function Layout({children}: LayoutProps): JSX.Element {

    const detailsClass= ' falling-element absolute -z-10 bottom-0 w-56 h-52 bg-no-repeat bg-[length:225px_200px]';

    useEffect(() => {
        gsap.fromTo(
            '.falling-element',
            { y: -300, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                stagger: 0.5,
            }
        );
    }, []);

    return (
        <div className={'flex justify-center items-center w-full'}>
            <div className={'flex flex-col relative w-full h-auto container'}>
                <NavbarSection/>
                <main className={'w-full h-auto'}>
                    {children}
                </main>
                <div className={'bg-first-pattern top-[14%] right-0' + detailsClass}/>
                <div className={'bg-second-pattern top-[30%] !-left-20' + detailsClass}/>
                <div className={'bg-thirty-pattern top-[35%] right-1' + detailsClass}/>
                <div className={'bg-fourth-pattern bottom-[30%] left-0' + detailsClass}/>
                <div className={'bg-fifth-pattern bottom-[13%] right-10' + detailsClass}/>
                <FooterSection/>
            </div>
        </div>
    );
}

export default Layout;