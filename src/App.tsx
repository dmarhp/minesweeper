import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Settings from './Components/Pages/Settings/Settings';
import Game from './Components/Pages/Game/Game';
import Home from './Components/Pages/Home/Home';
import AppHeader from './Components/AppHeader/AppHeader';

const App = () => (
  <div className="app">
    <AppHeader />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/play" element={<Game />} />
    </Routes>
  </div>
);

export default App;
