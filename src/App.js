import './App.css';
import Navbar from "./components/Navbar2";
import Carousel from "./components/ControlledCarousel";
import DiagonalDiv from "./components/DiagonalDiv";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Products from "./components/Products";
import './components/Navbar.css'
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
import Services from "./components/Services/Services";
import Services_Interner from "./components/Services/Services_Interner";
import Services_MobileBanking from "./components/Services/Services_MobileBanking";
import Services_Sms from "./components/Services/Services_Sms";
import M_Banking from "./components/Products/M_Banking";
import WebApp from "./components/Products/WebApp";
import M_Token from "./components/Products/M_Token";

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
        path: "/services",
        element: <>
            <Navbar/>
            <Services/>
            <Footer/>
        </>,

    },
    {
        path: "/m-banking",
        element: <>
            <Navbar/>
            <M_Banking/>
            <Footer/>
        </>,

    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
