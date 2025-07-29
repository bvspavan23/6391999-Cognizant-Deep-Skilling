import React, { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // 1 INR = 0.011 EUR (approx)
    const converted = parseFloat(rupees) * conversionRate;
    setEuro(converted.toFixed(2));
  };

  return (
    <div style={{ marginTop: "30px",color: "green"}}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>EUR: €{euro}</p>}
    </div>
  );
}

export default CurrencyConverter;
