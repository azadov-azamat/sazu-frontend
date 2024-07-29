import {LayoutProps} from "./layout.props";
import {FooterSection, NavbarSection} from "../components";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex justify-center items-center w-full'}>
            <div className={'flex flex-col w-full h-auto container'}>
                <NavbarSection/>
                <main className={'w-full h-auto'}>
                    {children}
                </main>
                <FooterSection/>
            </div>
        </div>
    );
}

export default Layout;