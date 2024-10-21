import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {useEffect, useState} from "react";
import AOS from "aos";
import {getNewsData, getNewsDataById} from "../../redux/reducers/variable.ts";
import ReactPlayer from "react-player";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useTranslation} from "react-i18next";
import {NewsCardComponent, PageTitleComponent} from "../../components";
import {trackWindowScroll} from "react-lazy-load-image-component";
import ReactPaginate from "react-paginate";
import {useParams} from "react-router"; 
import { useSearchParams } from "react-router-dom";

function Controller({scrollPosition}: any) {

    const {t} = useTranslation()
    const {id} = useParams()
    const dispatch = useAppDispatch();
    const {currentNews, news, totalCount} = useAppSelector(state => state.variables)
    const [searchParams, setSearchParams] = useSearchParams();
    const queryPage = searchParams.get("page");

    const [page, setPage] = useState<number>(queryPage ? Number(queryPage) : 1);
    const pageSize = 4;

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        dispatch(getNewsDataById(Number(id)));
    }, [id]);

    useEffect(()=>{
        dispatch(getNewsData({page, page_size: pageSize}));
        setSearchParams({ page: String(page) });
    }, [page]);

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1); 
    };

    return (
        <div className={'flex flex-col md:gap-32 gap-20'}>
            <div className={'text-white'}>
                <h2 className={'block font-bold text-center text-3xl mt-28 mb-4'}>{currentNews?.title}</h2>
                <div
                    className={'float-left lg:w-1/2 w-full md:max-h-[32rem] h-64 mb-4 rounded-lg overflow-hidden md:px-0 px-6 !pr-6 relative'}>
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
                <p className={'font-normal text-lg mt-4 leading-8 md:px-0 px-6'}>
                    {currentNews?.description}
                </p>
            </div>
            <section id={'other-news'}>
            <PageTitleComponent title={t ('other-news')}/>
            <div className={"flex flex-wrap gap-8 md:mt-8 mt-4 justify-center " + (news.length === 4 ? 'md:justify-between' : 'md:justify-start')}>
                {
                    news.map((item, index) => (<NewsCardComponent key={index} {...item} scrollPosition={scrollPosition}/>))
                }
            </div>
            <div className="flex justify-center md:justify-end mt-8">
                    <ReactPaginate
                        previousLabel={t('previous')}
                        nextLabel={t('next')}
                        breakLabel={"..."}
                        pageCount={Math.ceil(totalCount / pageSize)} // Total number of pages
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination flex justify-center space-x-2"}
                        activeClassName={"active-page"} 
                        previousClassName={"bg-primary-purple text-white rounded"}
                        nextClassName={"bg-primary-purple text-white rounded"}
                        disabledClassName={"disabled:opacity-50"}
                        pageClassName={"bg-transparent border border-primary-purple rounded text-white"}
                        breakClassName={"break-me"}
                    />
                </div>
            </section>
        </div>
    );
}

export default trackWindowScroll(Controller)