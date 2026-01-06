
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  return (
    <div className="main-container">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p>Hello, {name}!</p>}
    </div>
  );
};

export default App;
