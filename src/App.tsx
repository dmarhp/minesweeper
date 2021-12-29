import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import { Settings } from './components/_settings/Settings/Settings';
import { Game } from './components/_game/Game/Game';

const App = () => (
  <Routes>
    <Route path="/settings" element={<Settings />} />
    <Route path="/play" element={<Game />} />
  </Routes>
);

export default App;
