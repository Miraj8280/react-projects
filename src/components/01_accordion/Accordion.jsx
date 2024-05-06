import "./accordion.css";
import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isMultiSelectEnabled, setIsMultiSelectEnabled] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function toggleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function toggleMultiSelection(id) {
    let temp = [...multiSelected];
    const index = temp.indexOf(id);

    if (index === -1) {
      temp.push(id);
    } else {
      temp.splice(index, 1);
    }

    setMultiSelected(temp);
  }

  return (
    <div className="container">
      <h2>Accordion - Single Select & Multi-Select</h2>
      <div className="selection-mode">
        <label>
          <input
            type="checkbox"
            checked={isMultiSelectEnabled}
            onChange={() => setIsMultiSelectEnabled(!isMultiSelectEnabled)}
          />
          Enable Multi-Select
        </label>
      </div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => {
            const isSelected = selected === item.id;
            const isMultiSelected = multiSelected.includes(item.id);
            return (
              <div key={item.id} className="item">
                <div
                  onClick={() =>
                    isMultiSelectEnabled
                      ? toggleMultiSelection(item.id)
                      : toggleSingleSelection(item.id)
                  }
                  className="question"
                >
                  <h3>{item.question}</h3>
                  <span>{isSelected || isMultiSelected ? "-" : "+"}</span>
                </div>
                <div>
                  {(isMultiSelectEnabled && isMultiSelected) ||
                  (!isMultiSelectEnabled && isSelected) ? (
                    <div className="answer">{item.answer}</div>
                  ) : null}
                </div>
              </div>
            );
          })
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
