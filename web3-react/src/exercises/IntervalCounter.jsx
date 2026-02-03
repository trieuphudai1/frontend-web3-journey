import { useState, useEffect } from "react";

export default function IntervalCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // functional update → không bị stale state
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // cleanup khi unmount
    return () => clearInterval(id);
  }, []); // không phụ thuộc state bên ngoài

  return (
    <div>
      <h2>Interval Counter</h2>
      <p>Count: {count}</p>
    </div>
  )
}
