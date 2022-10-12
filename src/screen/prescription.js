import React, { useEffect, useState } from "react";
import Pres from "../components/prescription/pres";
import "../assets/css/pres.css";
import SvgIcon from "../assets/svgicon/svgicon";
import { Input } from "antd";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const Prescription = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState([
    {
      med: null,
      dose: null,
      time: null,
      freq: null,
      dur: null,
      quantity: null,
    },
  ]);

  const handleAddMeds = () => {
    const forms = [...form];
    forms.push({
      med: null,
      dose: null,
      time: null,
      freq: null,
      dur: null,
      quantity: null,
    });
    setForm(forms);
  };

  console.log("form", form);

  const handleSubmit = () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: "1vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "95%",
            padding: "1rem",
          }}
        >
          {/* <div style={{display:'flex', justifyContent:'center', background:'#30C74E',alignItems:'center',backgroundColor:'#D9D9D9'}}>
            <p className="pres-title"style={{fontSize:"1.2rem"}}>Destratum health</p>
          </div> */}
          <SvgIcon name="prescription" width="5vw" height="5vh" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p
            className="pres-title"
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#000" }}
          >
            PRESCRIPTION
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <p
              className="pres-title"
              style={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Dr.N.Thoufick,M.D
            </p>
            <p
              className="pres-title"
              style={{ fontSize: "0.8rem", color: "black", textAlign: "left" }}
            >
              CONSULTANTS NEURO
            </p>
            <p
              className="pres-title"
              style={{ fontSize: "0.8rem", color: "black", textAlign: "left" }}
            >
              REGD.NO
            </p>
            <p
              className="pres-title"
              style={{ fontSize: "0.8rem", color: "black", textAlign: "left" }}
            >
              MOBILE NO:978542536
            </p>
          </div>
        </div>
      </div>
      <div className=" form_head ">
        <p className="pres-title">Medicine</p>
        <p className="pres-title">Dose</p>
        <p className="pres-title">Time- Freq- Dur</p>
        <p className="pres-title">Quantity</p>
      </div>

      {form.map((addmeds, idx) => {
        return (
          <div key={`${addmeds + "_" + idx}`}>
            <Pres
              idx={idx}
              topic={addmeds.topic}
              addmeds={addmeds}
              med={addmeds.med}
              dose={addmeds.dose}
              time={addmeds.time}
              freq={addmeds.freq}
              dur={addmeds.dur}
              quantity={addmeds.quantity}
              form={form}
              setForm={setForm}
            />
          </div>
        );
      })}

      <div
        className="form_head"
        style={{ background: "#fff", justifyContent: "flex-end" }}
      >
        <button
          className="button"
          style={{ background: "#30C74E", fontSize: "1rem" }}
          onClick={() => {
            handleAddMeds();
            // navigate(0);
          }}
        >
          + Add
        </button>
      </div>

      <button
        className="button"
        onClick={() => {
          handleSubmit();
          // navigate(0);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Prescription;
