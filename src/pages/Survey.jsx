import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

export default function Survey() {
  const navigate = useNavigate();

  const [transportKm, setTransportKm] = useState("");
  const [electricityUnits, setElectricityUnits] = useState("");
  const [cookingFuelUsage, setCookingFuelUsage] = useState("");
  const [surveyDate, setSurveyDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/survey/submit", {
        transportKm,
        electricityUnits,
        cookingFuelUsage,
        surveyDate,
      });

      alert("Survey submitted successfully");
      navigate("/result");
    } catch (error) {
      alert("Survey submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lifestyle Survey</h2>

      <input
        type="number"
        placeholder="Transport (km)"
        value={transportKm}
        onChange={(e) => setTransportKm(e.target.value)}
      />

      <input
        type="number"
        placeholder="Electricity Units"
        value={electricityUnits}
        onChange={(e) => setElectricityUnits(e.target.value)}
      />

      <input
        type="number"
        placeholder="Cooking Fuel Usage"
        value={cookingFuelUsage}
        onChange={(e) => setCookingFuelUsage(e.target.value)}
      />

      <input
        type="date"
        value={surveyDate}
        onChange={(e) => setSurveyDate(e.target.value)}
      />

      <button type="submit">Submit Survey</button>
    </form>
  );
}
