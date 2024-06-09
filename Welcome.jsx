import React, { useState } from 'react';
import Welcome from './Welcome';

const InteractiveWelcome = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log("Submitted name:", name);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          value={name} 
          onChange={handleInputChange} 
          placeholder="Enter your name" 
        />
        <button type="submit">Submit</button>
      </form>
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;

