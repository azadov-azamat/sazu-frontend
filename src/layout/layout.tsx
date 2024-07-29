import {LayoutProps} from "./layout.props";
// import Footer from "../components/footer";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex w-full h-auto'}>
            <main
                className={'w-full h-auto bg-white transition-transform duration-500 p-4'}>{children}</main>
        </div>
    );
}

export default Layout;