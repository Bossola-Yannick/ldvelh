import React from "react";
import { UsePersistedState } from "../hooks/usePersistedState";

export function LoupSolitaire() {
  const [count, setCount] = UsePersistedState("count", 0);
  return (
    <>
      <h1>LOUP-SOLITAIRE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
