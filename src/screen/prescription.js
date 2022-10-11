import React, { useEffect, useState } from "react";
import Pres from "../components/prescription/pres";
import "../assets/css/pres.css";
import SvgIcon from "../assets/svgicon/svgicon";
import { Input } from 'antd';
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
const { TextArea } = Input;

const Prescription = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
       
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", width: "100%", marginBottom:'1vw' }}>
        <div style={{ display: "flex", flexDirection: "column", width: "95%",padding:'1rem' }}>
          {/* <div style={{display:'flex', justifyContent:'center', background:'#30C74E',alignItems:'center',backgroundColor:'#D9D9D9'}}>
            <p className="pres-title"style={{fontSize:"1.2rem"}}>Destratum health</p>
          </div> */}
          <SvgIcon name="prescription" width="5vw" height="5vh" />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end",justifyContent:'center', width: "100%", }}>
            <p className="pres-title" style={{fontSize:'1.5rem',fontWeight:"bold",color:'#000'}}>PRESCRIPTION</p>
        </div>
        <div style={{ display: "flex",flexDirection:'column',justifyContent:'center', alignItems: "center", width: "100%" }}>
            <div >
            <p className="pres-title" style={{fontSize:"1rem", color:'black',fontWeight:"bold",textAlign:"left"}}>Dr.N.Thoufick,M.D</p>
            <p className="pres-title" style={{fontSize:"0.8rem", color:'black',textAlign:'left'}}>CONSULTANTS NEURO</p>
            <p className="pres-title" style={{fontSize:"0.8rem", color:'black',textAlign:'left'}}>REGD.NO</p>
            <p className="pres-title" style={{fontSize:"0.8rem", color:'black',textAlign:'left'}}>MOBILE NO:978542536</p>
            </div>
        </div>
      </div>
      <div className=" form_head " >
        <p className="pres-title">Medicine</p>
        <p className="pres-title">Dose</p>
        <p className="pres-title">Time- Freq- Dur</p>
        <p className="pres-title">Quantity</p>
      </div>
      
        <Pres />
      <div className='form_head'style={{background:'#fff',justifyContent:'flex-end'}}> 
      <button className="button"style={{background:'#30C74E',fontSize:'1rem'}}>
        + Add 
      </button>
      </div>
      <button className="button">
        Submit
      </button>
    </div>
  );
};

export default Prescription;
