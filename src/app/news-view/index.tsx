import {NewsSection} from "../../components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {useEffect} from "react";
import AOS from "aos";
import {getNewsDataById} from "../../redux/reducers/variable.ts";
import {useParams} from "react-router";
import ReactPlayer from "react-player";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Controller() {

    const {id} = useParams()
    const dispatch = useAppDispatch();
    const {currentNews} = useAppSelector(state => state.variables)

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        dispatch(getNewsDataById(Number(id)));
    }, [id]);

    return (
        <div className={'flex flex-col md:gap-32 gap-20'}>
            <div className={'text-white'}>
                <h2 className={'block font-bold text-center text-3xl mt-28 mb-4'}>{currentNews?.title}</h2>
                <div
                    className={'float-left lg:w-1/2 w-full md:h-[32rem] h-64 mb-4 rounded-lg overflow-hidden md:px-0 px-6 !pr-6 relative'}>
                    {currentNews && currentNews?.video ? (
                        <ReactPlayer
                            url={currentNews?.video}
                            playing
                            loop
                            controls
                            muted
                            className="react-player !w-full h-full rounded-lg static top-0"
                        />
                    ) : (
                        <LazyLoadImage
                            className={'w-full h-full object-contain object-center'}
                            src={currentNews?.image} alt={currentNews?.title}
                        />
                    )}
                </div>
                <p className={'font-normal text-lg mt-4 leading-8 indent-4 md:px-0 px-6'}>
                    {currentNews?.description}
                </p>
            </div>
            <NewsSection/>
        </div>
    );
}