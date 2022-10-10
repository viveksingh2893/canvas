import React, { useEffect, useRef, useState } from "react";
import "../css/canvasscreen.css";

const CanvasScreen = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = (90*window.innerWidth) / 100;
    canvas.height = (90*window.innerHeight) / 100;

    const context = canvas.getContext("2d");
    // context.fillStyle = "#FFFFF";
    // context.fillRect(220,50,850,875);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
        return;
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    console.log("stop");
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clear=()=>{
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  // const down=()=>{
  //   var canvas = document.getElementById("mycanvas");
  //   var img    = canvas.toDataURL("image/png");
  //   document.write('<img src="'+img+'"/>');
  // }

  const download=()=>{
    var canvas = document.getElementById("mycanvas");
    var url = canvas.toDataURL("image/png");
    // var url = canvas.toDataURL("image/jpeg");
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = url;
    link.click();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <canvas
        id="mycanvas"
        className="canvas-container"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={()=>{download();stopDrawing()}}
        onMouseLeave={stopDrawing}
      ></canvas>
      <button onClick={clear} style={{border:'2px solid blue', marginTop:'2vh'}}>
        CLEAR
      </button>
    </div>
  );
};

export default CanvasScreen;
