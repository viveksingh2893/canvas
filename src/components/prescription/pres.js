import React from "react";
import { Input } from 'antd';

const Pres=()=>{
    return(
        <div className="pres-container">
            <Input placeholder="Medicine" style={{width:'21vw',textAlign:'center'}}/>
            <Input placeholder="Dose" style={{width:'21vw',textAlign:'center'}}/>
            <div>
                <Input style={{width:'7vw', textAlign:'center'}} placeholder="Timing"/>
                <Input style={{width:'7vw',margin:'.5vw', textAlign:'center'}} placeholder="Frequency"/>
                <Input style={{width:'7vw', textAlign:'center'}} placeholder="Duration"/>
            </div>
            <Input placeholder="Quantity" style={{width:'21vw',textAlign:'center'}}/>
        </div>
    )
}

export default Pres;