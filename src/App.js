import "./App.css";
import React from "react";
import {Helmet} from "react-helmet";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Hours from "./components/pages/Hours";
import Contact from "./components/pages/Contact"

function App() {
  return (
    <>
    <Helmet>
      <title>Dos Gatos</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="HandheldFriendly" content="true" />
    </Helmet>
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Hours />
        <Contact />
    </>
  );
}

export default App;
