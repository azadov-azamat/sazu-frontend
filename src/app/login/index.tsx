
import {AboutSection, LoginFormComponent, NewsSection, PartnersSection} from "../../components";
import {useEffect} from "react";
import AOS from "aos";
import {Link} from "react-router-dom";

export default function Controller() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={'flex flex-col md:gap-32 gap-20'}>
            <div className="min-h-screen flex items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Login</h2>
                    <LoginFormComponent/>
                    <p className="mt-4 text-center text-gray-700">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-purple-800 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
            <AboutSection/>
            <PartnersSection/>
            <NewsSection/>

            <div>

            </div>
        </div>
    );
}