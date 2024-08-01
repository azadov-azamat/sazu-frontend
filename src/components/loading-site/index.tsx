import {useEffect} from 'react';
import gsap from 'gsap';
import logo from '../../assets/sazu/loading.png';
import {useAppDispatch} from "../../redux/hooks.ts";
import {
    getAboutData,
    getCarouselData, getFooterData,
    getPartnersData,
    getSazusData,
    getStaffsData
} from "../../redux/reducers/variable.ts";

export default function Component() {

    const dispatch = useAppDispatch();

    useEffect( () => {
         fetchApies()
    }, []);

    useEffect(() => {
        gsap.fromTo(
            ".background-fill",
            {bottom: '1px', height: 0},
            {bottom: '1px', height: "98%", duration: 5, ease: "power1.inOut"}
        );
    }, []);

    async function fetchApies(){
        await Promise.all([
            dispatch(getCarouselData()),
            dispatch(getAboutData()),
            dispatch(getSazusData()),
            dispatch(getPartnersData()),
            dispatch(getStaffsData()),
            dispatch(getFooterData()),
        ])
    }

    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
            <div className={'relative w-96 h-80'}>
                <div className="absolute bg-primary-purple w-[98%] left-1 bottom-1 background-fill z-0"
                     style={{position: 'absolute'}}/>
                <img src={logo} alt="Example" className="absolute w-96 h-80 z-10"/>
            </div>
        </div>
    );
}
