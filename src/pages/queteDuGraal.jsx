import React from "react";
import { UsePersistedState } from "../hooks/usePersistedState";

export function QueteDuGraal() {
  const [count, setCount] = UsePersistedState("count", 0);
  return (
    <>
      <h1>QUETE-DU-GRAAL</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
