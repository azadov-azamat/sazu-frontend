import {LayoutProps} from "./layout.props";
import {FooterSection, NavbarSection} from "../components";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex justify-center items-center w-full'}>
            <div className={'flex flex-col relative w-full h-auto container'}>
                <NavbarSection/>
                <main className={'w-full h-auto'}>
                    {children}
                </main>
                <div className={'absolute -z-10 bottom-0 w-56 h-52 bg-first-pattern bg-no-repeat bg-[length:225px_200px] top-1/4 md:-right-5 right-0'}/>
                <div className={'absolute -z-10 bottom-0 w-56 h-52 bg-second-pattern bg-no-repeat bg-[length:225px_200px] top-1/2 !-left-20'}/>
                <div className={'absolute -z-10 bottom-0 w-56 h-52 bg-thirty-pattern bg-no-repeat bg-[length:225px_200px] top-[60%] right-1'}/>
                <FooterSection/>
            </div>
        </div>
    );
}

export default Layout;