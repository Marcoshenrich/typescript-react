import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pilot from './components/Pilot/Pilot';
import Splash from "./components/SplashPage/SplashPage";

import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pilot />} />
          {/* <Route path="/weather" element={<WeatherDisplay />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
