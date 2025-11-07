import React, { useState } from "react";
import LengthConverter from "./LengthConverter";
import WeightConverter from "./WeightConverter";
import TemperatureConverter from "./TemperatureConverter";
import "./App.css";
import { FaExchangeAlt } from "react-icons/fa"; 
function App() {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("length"); // "length" | "weight" | "temperature"

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const renderActiveConverter = () => {
    if (activeTab === "length") return <LengthConverter />;
    if (activeTab === "weight") return <WeightConverter />;
    if (activeTab === "temperature") return <TemperatureConverter />;
    return null;
  };

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1 className="app-title">
              <FaExchangeAlt className="app-icon" /> Convertify
        </h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
        </button>
      </header>

      <main className="app-main">
        <div className="converter-container">
          <div className="tab-row">
            <button
              className={`tab-button ${
                activeTab === "length" ? "active" : ""
              }`}
              onClick={() => setActiveTab("length")}
            >
              📏 Length
            </button>
            <button
              className={`tab-button ${
                activeTab === "weight" ? "active" : ""
              }`}
              onClick={() => setActiveTab("weight")}
            >
              ⚖️ Weight
            </button>
            <button
              className={`tab-button ${
                activeTab === "temperature" ? "active" : ""
              }`}
              onClick={() => setActiveTab("temperature")}
            >
              🌡️ Temperature
            </button>
          </div>

          {renderActiveConverter()}
        </div>
      </main>
    </div>
  );
}

export default App;
