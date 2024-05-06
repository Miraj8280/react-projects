import { useEffect } from "react";
import { useState } from "react";

export default function ColorGenerator() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomColor(type) {
    if (type === "hex") {
      const hex = "0123456789ABCDEF";
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(16)];
      }
      setColor(hexColor);
    } else if (type === "rgb") {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);
      setColor(`rgb(${r},${g},${b})`);
    }
  }

  useEffect(() => {
    handleGenerateRandomColor(colorType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorType]);

  return (
    <div className="container" style={{height: "100vh"}}>
      <h2>Random Color Generator</h2>
      <div className="color-box">
        <div className="color-info">
          <h2>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h2>
          <h3>{color}</h3>
        </div>
      </div>
      <select
        className="select"
        value={colorType}
        onChange={(e) => setColorType(e.target.value)}
      >
        <option value="hex">HEX Color</option>
        <option value="rgb">RGB Color</option>
      </select>
      <button
        className="button"
        onClick={() => handleGenerateRandomColor(colorType)}
      >
        Generate Random Color
      </button>
    </div>
  );
}
