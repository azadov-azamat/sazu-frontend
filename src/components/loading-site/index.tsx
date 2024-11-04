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

export default function Component({setLoading}: { setLoading: any }) {

    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        fetchApis()
    }, []);

    useEffect(() => {
        gsap.fromTo(
            ".background-fill",
            {bottom: '1px', height: 0, delay: 2},
            {bottom: '1px', height: "98%", duration: 5, ease: "power1.inOut", repeat: -1}
        );
    }, []);

    const fetchDataWithCache = async (key: string, fetchFunc: () => Promise<object>) => {
        const cachedData = sessionStorage.getItem(key);

        if (cachedData) {
            let data = JSON.parse(cachedData);
            dispatch(data);
        } else {
            const data = await fetchFunc();
            sessionStorage.setItem(key, JSON.stringify(data));
            return data;
        }
    };


    const fetchApis = async () => {
        try {
            let results = await Promise.allSettled([
                fetchDataWithCache('carousel', () => dispatch(getCarouselData())),
                fetchDataWithCache('about', () => dispatch(getAboutData())),
                fetchDataWithCache('sazus', () => dispatch(getSazusData())),
                fetchDataWithCache('partners', () => dispatch(getPartnersData())),
                fetchDataWithCache('staffs', () => dispatch(getStaffsData())),
                fetchDataWithCache('footer', () => dispatch(getFooterData())),
            ]);

            const allRejected = results.every(result => result.status === 'rejected');
            if (allRejected) {
                console.error("Some requests were not fulfilled.");
            } else {
                setTimeout(()=>{
                    setLoading(false);
                }, 2800)
            }
        } catch (e) {
            console.error("error", e);
            setLoading(true);
        }
    };

    return (
        <div className="relative w-full h-screen bg-white flex items-center justify-center">
            <div className={'relative md:w-96 md:h-80 w-64 h-60'}>
                <div className="absolute bg-primary-purple w-[98%] left-1 bottom-1 background-fill z-0"/>
                <img rel="preload" src={logo} alt="loading-with-border-image"
                     className="absolute md:w-96 md:h-80 w-64 h-60 z-10"/>
            </div>
        </div>
    );
}
