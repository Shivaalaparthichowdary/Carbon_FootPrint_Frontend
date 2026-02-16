import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { Link } from "react-router-dom";

export default function Result() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    calculateCarbon();
  }, []);

  const calculateCarbon = async () => {
    try {
      const response = await api.post("/carbon/calculate");
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to calculate carbon footprint");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3>⏳ Calculating your carbon footprint...</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  if (!result) {
    return <h3>No result available</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌍 Carbon Footprint Result</h2>

      <p>🚗 Transport Emission: <b>{result.transportEmission}</b> kg CO₂</p>
      <p>⚡ Energy Emission: <b>{result.energyEmission}</b> kg CO₂</p>
      <p>🍽️ Diet Emission: <b>{result.dietEmission}</b> kg CO₂</p>

      <hr />

      <h3>✅ Total Emission: {result.totalEmission} kg CO₂</h3>

      <br />

      <Link to="/history">📊 View History</Link>
    </div>
  );
}
