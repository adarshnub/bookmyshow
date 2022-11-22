import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/Home.page";
import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";




const RouteSwitch = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultHOC>
                    
                    <HomePage />
                    </DefaultHOC>} 
                
                />

                <Route path="/movie/:id" element={<MovieHOC>
                    <Movie />
                </MovieHOC>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;