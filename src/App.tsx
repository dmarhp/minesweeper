import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Settings } from './components/settings/Settings/Settings';
import { Game } from './components/game/Game/Game';

const App = () => (
  <Routes>
    <Route path="/settings" element={<Settings />} />
    <Route path="/play" element={<Game />} />
  </Routes>
);

export default App;
