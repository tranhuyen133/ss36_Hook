import React, { useState, useEffect } from 'react';

export default function Bai5() {
    const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId); 
  }, []);
  return (
    <div>Bai5
      <div>
      <h1>Thời gian thực</h1> <p>{time.toLocaleTimeString()}</p>
     
    </div>
    </div>
  )
}
