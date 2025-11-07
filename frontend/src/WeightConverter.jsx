import React, { useState } from "react";

function WeightConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("KILOGRAM");
  const [toUnit, setToUnit] = useState("GRAM");
  const [result, setResult] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const units = ["MILLIGRAM", "GRAM", "KILOGRAM", "OUNCE", "POUND"];

  const handleConvert = async () => {
    if (value === "") {
      alert("Please enter a value!");
      return;
    }

    setIsConverting(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/convert/weight",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: parseFloat(value),
            fromUnit: fromUnit,
            toUnit: toUnit,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check backend or network connection.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className={`converter-card ${isConverting ? "converting" : ""}`}>
      <h2 className="converter-title">Weight Converter</h2>
      <p className="converter-subtitle">
        Convert between common weight / mass units.
      </p>

      <div className="form-group">
        <label className="label">Value</label>
        <input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input"
        />
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label className="label">From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="select"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group half">
          <label className="label">To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="select"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleConvert}
        className={`convert-button ${isConverting ? "disabled" : ""}`}
        disabled={isConverting}
      >
        {isConverting ? "Converting..." : "Convert"}
      </button>

      {result !== null && (
        <p className="result-text">
          <span className="result-value">
            {value} {fromUnit} = {result.toFixed(4)} {toUnit}
          </span>
        </p>
      )}
    </div>
  );
}

export default WeightConverter;
