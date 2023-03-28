import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import "./App.css";

export default function App(){

  function darkMode(){
      document.getElementById('header').classList.toggle('dark-mode-header');
      document.body.classList.toggle('dark-mode');
  }

  return(
    <main>
      <Header 
      darkMode={darkMode}/>
      <MainContent />
    </main>
  )
}