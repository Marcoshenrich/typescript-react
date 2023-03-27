import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/splash/splash";


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
