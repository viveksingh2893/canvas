import React from "react";
import {Routes, Route} from 'react-router-dom';
import Prescription from "./prescription";
const Screen=()=>{
    return(
        <div style={{height:'100vh',width:'100vw',backgroundColor:'white'}}>
            <Routes>  
                <Route path="/" element={<Prescription/>} />
            </Routes>
        </div>
    )
}

export default Screen;