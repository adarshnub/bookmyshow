import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./pages/Plays.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
         
     <DefaultHOC path="/" exact element={<HomePage />} /> 
     <MovieHOC path ="/movie/id:" exact element={<Movie />} />
     <DefaultHOC path="/plays/id:"  element={<Plays />} />
    </>

  );
}

export default App;
