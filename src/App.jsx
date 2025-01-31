
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './components/users';

export default function App() {
  return (
   <>
   <User data={{name:"Krupali"}}/>
   </>
  );
};
  