import React, { useState, useEffect, useRef } from 'react';
export default function Bai7() {
    const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>Bai7
      <div>
      <h1>Counter</h1>
      <p>Gía trị trước: {count}</p>
      <p>Gia trị hiện tại: {prevCountRef.current}</p>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>
    </div>
  )
}
