import {AboutSection, NewsSection, PartnersSection, RegisterFormComponent} from "../../components";
import {useEffect} from "react";
import AOS from "aos";
import {Link} from "react-router-dom";

export default function Controller() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={'flex flex-col md:gap-32 gap-20'}>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Register</h2>
                    <RegisterFormComponent/>
                    <p className="mt-4 text-center text-gray-700">
                        Already have an account?{' '}
                        <Link to="/login" className="text-purple-800 hover:underline">
                            Login
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