import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/carbon/history");
      setHistory(res.data);
    } catch (error) {
      alert("Failed to load history");
    }
  };

  return (
    <div>
      <h2>📜 Carbon Footprint History</h2>

      {history.length === 0 ? (
        <p>No history found</p>
      ) : (
        <ul>
          {history.map((item) => (
            <li key={item.id}>
              {item.date} → {item.totalEmission} kg CO₂
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
