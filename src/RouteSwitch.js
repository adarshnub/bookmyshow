import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App"; 
import DefaultHOC from "./HOC/Default.HOC";
import DefaultLayout from "./layouts/Default.layout";
import HomePage from "./pages/Home.page";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel.component";
import EntertainmentCardSlider from "./components/Entertainment/Entertainmentcard.component";


const RouteSwitch = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultHOC>
                    
                    <HomePage />
                    </DefaultHOC>} 
                
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;