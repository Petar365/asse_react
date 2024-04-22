import React from "react";
import './App.css';
import Navbar from "./components/Navbar2";
import Carousel from "./components/ControlledCarousel";
import DiagonalDiv from "./components/DiagonalDiv";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import './css/style.css'
import './css/owl.carousel.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/bootstrap.min.css'
import "@fontsource/raleway";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Footer from "./components/Footer";
import Drivers from "./components/Drivers";
import Instructions from "./components/Instructions";
import FAQ from "./components/FAQ";
import Services_Interner from "./components/Services/Services_Interner";
import Services_MobileBanking from "./components/Services/Services_MobileBanking";
import Services_Sms from "./components/Services/Services_Sms";
import M_Banking from "./components/Products/M_Banking";
import WebApp from "./components/Products/WebApp";
import M_Token from "./components/Products/M_Token";
import E_Banking from "./components/Products/E-Banking";
import {Fragment} from 'react';
import ScrollToTop from "react-scroll-to-top";

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Navbar/>
            <Carousel/>
            <DiagonalDiv/>
            <Clients/>
            <Contact/>
            <Footer/>
        </>,
    },
    {
        path: "/products_webapp",
        element: <>
            <Navbar/>
            <WebApp/>
            <Footer/>
        </>,
    },
    {
        path: "/products_m-token",
        element: <>
            <Navbar/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <M_Token/>
            <Footer/>
        </>,
    },
    {
        path: "/products_m-banking",
        element: <>
            <Navbar/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <M_Banking/>
            <Footer/>
        </>,
    },
    {
        path: "/drivers",
        element: <>
            <Navbar/>
            <Drivers/>
            <Footer/>
        </>,

    },
    {
        path: "/instructions",
        element: <>
            <Navbar/>
            <Instructions/>
            <Footer/>
        </>,

    },
    {
        path: "/faq",
        element: <>
            <Navbar/>
            <FAQ/>
            <Footer/>
        </>,

    },
    {
        path: "/faq",
        element: <>
            <Navbar/>
            <FAQ/>
            <Footer/>
        </>,

    },
    {
        path: "/services-internet",
        element: <>
            <Navbar/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Services_Interner/>
            <Footer/>
        </>,

    },
    {
        path: "/services-mobile",
        element: <>
            <Navbar/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Services_MobileBanking/>
            <Footer/>
        </>,

    },
    {
        path: "/services-sms",
        element: <>
            <Navbar/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Services_Sms/>
            <Footer/>
        </>,

    },
    {
        path: "/products_e-banking",
        element: <>
            <Navbar/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <E_Banking/>
            <Footer/>
        </>,
    },
]);

function App() {
    return (
        <div className="App">
            <ScrollToTop className="goTop"
                         smooth
                         color="white"
                         viewBox="0 0 17 18"
                         svgPath="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z
                         M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
