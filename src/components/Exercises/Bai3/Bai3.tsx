import React, { useState } from 'react';
import './Bai3.css';

export default function Bai3() {
    const [activeTab, setActiveTab] = useState<string>('Home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div>Bai3
      <nav>
      <ul className="navbar">
        <li 
          className={activeTab === 'Home' ? 'active' : ''} 
          onClick={() => handleTabClick('Home')}
        >
          Home
        </li>
        <li 
          className={activeTab === 'About' ? 'active' : ''} 
          onClick={() => handleTabClick('About')}
        >
          About
        </li>
        <li 
          className={activeTab === 'Services' ? 'active' : ''} 
          onClick={() => handleTabClick('Services')}
        >
          Services
        </li>
        <li 
          className={activeTab === 'Contact' ? 'active' : ''} 
          onClick={() => handleTabClick('Contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
    </div>
  )
}
