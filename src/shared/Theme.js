import React from 'react';
import { useState } from 'react';
import '../style.css';

const Theme = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <div className="container">
      <div className="switch-checkbox">
      <label className="switch">
      <input type='checkbox'
        onChange={()=>setDarkMode(!darkMode)}
      />
      <span className="slider round"></span>
      </label>
      </div>
       
    </div>
    <div>
      <h1>Cool its {darkMode ? 'Dark' : 'Light'}</h1>
    </div>
    </div>
    );
};

export default Theme;