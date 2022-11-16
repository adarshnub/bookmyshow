import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App"; 
import DefaultHOC from "./HOC/Default.HOC";
import DefaultLayout from "./layouts/Default.layout";



const RouteSwitch = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} 
                
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;