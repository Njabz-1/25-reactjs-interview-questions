import { useState, useEffect } from "react";
export default function RandomColor(){
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

function handleCreateRandomHexColor(){
const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
let hexColor = "#";

for(let i = 0; i < 6; i++){
    const random = Math.floor(Math.random() * hex.length);
    hexColor += hex[random];
}
setColor(hexColor);
}

useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

function handleCreateRandomRgbColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
}

    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Generate Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "30px",
            marginTop: "20px",
        }}>
            <h3>{typeOfColor === "rgb" ? "RGB Color": "HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
        </div>
    )
}