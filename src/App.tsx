import React, { useState } from "react";
import "./App.css";

import { InputText } from "primereact/inputtext";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <InputText value={value} onChange={(e) => setValue((e.target as HTMLTextAreaElement).value)} />
      </header>
    </div>
  );
};

export default App;
