import React, { useState, useEffect } from 'react';
export default function Bai1() {
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
      document.title = title;
    }, [title]);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    };
  return (
    <div>Bai1
      <div>
      <h2>Thay đổi tiêu đề </h2>
      <input 
        type="text" 
        value={title} 
        onChange={handleChange} 
        placeholder="Tiêu đề mới" 
      />
    </div>
    </div>
  )
}
