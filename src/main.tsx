// import React from 'react'

import App from './App.tsx'
import './index.css'
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(app)