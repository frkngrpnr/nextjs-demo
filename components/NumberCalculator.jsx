"use client";

import { useState } from "react";
import { calculate } from "@/lib/calculations";
import styles from "./NumberCalculator.module.css";

export default function NumberCalculator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setResult(calculate(value));
  }

  return (
    <main className={styles.main}>
      <h1>Hello, World! 👋</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </form>

      {result && (
        <div className={styles.resultBox}>
          {result.error ? (
            <p className={styles.error}>{result.error}</p>
          ) : (
            <ul className={styles.resultList}>
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
