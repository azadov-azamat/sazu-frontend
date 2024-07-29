import {Route, Routes} from "react-router-dom";
import {routes} from "./utils/constants.ts";
import Layout from "./layout/layout.tsx";
import './index.css'
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'aos/dist/aos.css';
import 'splitting/dist/splitting.css';

function App() {

    return (
        <Routes>
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
        </Routes>
    )
}

export default App
