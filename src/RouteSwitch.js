import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/Home.page";
import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./pages/Plays.page";




const RouteSwitch = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultHOC>
                    
                    <HomePage />
                    
                    </DefaultHOC>} 
                
                />

                <Route path="/movie/id:" element={<MovieHOC>
                    <Movie />
                </MovieHOC>} />

                <Route path="/plays/id:" element={<DefaultHOC>
                    <Plays />
                </DefaultHOC>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;