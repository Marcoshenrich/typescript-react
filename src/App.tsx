import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/SplashPage/SplashPage";

import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <WeatherDisplay />
        <Routes>
          {/* <Route path="/home" element={<Splash />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
