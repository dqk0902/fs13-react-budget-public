import React from "react";
import { useState } from "react";
import { SavingProps } from "../interface/saving";

function Saving({ saving }: SavingProps) {
  const [target, setTarget] = useState(0);
  return (
    <div>
      <p>Current saving:{saving}</p>
      <p>Current target: {target}</p>
      <form action="">
        <label htmlFor="target">Reset target</label>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value))}
        />
      </form>
      <p>{(saving / target) * 100 || 0}%</p>
      <progress value={saving} max={target} />
    </div>
  );
}

export default Saving;
