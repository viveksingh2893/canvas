import React from "react";
import { Input } from 'antd';
import '../../assets/css/pres.css'

const Pres=()=>{
    return(
        <div className="form_head form_head_bg">
            <div className="add_input">
            <Input placeholder="Medicine" className='form_input'style={{width:'80%',textAlign:'left'}}/>
            </div>
            <div className="add_input">
            <Input placeholder="Dose" className='form_input' style={{width:'80%',textAlign:'left'}}/>
            </div>
            <div className="add_input">
                <Input className='form_schedule'  placeholder="M"/>
                <Input  className='form_schedule'  placeholder="A"/>
                <Input  className='form_schedule'  placeholder="E"/>
            </div>
            <div className="add_input">
            <Input className='form_input' placeholder="Quantity" style={{width:'80%',textAlign:'center'}}/>
            </div>
        </div>
    )
}

export default Pres;