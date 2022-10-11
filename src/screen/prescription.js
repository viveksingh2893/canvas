import React, { useEffect, useState } from "react";
import Pres from "../components/prescription/pres";
import "../assets/css/pres.css";
import SvgIcon from "../assets/svgicon/svgicon";
import { Input } from 'antd';
const { TextArea } = Input;

const Prescription = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        backgroundImage: 'linear-gradient(to right, #113ff5, #11f52f, #113ff5)',
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", width: "100%", marginBottom:'1vw' }}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center',margin:'1vw',backgroundColor:'#D9D9D9', height:'18vh'}}>
            <p className="pres-title">DESTRATUM</p>
          </div>
          <SvgIcon name="prescription" width="5vw" height="5vh" />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end",justifyContent:'center', width: "100%", }}>
            <p className="pres-title" style={{fontSize:'2vw'}}>PRESCRIPTION</p>
        </div>
        <div style={{ display: "flex",flexDirection:'column',justifyContent:'center', alignItems: "center", width: "100%" }}>
            <div>
            <p className="pres-title" style={{fontSize:"2vw", textAlign:"left"}}>Dr.N.Thoufick,M.D</p>
            <p className="pres-title" style={{fontSize:"1vw", textAlign:'left'}}>CONSULTANTS NEURO</p>
            <p className="pres-title" style={{fontSize:"1vw", textAlign:'left'}}>REGD.NO</p>
            <p className="pres-title" style={{fontSize:"1vw", textAlign:'left'}}>MOBILE NO:978542536</p>
            </div>
        </div>
      </div>
      <div className="pres-main-container">
        <p className="pres-title">MEDICINE</p>
        <p className="pres-title">DOSE</p>
        <p className="pres-title">TIMING- FREQ- DURATION</p>
        <p className="pres-title">QTY</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        <Pres />
        <Pres />
        <Pres />
      </div>
      <button className="submit-btn">
        <p style={{margin:0}}>SUBMIT</p>
      </button>
    </div>
  );
};

export default Prescription;
