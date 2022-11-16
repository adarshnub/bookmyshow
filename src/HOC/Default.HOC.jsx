import React from "react";
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";




const DefaultHOC =({ element: Component,...rest })=> {
    return (
        <>
           <Route {...rest} element= {(props)=> (
            <DefaultLayout>
                <Component {...props}  />
            </DefaultLayout>
           )

           }
            /> 
        </>
    );
}


export default DefaultHOC;