import React from "react";
import { Input } from "antd";
import "../../assets/css/pres.css";

const Pres = (props) => {
  const handleMed = (e, i) => {
    const form = [...props.form];
    form[i].med = e.target.value;
    props.setForm(form);
  };

  const handleDose = (e, i) => {
    const form = [...props.form];
    form[i].dose = e.target.value;
    props.setForm(form);
  };

  const handleTime = (e, i) => {
    const form = [...props.form];
    form[i].time = e.target.value;
    props.setForm(form);
  };

  const handleFreq = (e, i) => {
    const form = [...props.form];
    form[i].freq = e.target.value;
    props.setForm(form);
  };

  const handleDur = (e, i) => {
    const form = [...props.form];
    form[i].dur = e.target.value;
    props.setForm(form);
  };

  const handleQuantity = (e, i) => {
    const form = [...props.form];
    form[i].quantity = e.target.value;
    props.setForm(form);
  };

  return (
    <div className="form_head form_head_bg">
      <div className="add_input">
        <Input
          placeholder="Medicine"
          className="form_input"
          style={{ width: "80%", textAlign: "left" }}
          value={props.med}
          onChange={(e)=>handleMed(e, props.idx)}
        />
      </div>
      <div className="add_input">
        <Input
          placeholder="Dose"
          className="form_input"
          style={{ width: "80%", textAlign: "left" }}
          value={props.dose}
          onChange={(e)=>handleDose(e, props.idx)}
        />
      </div>
      <div className="add_input">
        <Input
          className="form_schedule"
          placeholder="M"
          value={props.time}
          onChange={(e)=>handleTime(e, props.idx)}
        />
        <Input
          className="form_schedule"
          placeholder="A"
          value={props.freq}
          onChange={(e)=>handleFreq(e, props.idx)}
        />
        <Input
          className="form_schedule"
          placeholder="E"
          value={props.dur}
          onChange={(e)=>handleDur(e, props.idx)}
        />
      </div>
      <div className="add_input">
        <Input
          className="form_input"
          placeholder="Quantity"
          style={{ width: "80%", textAlign: "center" }}
          value={props.quantity}
          onChange={(e)=>handleQuantity(e, props.idx)}
        />
      </div>
    </div>
  );
};

export default Pres;
