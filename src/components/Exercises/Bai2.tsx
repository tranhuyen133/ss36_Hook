import React, { useState, useEffect } from 'react';

export default function Bai2() {
    const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>Bai2
      <div>
      <h2>Count Click</h2>
      <button onClick={handleClick}>Click me</button>
      <p>Click {count} lần</p>
    </div>
    </div>
  )
}
