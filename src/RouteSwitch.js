import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App"; 
import DefaultHOC from "./HOC/Default.HOC";
import DefaultLayout from "./layouts/Default.layout";
import Temp from "./components/temp";



const RouteSwitch = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultHOC>
                    <Temp/>
                    </DefaultHOC>} 
                
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;