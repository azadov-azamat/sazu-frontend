import React from "react";

import {Route, Routes} from "react-router-dom";
import {routes} from "./utils/constants.ts";
import Layout from "./layout/layout.tsx";
import {SiteLoadingComponent} from "./components";
import {IndexController} from "./app/index.ts";

// CSS
import './index.css'
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'aos/dist/aos.css';
import 'splitting/dist/splitting.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/scss/main.scss';

// CONFIG
import './utils/i18n.ts';

function App() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        loading ? <SiteLoadingComponent/> : <Routes>
            {
                routes.map(route =>
                    <Route
                        key={route.id}
                        path={route.path}
                        element={
                            <Layout>
                                <route.component/>
                            </Layout>}
                    />
                )
            }
            <Route path="*" element={<Layout><IndexController/></Layout>}/>
        </Routes>
    )
}

export default App
