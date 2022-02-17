import React, { useState } from "react";

const EnterNumbers = () => {
  const [entry, setEntry] = useState("");
  const [evaluateState, setEvaluateState] = useState(false);

  console.log(evaluateState);

  return (
    <div>
      <input
        type="text"
        id="entry"
        onChange={(e) => setEntry(e.target.value)}
        value={entry}
        placeholder="Enter number 8"
      />
      <button onClick={() => setEvaluateState(true)}>Start checks!</button>
      {(!!evaluateState && entry == 8 && <h1> is 8 </h1>) ||
        (!!evaluateState && entry != 8 && <h1> not 8 </h1>)}
    </div>
  );
};

export default EnterNumbers;
