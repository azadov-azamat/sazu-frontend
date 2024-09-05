import {useEffect, useLayoutEffect} from 'react';
import gsap from 'gsap';
import logo from '../../assets/sazu/loading-with-border.png';
import {useAppDispatch} from "../../redux/hooks.ts";
import {
    getAboutData,
    getCarouselData, getFooterData,
    getPartnersData,
    getSazusData,
    getStaffsData
} from "../../redux/reducers/variable.ts";

export default function Component({setLoading}: {setLoading: any}) {

    const dispatch = useAppDispatch();

    useLayoutEffect( () => {
        fetchApies()
    }, []);

    useEffect(() => {
        gsap.fromTo(
            ".background-fill",
            {bottom: '1px', height: 0},
            {bottom: '1px', height: "98%", duration: 5, ease: "power1.inOut", repeat: -1 }
        );
    }, []);

    async function fetchApies() {
        try {
            let results = await Promise.all([
                dispatch(getCarouselData()),
                dispatch(getAboutData()),
                dispatch(getSazusData()),
                dispatch(getPartnersData()),
                dispatch(getStaffsData()),
                dispatch(getFooterData()),
            ]);

            const allRejected = results.every(result => {
                return (result as any).error?.message === 'Rejected';
            });

            if (allRejected) {
                console.error("Some requests were not fulfilled.");
            } else {
                setTimeout(()=>{
                    setLoading(false);
                }, 2500)
            }
        } catch (e) {
            console.log("error", e)
            setLoading(true);
        }
    }

    return (
        <div className="relative w-full h-screen bg-white flex items-center justify-center">
            <div className={'relative md:w-96 md:h-80 w-64 h-60'}>
                <div className="absolute bg-primary-purple w-[98%] left-1 bottom-1 background-fill z-0"/>
                <img src={logo} alt="Example" className="absolute md:w-96 md:h-80 w-64 h-60 z-10"/>
            </div>
        </div>
    );
}
