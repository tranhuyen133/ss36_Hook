import React, { useEffect } from 'react';

export default function Bai6() {
    const loremText = "Use Effect.".repeat(50);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.title = `Scroll Position: ${scrollPosition}`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>Bai6
       <div>
      <h2>Cuộn để xem hiệu ứng</h2>
      <p>{loremText}</p>
    </div>
    </div>
  )
}
