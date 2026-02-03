import { useState, useEffect } from "react";

export default function TitleToggle () {
  const [enabled, setEnabled] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => {
      setCount(c => c+1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [enabled]);

  useEffect(() => {
    if(!enabled) return;
    document.title = `Count: ${count}`;
    return () => document.title = "React App";
  }, [count, enabled]);

  return (
    <div>
      <h2>Title Toggle</h2>
      <label>
        <input 
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(e => !e)}
        />
        Auto update title
      </label>
      <p>Count: {count}</p>
    </div>
  )
}