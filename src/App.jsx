
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/users';
// import Home from './components/Home';
import HomeContainer from './containers/HomeContainer';
export default function App() {
  return (
   <>
   {/* <User data={{name:"Krupali"}}/>
   <Home /> */}
   <HomeContainer />
   </>
  );
};
  