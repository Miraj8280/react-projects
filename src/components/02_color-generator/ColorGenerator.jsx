import { useEffect } from "react";
import { useState } from "react";
import "./colorGenerator.css";

export default function ColorGenerator() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [isCopied, setIsCopied] = useState(false);

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
    setIsCopied(false);
  }

  useEffect(() => {
    handleGenerateRandomColor(colorType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorType]);

  function copyColorToClipboard() {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <div className="color-container">
      <h2>Random Color Generator</h2>
      <div className="color-box" style={{ backgroundColor: color }}>
        <div className="color-info">
          <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h4>{color}</h4>
          {isCopied && <p>Copied!</p>}
          <button className="button" onClick={copyColorToClipboard}>
            Copy color
          </button>
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
