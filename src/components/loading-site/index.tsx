import { useEffect } from 'react';
import gsap from 'gsap';
import logo from '../../assets/sazu/loading.png';

export default function Component() {

    useEffect(() => {
        gsap.fromTo(
            ".background-fill",
            { bottom: '1px', height: 0 },
            { bottom: '1px', height: "98%", duration: 5, ease: "power1.inOut" }
        );
    }, []);


    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
            <div className={'relative w-96 h-80'}>
                <div className="absolute bg-white w-[98%] left-1 bottom-1 background-fill z-0" style={{position: 'absolute'}}/>
                <img src={logo} alt="Example" className="absolute w-96 h-80 z-10"/>
            </div>
        </div>
    );
}
