"use client";

import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const num = parseFloat(value);

    if (isNaN(num)) {
      setResult({ error: "Please enter a valid number." });
      return;
    }

    setResult({
      number: num,
      square: num ** 2,
      cube: num ** 3,
      sqrt: num >= 0 ? Math.sqrt(num) : null,
      isEven: Number.isInteger(num) ? num % 2 === 0 : null,
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        fontFamily: "system-ui, sans-serif",
        padding: "1rem",
      }}
    >
      <h1>Hello, World! 👋</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
          style={{
            padding: "0.5rem 0.75rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "6px",
            background: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Calculate
        </button>
      </form>

      {result && (
        <div
          style={{
            border: "1px solid #eee",
            borderRadius: "8px",
            padding: "1rem 1.5rem",
            minWidth: "220px",
          }}
        >
          {result.error ? (
            <p style={{ color: "red", margin: 0 }}>{result.error}</p>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0, lineHeight: 1.8 }}>
              <li>Number: <strong>{result.number}</strong></li>
              <li>Square: <strong>{result.square}</strong></li>
              <li>Cube: <strong>{result.cube}</strong></li>
              <li>
                Square root:{" "}
                <strong>
                  {result.sqrt !== null ? result.sqrt.toFixed(4) : "N/A (negative number)"}
                </strong>
              </li>
              {result.isEven !== null && (
                <li>Even/Odd: <strong>{result.isEven ? "Even" : "Odd"}</strong></li>
              )}
            </ul>
          )}
        </div>
      )}
    </main>
  );
}
